"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { useSearchParams } from "next/navigation";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const resetPasswordSchema = z
  .object({
    newPassword: z
      .string({ message: "Password is required" })
      .min(8, { message: "Min chars for password is 8" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
        message:
          "Password must include uppercase, lowercase, number and special character",
      }),
    repeatPassword: z.string({ message: "Please confirm your password" }),
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

async function resetPassword(data: {
  email: string;
  token: string;
  newPassword: string;
}) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Auth/reset-password`,
    data,
  );
  return res.data;
}

export default function ResetPassword() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [showNew, setShowNew] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      sileo.success({
        title: "Password Reset Successfully",
        description: "Your password has been updated successfully.",
      });
    },
    onError: (
      error: AxiosError<
        {
          code: string;
          description: string;
        }[]
      >,
    ) => {
      sileo.error({
        title: "Reset Failed",
        description:
          error.response?.data[0].description ||
          "Something went wrong. Please try again.",
      });
    },
  });

  const onSubmit = (data: ResetPasswordForm) => {
    if (!email || !token) {
      sileo.error({ title: "Invalid reset link" });
      return;
    }
    mutate({ email, token, newPassword: data.newPassword });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-screen flex flex-col gap-3 items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center w-full">
        <Logo size="small" />
        <p className="text-3xl font-medium">Reset Password</p>
        <p className="text-low-color text-center text-sm">
          Enter your new password below.
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-xl px-3">
        <div className="space-y-1">
          <Label htmlFor="newPassword">New Password</Label>
          <InputGroup className="bg-input-bg">
            <InputGroupInput
              id="newPassword"
              aria-invalid={errors.newPassword ? "true" : "false"}
              type={showNew ? "text" : "password"}
              placeholder="New Password"
              className="rounded-md"
              {...register("newPassword")}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="button"
                size="icon-sm"
                aria-label={showNew ? "Hide password" : "Show password"}
                onClick={() => setShowNew((prev) => !prev)}>
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {errors.newPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="repeatPassword">Repeat Password</Label>
          <InputGroup className="bg-input-bg">
            <InputGroupInput
              id="repeatPassword"
              type={showRepeat ? "text" : "password"}
              aria-invalid={errors.repeatPassword ? "true" : "false"}
              placeholder="Repeat Password"
              className="rounded-md"
              {...register("repeatPassword")}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="button"
                size="icon-sm"
                aria-label={showRepeat ? "Hide password" : "Show password"}
                onClick={() => setShowRepeat((prev) => !prev)}>
                {showRepeat ? <EyeOff size={16} /> : <Eye size={16} />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {errors.repeatPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.repeatPassword.message}
            </p>
          )}
        </div>

        <Button className="text-sm" type="submit" disabled={isPending}>
          {isPending ? <Spinner /> : "Reset Password"}
        </Button>
      </div>
    </form>
  );
}
