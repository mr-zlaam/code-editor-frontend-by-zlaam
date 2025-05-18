"use client";

import { instance } from "@/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoading } from "@/hooks/useLoading";
import { useMessage } from "@/hooks/useMessage";
import { cn } from "@/lib/utils";
import type { RESPONSE_ERR } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImSpinner8 } from "react-icons/im";

export default function ForgotPassword() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const router = useRouter();
  const messages = useMessage();
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const lowercaseEmailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const handleForgotPassword = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!lowercaseEmailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }
    try {
      startLoading();
      const response = await instance.patch(`/user/forgetUserPasswordRequest`, { email: email });
      if (response.status === 200) {
        stopLoading();
        messages.successMessage("Please check your email to reset your password", "top-center", 100000);

        return router.push("/signin");
      }
    } catch (error: unknown) {
      stopLoading();
      const err = error as RESPONSE_ERR;
      if (error instanceof Error) {
        if (err.response.status === 404) {
          console.error(err);
          messages.errorMessage("Invalid user");
          return router.push("/forgotPassword");
        }

        if (err.response.status >= 499) {
          console.error(err);
          messages.errorMessage("We are unable to process your request");
          return router.push("/forgotPassword");
        }
      }
      messages.errorMessage("Something went wrong");
      console.error(error);
      return router.push("/signin");
    } finally {
      stopLoading();
    }
  };
  return (
    <form className={cn("flex flex-col gap-6")}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Enter email to reset your password </h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => {
              setError("");
              return setEmail(e.target.value);
            }}
          />
          <p className="text-xs text-red-500">{error}</p>
        </div>
        <Button
          disabled={isLoading}
          onClick={() => void handleForgotPassword()}
          type="button"
          className="w-full cursor-pointer">
          {isLoading ? <ImSpinner8 className="animate-spin" /> : <span>Forgot Password</span>}
        </Button>
      </div>
    </form>
  );
}
