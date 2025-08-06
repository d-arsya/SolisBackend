import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "./lib/util";
import { sendResponse } from "./lib/api-response";

const PUBLIC_PATHS = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/refresh",
  "/api",
  "/api/docs",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths without JWT
  if (PUBLIC_PATHS.some((path) => pathname == path)) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");
  const payload = await jwtVerify(token);
  if (!payload) {
    return sendResponse(null, "Invalid or expired token", 401);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"], // Only run middleware for API routes
};
