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
