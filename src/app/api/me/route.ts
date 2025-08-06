import { sendResponse } from "@/lib/api-response";
import { getUser } from "@/service/user.service";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const {
    id: _id,
    created_at: _createdAt,
    password: _password,
    ...user
  } = await getUser(request);
  return sendResponse(user, "Success retrieve user data", 200);
}
