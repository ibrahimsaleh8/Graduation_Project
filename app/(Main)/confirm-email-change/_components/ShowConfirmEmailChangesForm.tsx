"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home03Icon,
  Mail01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { sileo } from "sileo";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

async function ChangeEmail(token: string, userId: string, newEmail: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Settings/confirm-email-change?userId=${userId}&newEmail=${newEmail}&token=${token}`,
  );
  return res.data;
}

export default function ShowConfirmEmailChangesForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  const userId = searchParams.get("userId");
  const newEmail = searchParams.get("newEmail");
  const status = searchParams.get("status");

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { token: string; userId: string; newEmail: string }) =>
      ChangeEmail(data.token, data.userId, data.newEmail),

    onSuccess: () => {
      sileo.success({
        title: "Email changed successfully!",
      });
      router.refresh();
      router.push("/");
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

  const handleSubmit = async () => {
    if (!token || !userId || !newEmail) {
      sileo.error({
        title: "Error",
        description:
          "Missing required parameters. Please use the link sent to your email.",
      });
      return;
    }

    mutate({ token, newEmail, userId });
  };

  if (status === "error") {
    return (
      <div className="w-full min-h-screen flex pt-20">
        {/* Right panel */}
        <div className="flex-1 rounded-md p-5 md:pt-36 py-20 flex flex-col gap-8 relative items-center justify-center">
          {/* Home button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-main-color text-white hover:bg-transparent hover:text-main-color border-2 hover:border-main-color duration-300 size-13 flex items-center justify-center rounded-full absolute right-7 top-7">
            <Link
              className="w-full h-full flex items-center justify-center"
              href="/">
              <HugeiconsIcon icon={Home03Icon} className="size-6" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col gap-6 items-center justify-center w-full md:w-3/4 max-w-md">
            <Logo size="small" />

            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <HugeiconsIcon
                icon={Cancel01Icon}
                className="size-8 text-red-500"
              />
            </div>

            <div className="text-center space-y-2">
              <p className="text-3xl font-medium">Invalid or Expired Link</p>
              <p className="text-low-color text-center text-sm">
                The link you tried to use is invalid or has expired. If you
                requested this change recently, please try again.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button
                variant="outline"
                onClick={() => router.push("/login")}
                className="flex-1 font-medium">
                Back to Login
              </Button>
              <Button
                onClick={() => router.push("/company/setting/general")}
                className="flex-1 font-medium">
                Go to Settings
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex pt-20">
      <div className="p-5 md:pt-36 py-20 flex flex-col gap-8 relative w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-5 items-center justify-center w-full">
          <Logo size="small" />
          <p className="text-3xl font-medium">Confirm Email Change</p>
          <p className="text-low-color text-center text-sm">
            Review your new email address below and confirm to activate the
            change.
          </p>
        </div>

        {/* Form body */}
        <div className="md:w-3/4 w-full mx-auto flex flex-col gap-5">
          {/* New Email field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="new-email" className="font-medium">
              New Email Address
            </Label>
            <InputGroup>
              <InputGroupInput
                id="new-email"
                type="email"
                readOnly
                value={newEmail ?? ""}
                placeholder="No email provided"
                className="cursor-default bg-input-bg overflow-hidden rounded-md"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton aria-label="Email" title="Email" size="sm">
                  <HugeiconsIcon icon={Mail01Icon} className="size-4" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Confirm button */}
          <Button
            onClick={handleSubmit}
            disabled={isPending || !token || !userId || !newEmail}
            className="font-medium w-full">
            {isPending ? <Spinner /> : "Confirm Email Change"}
          </Button>
        </div>
      </div>
    </div>
  );
}
