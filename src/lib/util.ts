import { jwtVerify as joseJwtVerify, SignJWT } from "jose";
import {} from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "secret-token";
const encoder = new TextEncoder();

export async function signJWT(
  payload: Record<string, unknown>,
  expiration: string = "15m"
) {
  const secret = encoder.encode(JWT_SECRET);

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiration)
    .sign(secret);

  return token;
}

export async function jwtVerify(token: string): Promise<any | null> {
  try {
    const { payload } = await joseJwtVerify(token, encoder.encode(JWT_SECRET));
    return payload;
  } catch {
    return null;
  }
}
