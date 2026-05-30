"use client";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import {
  UpdatePasswordFormData,
  updatePasswordSchema,
} from "@/validations/updatePasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockPasswordIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { sileo } from "sileo";

type Props = {
  token: string;
};
// update-password
async function UpdateEmployeePasswordApi(
  token: string,
  currentPassword: string,
  newPassword: string,
) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Settings/update-password`,
    {
      newPassword,
      currentPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function UpdatePasswordForm({ token }: Props) {
  const [showCurrentPassw, setShowCurrentPassw] = useState(false);
  const [showNewPassw, setShowNewPassw] = useState(false);
  const [showRepeatNewPassw, setShowRepeatNewPassw] = useState(false);

  const { isPending, mutate } = useMutation({
    mutationFn: (data: { currentPassword: string; newPassword: string }) =>
      UpdateEmployeePasswordApi(token, data.currentPassword, data.newPassword),

    onSuccess: () => {
      sileo.success({
        title: "Password updated successfully!",
      });
    },
    onError: (
      error: AxiosError<
        | { errors: string[]; status: number }
        | { code: string; description: string }[]
      >,
    ) => {
      const data = error.response?.data;

      let errorMessage = "An error occurred. Please try again.";

      if (Array.isArray(data)) {
        errorMessage = data[0]?.description ?? errorMessage;
      } else if (data?.errors?.length) {
        errorMessage = data.errors[0];
      }

      console.log("error", error.response);

      sileo.error({
        title: "Failed to update profile",
        description: errorMessage,
      });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordFormData>({
    resolver: zodResolver(updatePasswordSchema),
  });
  const onSubmit: SubmitHandler<UpdatePasswordFormData> = (data) => {
    mutate({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
  };

  return (
    <form
      className="space-y-5 w-full border rounded-2xl border-black/10 overflow-hidden bg-white"
      onSubmit={handleSubmit(onSubmit)}>
      <p className="text-lg font-medium flex items-center gap-2 bg-main-color text-white p-5">
        <HugeiconsIcon icon={LockPasswordIcon} className="size-6" />
        Password Managment
      </p>

      {/* Form */}
      <div className="space-y-5 p-5">
        {/* Current Password */}
        <div className="space-y-1">
          <div className="space-y-1.5">
            <Label htmlFor="current-pass">Current Password</Label>
            <div
              className={`flex items-center gap-2 border ${errors.currentPassword ? "border-red-500" : "border-border-color"} bg-white pr-4 rounded-md h-11`}>
              <Input
                {...register("currentPassword")}
                id="current-pass"
                className="bg-transparent border-0 focus-visible:ring-0 shadow-none"
                type={showCurrentPassw ? "text" : "password"}
                placeholder="***********"
              />
              <button
                className="cursor-pointer"
                type="button"
                onClick={() => setShowCurrentPassw((pre) => !pre)}>
                {showCurrentPassw ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>
          </div>

          {errors.currentPassword && (
            <ErrorValidationMessage
              message={errors.currentPassword.message ?? ""}
            />
          )}
        </div>

        {/* New Password */}
        <div className="space-y-1">
          <div className="space-y-1.5">
            <Label htmlFor="new-pass">New Password</Label>
            <div
              className={`flex items-center gap-2 border ${errors.newPassword ? "border-red-500" : "border-border-color"} bg-white pr-4 rounded-md h-11`}>
              <Input
                {...register("newPassword")}
                id="new-pass"
                className="bg-transparent border-0 focus-visible:ring-0 shadow-none"
                type={showNewPassw ? "text" : "password"}
                placeholder="***********"
                aria-invalid={!!errors.newPassword}
              />
              <button
                className="cursor-pointer"
                type="button"
                onClick={() => setShowNewPassw((pre) => !pre)}>
                {showNewPassw ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>
          </div>

          {errors.newPassword && (
            <ErrorValidationMessage
              message={errors.newPassword.message ?? ""}
            />
          )}
        </div>

        {/* Repeat New Password */}
        <div className="space-y-1">
          <div className="space-y-1.5">
            <Label htmlFor="repeat-new-pass">Repeat New Password</Label>
            <div
              className={`flex items-center gap-2 border ${errors.repeatNewPassword ? "border-red-500" : "border-border-color"} bg-white pr-4 rounded-md h-11`}>
              <Input
                {...register("repeatNewPassword")}
                id="repeat-new-pass"
                className="bg-transparent border-0 focus-visible:ring-0 shadow-none"
                type={showRepeatNewPassw ? "text" : "password"}
                placeholder="***********"
                aria-invalid={!!errors.repeatNewPassword}
              />
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setShowRepeatNewPassw((pre) => !pre)}>
                {showRepeatNewPassw ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>
          </div>

          {errors.repeatNewPassword && (
            <ErrorValidationMessage
              message={errors.repeatNewPassword.message ?? ""}
            />
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
          {isPending ? <Spinner /> : "Update Password"}
        </Button>
      </div>
    </form>
  );
}
