import { NextResponse } from "next/server";

export function sendResponse(data: any = null, message = "OK", code = 200) {
  return NextResponse.json(
    { success: code < 400, code, message, data },
    { status: code }
  );
}
