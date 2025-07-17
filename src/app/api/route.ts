import { sendResponse } from "@/lib/api-response";

export async function GET() {
  return sendResponse({ text: "Hello world" }, "Hello world", 200);
}
