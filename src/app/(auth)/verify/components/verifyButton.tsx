"use client";

import { instance } from "@/axios";
import { useLoading } from "@/hooks/useLoading";
import { useMessage } from "@/hooks/useMessage";
import type { RESPONSE_ERR } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { ImSpinner8 } from "react-icons/im";

export default function VerifyButton() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const messages = useMessage();

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
  const handleVerifyUser = async () => {
    try {
      startLoading();
      const response = await instance.patch(`/user/verifyUser?token=${token}`);
      if (response.status === 200) {
        stopLoading();
        messages.successMessage("User verified successfully", undefined, 3000);

        return router.push("/signin");
      }
    } catch (error: unknown) {
      stopLoading();
      const err = error as RESPONSE_ERR;
      if (error instanceof Error) {
        if (err.response.status === 409) {
          console.error(err);
          messages.errorMessage("User is already verified");
          return router.push("/signin");
        }

        if (err.response.status === 401) {
          console.error(err);
          messages.errorMessage("Your Verification token is expired");
          return router.push("/sendMeVerificationToken");
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
    <div>
      <button
        onClick={() => void handleVerifyUser()}
        className="bg-primary text-background w-[250px] h-[70px] flex items-center justify-center  rounded-md cursor-pointer hover:scale-[1.2] duration-300 active:scale-[0.8] shadow-md shadow-black/40 transition-all">
        {isLoading ? (
          <ImSpinner8
            className="animate-spin"
            size={30}
          />
        ) : (
          <span className="font-semibold">Click Here To Verify</span>
        )}
      </button>
    </div>
  );
}
