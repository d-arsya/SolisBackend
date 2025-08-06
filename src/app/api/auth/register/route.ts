import { sendResponse } from "@/lib/api-response";
// import { upload } from "@/service/storage.service";
import { createUser } from "@/service/user.service";
import { registerSchema } from "@/types/validation.type";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { user } from "@/types/database.type";

export async function POST(request: NextRequest) {
  const form = await request.json();
  // const body = {
  //   password: form.get("password"),
  //   email: form.get("email"),
  //   avatar: form.get("avatar"),
  // };
  const result = registerSchema.safeParse(form);

  if (!result.success) {
    return sendResponse(
      result.error.flatten().fieldErrors,
      "Validation failed",
      400
    );
  }
  // const fileUpload = await upload(body.avatar);
  // const filename = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${fileUpload.data?.fullPath}`;
  // body.avatar = filename;
  const hashedPassword = await bcrypt.hash(result.data.password as string, 10);
  result.data.password = hashedPassword;
  const payload: any = result.data;
  payload.avatar =
    "https://ui-avatars.com/api/?name=" + result.data.name.split(" ").join("+");
  try {
    const user: user = await createUser(payload);
    const {
      id: _id,
      created_at: _createdAt,
      password: _password,
      ...publicUser
    } = user;
    return sendResponse(publicUser, "Success create new user", 200);
  } catch (error: any) {
    return sendResponse(null, error.message, 400);
  }
}
