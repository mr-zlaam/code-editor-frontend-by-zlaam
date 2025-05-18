import { string, type ZodType, object } from "zod";

export const signInSchema: ZodType<UserSignInTypes> = object({
  email: string({ message: "username or email is required" })
    .trim()
    .max(100, {
      message: "This field must not contain more than 100 characters"
    })
    .min(1, { message: "username or email is required" }),

  password: string().min(1, { message: "password is required" })
});
export interface UserSignInTypes {
  email: string;
  password: string;
}
export interface UserUpdatePasswordTypes {
  password: string;
  confirmPassword: string;
}

export const passwordSchema: ZodType<UserUpdatePasswordTypes> = object({
  password: string()
    .min(1, { message: "password is required" })
    .min(6, { message: "password must contain at least 6 characters" })
    .regex(new RegExp(/^(?!.*\s)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~`-])[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?/~`-]{6,}$/), {
      message: "Password is not strong (e.g: p@ssword)"
    })
    .max(50, { message: "Password is too long" }),
  confirmPassword: string()
    .min(1, { message: "confirm password  is required" })
    .min(6, { message: "confirm password must contain at least 6 characters" })
    .max(50, { message: "Password is too long" })
}).refine((data) => data.password === data.confirmPassword, {
  message: "confirm password is not same as passwords",
  path: ["confirmPassword"]
});
