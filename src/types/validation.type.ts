import z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(4).max(64),
    email: z.email().min(10),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
    // avatar: z.file().max(3_000_000).mime(["image/jpeg", "image/png"]).min(1000),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Password not match",
  })
  .transform(({ passwordConfirm: _passwordConfirm, ...rest }) => rest);

export const loginSchema = z.object({
  email: z.email().min(10),
  password: z.string().min(8),
});
