"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { signInSchema, type UserSignInTypes } from "@/validation/signInValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import DivWrapper from "@/appComponents/divWrapper/devWrapper";
export function SignInForm({ className, ...props }: React.ComponentPropsWithoutRef<"form">) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSignInTypes>({ resolver: zodResolver(signInSchema) });
  const [showPassword, setShowPassword] = useState(false);
  const handleSignIn = (data: UserSignInTypes) => {
    const hero = false;
    console.info(data);
    if (hero) {
      reset();
    }
  };
  return (
    <form
      onSubmit={(e) => void handleSubmit(handleSignIn)(e)}
      className={cn("flex flex-col gap-6", className)}
      {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">Enter your email below to login to your account</p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
          />
          {errors.email && <p className="text-xs select-none text-red-500  text-balance ml-2">{errors.email.message}</p>}
        </div>
        <div className="grid gap-2 relative">
          <div className="flex items-center ">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgotPassword"
              className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("password")}
            className="pr-16"
          />
          {errors.password && <p className="text-xs select-none text-red-500  text-balance ml-2">{errors.password.message}</p>}
          <DivWrapper
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-8  cursor-pointer h-7 w-7">
            {showPassword ? <FaEye /> : <RiEyeCloseLine />}
          </DivWrapper>
        </div>
        <Button
          type="button"
          className="w-full cursor-pointer">
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
        <Button
          disabled
          variant="outline"
          className="w-full">
          <FaGithub />
          Login with GitHub
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
