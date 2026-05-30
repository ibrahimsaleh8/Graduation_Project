"use client";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { MailEdit01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRef, useState } from "react";
import { sileo } from "sileo";
type Props = {
  token: string;
};
// update-email
async function UpdateEmployeeEmailApi(token: string, newEmail: string) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Settings/update-email`,
    {
      newEmail,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function UpdateUserEmail({ token }: Props) {
  const emailInput = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isPending, mutate } = useMutation({
    mutationFn: (newEmail: string) => UpdateEmployeeEmailApi(token, newEmail),

    onSuccess: () => {
      sileo.success({
        title: "Please Confirm the operation",
        description:
          "Confirmation message has been sent to current email click on the link to confirm changeing email",
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
  const HandleUpdateEmail = () => {
    if (!emailInput.current) return;
    const emailValue = emailInput.current.value;
    if (emailValue.trim().length < 5) {
      setErrorMessage("Invalid Email");
      return;
    }

    mutate(emailValue);
  };
  return (
    <form
      className="space-y-5 w-full border rounded-2xl border-black/10 overflow-hidden bg-white"
      onSubmit={(e) => {
        e.preventDefault();
        HandleUpdateEmail();
      }}>
      <p className="text-lg font-medium flex items-center gap-2 bg-main-color text-white p-5">
        <HugeiconsIcon icon={MailEdit01Icon} className="size-6 text-white" />
        Email Managment
      </p>

      <div className="space-y-5 p-5">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            ref={emailInput}
            id="email"
            className={`${errorMessage ? "border-red-500" : "border-border-color"} bg-white`}
            type="email"
            required
            placeholder="mail@mail.com"
          />
        </div>

        {errorMessage && <ErrorValidationMessage message={errorMessage} />}
        <Button
          disabled={isPending}
          type="submit"
          className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
          {isPending ? <Spinner /> : "Update Email"}
        </Button>
      </div>
    </form>
  );
}
