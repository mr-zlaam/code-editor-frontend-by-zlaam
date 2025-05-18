"use client";

import DivWrapper from "@/appComponents/divWrapper/devWrapper";
import { instance } from "@/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoading } from "@/hooks/useLoading";
import { useMessage } from "@/hooks/useMessage";
import { cn } from "@/lib/utils";
import type { RESPONSE_ERR } from "@/types";
import type { UserUpdatePasswordTypes } from "@/validation/signInValidation";
import { passwordSchema } from "@/validation/signInValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { RiEyeCloseLine } from "react-icons/ri";

export default function ResetAndUpdateNewPassword() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const messages = useMessage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserUpdatePasswordTypes>({ resolver: zodResolver(passwordSchema) });
  useEffect(() => {
    if (token === null || token === undefined) {
      return router.push("/signin");
    }
  }, [router, token]);

  if (token === null || token === undefined) {
    return (
      <>
        <div>
          <button
            disabled={true}
            className="bg-primary text-background w-[250px] h-[70px] flex items-center justify-center  rounded-md cursor-not-allowed  shadow-md shadow-black/40 ">
            Redirecting...
          </button>
        </div>
      </>
    );
  }
  const handleResetAndUpdateNewPassword = async (data: UserUpdatePasswordTypes) => {
    try {
      startLoading();
      const response = await instance.patch(`/user/resetAndUpdateNewPassword?token=${token}`, { newPassword: data.password });
      if (response.status === 200) {
        stopLoading();
        reset();
        messages.successMessage("Password updated successfully", undefined, 3000);
        return router.push("/signin");
      }
    } catch (error: unknown) {
      stopLoading();
      const err = error as RESPONSE_ERR;
      if (error instanceof Error) {
        if (err.response.status === 404) {
          console.error(err);
          messages.errorMessage("Invalid User");
          return;
        }
      }
      messages.errorMessage("Something went wrong");
      console.error(error);
      return;
    } finally {
      stopLoading();
    }
  };

  return (
    <form
      onSubmit={(e) => void handleSubmit(handleResetAndUpdateNewPassword)(e)}
      className={cn("flex flex-col gap-6")}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Update your password</h1>
        <p className="text-balance text-sm text-muted-foreground">Enter your new password below to update your password</p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2 relative">
          <div className="flex items-center ">
            <Label htmlFor="password">New Password</Label>
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
            className="absolute right-4 top-7  cursor-pointer h-7 w-7">
            {showPassword ? <FaEye /> : <RiEyeCloseLine />}
          </DivWrapper>
        </div>
        <div className="grid gap-2 relative">
          <div className="flex items-center ">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
          </div>
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("confirmPassword")}
            className="pr-16"
          />
          {errors.confirmPassword && <p className="text-xs select-none text-red-500  text-balance ml-2">{errors.confirmPassword.message}</p>}
          <DivWrapper
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-4 top-7  cursor-pointer h-7 w-7">
            {showConfirmPassword ? <FaEye /> : <RiEyeCloseLine />}
          </DivWrapper>
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className={cn("w-full cursor-pointer")}>
          {isLoading ? <ImSpinner8 className="animate-spin" /> : <span>Create Your Account</span>}
        </Button>
      </div>
    </form>
  );
}
