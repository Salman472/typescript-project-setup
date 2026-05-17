import { z } from "zod";
// register user
export const registerValidationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

// login user
export const loginValidationSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password required"),
});

export const verifyOtpValidationSchema = z.object({
  email: z.email(),
  otp: z.string().length(6),
});

export type RegisterInput = z.infer<typeof registerValidationSchema>;
export type LogInInput = z.infer<typeof loginValidationSchema>;
export type OtpInput = z.infer<typeof verifyOtpValidationSchema>;
