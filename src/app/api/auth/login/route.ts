import { sendResponse } from "@/lib/api-response";
import { getUserByEmail } from "@/service/user.service";
import { loginSchema } from "@/types/validation.type";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { signJWT } from "@/lib/util";

export async function POST(request: NextRequest) {
  const form = await request.json();
  const result = loginSchema.safeParse(form);

  if (!result.success) {
    return sendResponse(
      result.error.flatten().fieldErrors,
      "Validation failed",
      400
    );
  }
  const { data } = await getUserByEmail(result.data.email);
  const { password } = data;
  const tr = await bcrypt.compare(result.data.password, password);
  if (tr) {
    const payload = { email: data.email, avatar: data.avatar };
    const token = await signJWT(payload);
    const refresh = await signJWT(payload, "7d");
    return sendResponse({ token, refresh }, "Success login", 200);
  } else {
    return sendResponse(null, "Failed login", 400);
  }
}
