"use client";

import { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Call02Icon,
  Location01Icon,
  Linkedin02Icon,
  GithubIcon,
  Facebook02Icon,
  GlobeIcon,
  Behance02Icon,
  DribbbleIcon,
} from "@hugeicons/core-free-icons";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { Spinner } from "@/components/ui/spinner";

type Props = {
  token: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  behance?: string;
  dribbble?: string;
  portfolio?: string;
};

type ContactFormData = {
  phone: string;
  address: string;
  linkedin: string;
  github: string;
  facebook: string;
  behance: string;
  dribbble: string;
  portfolio: string;
};

async function UpdateProfileContact(token: string, data: ContactFormData) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Settings/contact`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ContactData({
  phone,
  address,
  linkedin,
  github,
  facebook,
  behance,
  dribbble,
  portfolio,
  token,
}: Props) {
  const contactFields = [
    {
      id: "phone",
      label: "Phone",
      placeholder: "+20 10 1234 5678",
      icon: Call02Icon,
      type: "tel",
      defaultValue: phone ?? "",
    },
    {
      id: "address",
      label: "Address",
      placeholder: "Cairo, Street 123",
      icon: Location01Icon,
      type: "text",
      defaultValue: address ?? "",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      placeholder: "https://linkedin.com/in/your-profile",
      icon: Linkedin02Icon,
      type: "url",
      defaultValue: linkedin ?? "",
    },
    {
      id: "github",
      label: "GitHub",
      placeholder: "https://github.com/your-username",
      icon: GithubIcon,
      type: "url",
      defaultValue: github ?? "",
    },
    {
      id: "facebook",
      label: "Facebook",
      placeholder: "https://facebook.com/your-profile",
      icon: Facebook02Icon,
      type: "url",
      defaultValue: facebook ?? "",
    },
    {
      id: "behance",
      label: "Behance",
      placeholder: "https://behance.net/your-profile",
      icon: Behance02Icon,
      type: "url",
      defaultValue: behance ?? "",
    },
    {
      id: "dribbble",
      label: "Dribbble",
      placeholder: "https://dribbble.com/your-profile",
      icon: DribbbleIcon,
      type: "url",
      defaultValue: dribbble ?? "",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      placeholder: "https://yourportfolio.com",
      icon: GlobeIcon,
      type: "url",
      defaultValue: portfolio ?? "",
    },
  ];
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ContactFormData) => UpdateProfileContact(token, data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: "Profile updated successfully!",
      });
    },
    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: "Failed to update profile",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });
  console.log("dribbble", dribbble);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: ContactFormData = {
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      linkedin: formData.get("linkedin") as string,
      github: formData.get("github") as string,
      facebook: formData.get("facebook") as string,
      behance: formData.get("behance") as string,
      dribbble: formData.get("dribbble") as string,
      portfolio: formData.get("portfolio") as string,
    };

    if (
      data.address == address &&
      data.behance == behance &&
      data.dribbble == dribbble &&
      data.facebook == facebook &&
      data.github == github &&
      data.linkedin == linkedin &&
      data.phone == phone &&
      data.portfolio == portfolio
    ) {
      sileo.warning({
        title: "No changes to update!",
        description: "You haven't made any changes to your contact.",
      });
      return;
    }

    mutate(data);

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-4 py-4 md:px-0 md:py-0">
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-black">
            Contact Information
          </h2>

          <p className="mt-1 text-sm text-black/60">
            Update your contact details and social links.
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {contactFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label
                htmlFor={field.id}
                className="text-sm font-medium text-black">
                {field.label}
              </Label>

              <div className="relative">
                <HugeiconsIcon
                  icon={field.icon}
                  className="
                    absolute
                    left-3
                    top-1/2
                    size-5
                    -translate-y-1/2
                    text-black/40
                  "
                />

                <Input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  defaultValue={field.defaultValue}
                  className="
                    h-11
                    rounded-xl
                    border
                    border-border-color
                    bg-white
                    pl-11
                    text-sm
                    shadow-none
                    transition-all
                    duration-200
                    placeholder:text-black/40
                    focus:border-main-color
                    focus:ring-2
                    focus:ring-main-color/10
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="
              h-11
              w-40
              bg-main-color
              px-6
              text-sm
              font-medium
              text-white
              transition-all
              hover:bg-main-color/90
            ">
            {isPending ? <Spinner /> : "Save Changes"}
          </Button>
        </div>
      </div>
    </form>
  );
}
