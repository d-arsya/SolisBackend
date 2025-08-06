import { sendResponse } from "@/lib/api-response";
import { jwtVerify, signJWT } from "@/lib/util";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { refresh } = await request.json();

  if (!refresh) {
    return sendResponse(null, "Missing refresh token", 401);
  }

  const payload = await jwtVerify(refresh);
  if (!payload) {
    return sendResponse(null, "Invalid refresh token", 401);
  }

  const token = await signJWT(payload);

  return sendResponse({ token }, "Access token refreshed", 200);
}
