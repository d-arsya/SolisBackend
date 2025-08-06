import { createClient } from "@/lib/supabase";
import { jwtVerify } from "@/lib/util";
import { NextRequest } from "next/server";

export async function createUser(payload: any) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("users")
    .insert(payload)
    .select()
    .single();
  if (error) {
    if (error.message.includes("duplicate key") || error.code === "23505") {
      throw new Error("Email is taken");
    }
    throw error;
  }
  return data;
}

export async function getUserByEmail(email: string) {
  const supabase = await createClient();
  return supabase.from("users").select().eq("email", email).single();
}

export async function getUser(request: NextRequest) {
  const authHeader = request.headers.get("authorization") || "";
  const token = authHeader.replace("Bearer ", "");
  const { email } = (await jwtVerify(token)) as { email: string };

  const { data } = await getUserByEmail(email);

  return data;
}
