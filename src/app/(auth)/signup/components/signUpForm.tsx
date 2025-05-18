"use client";
import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import type { RESPONSE_ERR, UserSignUpTypes } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/validation/signupValidation";
import { useMessage } from "@/hooks/useMessage";
import DivWrapper from "@/appComponents/divWrapper/devWrapper";
import { instance } from "@/axios";
import { useLoading } from "@/hooks/useLoading";
import { useRouter } from "next/navigation";
export function SignUpForm({ className, ...props }: React.ComponentPropsWithoutRef<"form">) {
  const router = useRouter();
  const { errorMessage, successMessage } = useMessage();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSignUpTypes>({ resolver: zodResolver(signUpSchema) });

  const { isLoading, startLoading, stopLoading } = useLoading();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const handleSignUpSubmit = async (data: UserSignUpTypes) => {
    try {
      startLoading();
      const response = await instance.post("/user/registerUser", data);
      if (response.status === 200) {
        successMessage("Please Check Your Email To Verify Your Account", "top-center", 100000);
        stopLoading();
        router.push("/");
        reset();
      }
      return response;
    } catch (err: unknown) {
      stopLoading();
      const error = err as RESPONSE_ERR;
      if (err instanceof Error) {
        console.info(error?.response?.data?.details);
        errorMessage("Unable to create an account. Please try again");
        return;
      }
      console.info(err);
      errorMessage("Unable to create an account. Please try again");
      return;
    } finally {
      stopLoading();
    }
  };
  return (
    <form
      onSubmit={(e) => void handleSubmit(handleSignUpSubmit)(e)}
      className={cn("flex flex-col gap-6 py-4", className)}
      {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-balance text-sm text-muted-foreground">Enter your details below to create to your account</p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            {...register("username")}
            placeholder="john_doe"
          />
          {errors.username && <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.username.message}</span>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            type="text"
            placeholder="John Doe"
          />

          {errors.fullName && <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.fullName.message}</span>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
          />
          {errors.email && <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.email.message}</span>}
        </div>

        <div className="grid gap-2 relative">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pr-16"
          />

          {errors.password && <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.password.message}</span>}
          <DivWrapper
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-7  cursor-pointer h-7 w-7">
            {showPassword ? <FaEye /> : <RiEyeCloseLine />}
          </DivWrapper>
        </div>
        <div className="grid gap-2 relative">
          <div className="flex items-center">
            <Label htmlFor="confirmpassword">Confirm Password</Label>
          </div>
          <Input
            id="confirmpassword"
            {...register("confirmPassword")}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pr-16"
          />

          {errors.confirmPassword && (
            <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.confirmPassword.message}</span>
          )}
          <DivWrapper
            type="button"
            onClick={() => setConfirmShowPassword((prev) => !prev)}
            className="absolute right-3 top-7  cursor-pointer h-7 w-7">
            {showConfirmPassword ? <FaEye /> : <RiEyeCloseLine />}
          </DivWrapper>
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className={cn("w-full cursor-pointer")}>
          {isLoading ? <ImSpinner8 className="animate-spin" /> : <span>Create Your Account</span>}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
        <Button
          disabled
          variant="outline"
          className="w-full">
          <FaGithub />
          continue with GitHub
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/signin"
          className="underline underline-offset-4">
          Sign in
        </Link>
      </div>
    </form>
  );
}
