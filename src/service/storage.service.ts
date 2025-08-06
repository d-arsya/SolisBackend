import { createClient } from "@/lib/supabase";

export async function upload(data: any) {
  const supabase = await createClient();
  const extension = data.name.split(".").pop();
  const filename = `${crypto.randomUUID()}.${extension}`;
  return supabase.storage
    .from(process.env.SUPABASE_BUCKET || "")
    .upload(`avatar/${filename}`, data, {
      cacheControl: "3500",
      upsert: false,
    });
}
