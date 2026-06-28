"use client";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { sileo } from "sileo";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon } from "@hugeicons/core-free-icons";

async function forgetPassword(email: string) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Auth/forgot-password`,
    {
      email,
    },
  );
  return res.data;
}
export default function ShowForgetPassword() {
  const { mutate, isPending } = useMutation({
    mutationFn: (email: string) => forgetPassword(email),
    onSuccess: () => {
      sileo.success({
        title: "Reset Link Sent",
        description:
          "We've sent a password reset link to your email. Please check your inbox and spam folder.",
      });
    },
    onError: (error: AxiosError<{ code: string; description: string }[]>) => {
      console.log("error ", error.response);
      sileo.error({
        title: "Reset Request Failed",
        description:
          error.response?.data?.[0].description ||
          "An error occurred. Please try again.",
      });
    },
  });

  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (!email) {
      sileo.error({ title: "Email is required" });
      return;
    }

    mutate(email);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="w-full min-h-screen flex flex-col gap-3 items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center w-full">
        <Logo size="small" />
        <p className="text-3xl font-medium">Forgot Your Password?</p>
        <p className="text-low-color text-center text-sm">
          Enter your email address below, and we’ll send you a link to reset
          your password.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full max-w-xl px-3">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>

          <InputGroup>
            <InputGroupInput
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="bg-input-bg overflow-hidden rounded-md"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton aria-label="Email" title="Email" size="sm">
                <HugeiconsIcon icon={Mail01Icon} className="size-4" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <Button className="text-sm" type="submit" disabled={isPending}>
          {isPending ? <Spinner /> : "Change Password"}
        </Button>
      </div>
    </form>
  );
}
