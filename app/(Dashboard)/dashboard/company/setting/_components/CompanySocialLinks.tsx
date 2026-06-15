"use client";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import {
  CompanyContactFormData,
  CompanySocialsSettingsSchema,
} from "@/validations/CompanySocilasSetting";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { sileo } from "sileo";
import {
  CompanySettingsProfileSocilas,
  CompanySettingsResponseDataType,
} from "./ShowCompanySettings";
import { CompanyProfileDetailsResponseDataType } from "../../profile/_components/ShowCompanyProfile";
type Props = { token: string; socialsData: CompanySettingsProfileSocilas };
type comapnySocailsResponseDataType = {
  phoneNumber: string | null;
  headquarterAddress: string | null;
  linkedin: string | null;
  instagram: string | null;
  facebook: string | null;
  twitter: string | null;
  websiteURL: string | null;
};

async function UpdateCompanySocialsApi(
  token: string,
  data: comapnySocailsResponseDataType,
) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/CompanySettings/socials`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function CompanySocialLinks({ token, socialsData }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<CompanyContactFormData>({
    resolver: zodResolver(CompanySocialsSettingsSchema),
    mode: "onSubmit",
    defaultValues: {
      address: socialsData.headquarterAddress,
      facebook: socialsData.facebook,
      instagram: socialsData.instagram,
      linkedin: socialsData.linkedin,
      phone: socialsData.phoneNumber,
      twitter: socialsData.twitter,
      websiteUrl: socialsData.websiteURL,
    },
  });

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: comapnySocailsResponseDataType) =>
      UpdateCompanySocialsApi(token, data),

    onSuccess: () => {
      queryClient.setQueryData(
        ["company-profile-settings"],
        (oldData?: CompanySettingsResponseDataType) => {
          if (!oldData) return;

          const updatedData = {
            headquarterAddress: getValues("address"),
            facebook: getValues("facebook"),
            instagram: getValues("instagram"),
            linkedin: getValues("linkedin"),
            phoneNumber: getValues("phone"),
            twitter: getValues("twitter"),
            websiteURL: getValues("websiteUrl"),
          };
          return {
            ...oldData,
            socials: {
              ...updatedData,
            },
          };
        },
      );

      queryClient.setQueryData(
        ["company-profile"],
        (oldData?: CompanyProfileDetailsResponseDataType) => {
          if (!oldData) return;
          const socialsData = {
            facebook: getValues("facebook"),
            instagram: getValues("instagram"),
            linkedin: getValues("linkedin"),
            twitter: getValues("twitter"),
          };
          return {
            ...oldData,
            socialLinks: socialsData,
            websiteUrl: getValues("websiteUrl"),
            address: getValues("address"),
            phone: getValues("phone"),
          };
        },
      );

      sileo.success({
        title: "Socials Data updated successfully",
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: "Failed to create job post",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const onSubmit: SubmitHandler<CompanyContactFormData> = (data) => {
    if (
      data.address == socialsData.headquarterAddress &&
      data.facebook == socialsData.facebook &&
      data.instagram == socialsData.instagram &&
      data.linkedin == socialsData.linkedin &&
      data.phone == socialsData.phoneNumber &&
      data.twitter == socialsData.twitter &&
      data.websiteUrl == socialsData.websiteURL
    ) {
      sileo.warning({
        title: "No Changes Detected",
        description:
          "Make at least one change before saving your contact information.",
      });
      return;
    }

    mutate({
      facebook: data.facebook ?? null,
      headquarterAddress: data.address ?? null,
      instagram: data.instagram ?? null,
      linkedin: data.linkedin ?? null,
      phoneNumber: data.phone ?? null,
      twitter: data.twitter ?? null,
      websiteURL: data.websiteUrl ?? null,
    });
  };

  return (
    <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
      {/* Contact */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-1 w-full">
            <Label htmlFor="phone">Phone</Label>
            <Input
              {...register("phone", {
                setValueAs: (value) => (value === "" ? null : value),
              })}
              aria-invalid={errors.phone ? "true" : "false"}
              type="text"
              id="phone"
              placeholder="Phone"
              className="bg-white border border-border-color"
            />
            {errors.phone && (
              <ErrorValidationMessage message={errors.phone.message ?? ""} />
            )}
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="address">Address</Label>
            <Input
              {...register("address", {
                setValueAs: (value) => (value === "" ? null : value),
              })}
              aria-invalid={errors.address ? "true" : "false"}
              type="text"
              id="address"
              placeholder="Cairo, street name"
              className="bg-white border border-border-color"
            />
            {errors.address && (
              <ErrorValidationMessage message={errors.address.message ?? ""} />
            )}
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="linkedin">Linkedin</Label>
            <Input
              {...register("linkedin", {
                setValueAs: (value) => (value === "" ? null : value),
              })}
              aria-invalid={errors.linkedin ? "true" : "false"}
              type="text"
              id="linkedin"
              placeholder="https://www.linkedin.com/in/...."
              className="bg-white border border-border-color"
            />
            {errors.linkedin && (
              <ErrorValidationMessage message={errors.linkedin.message ?? ""} />
            )}
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              {...register("instagram", {
                setValueAs: (value) => (value === "" ? null : value),
              })}
              aria-invalid={errors.instagram ? "true" : "false"}
              type="text"
              id="instagram"
              placeholder="https://instagram.com/...."
              className="bg-white border border-border-color"
            />

            {errors.instagram && (
              <ErrorValidationMessage
                message={errors.instagram.message ?? ""}
              />
            )}
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              {...register("facebook", {
                setValueAs: (value) => (value === "" ? null : value),
              })}
              aria-invalid={errors.facebook ? "true" : "false"}
              type="text"
              id="facebook"
              placeholder="https://www.facebook.com/..."
              className="bg-white border border-border-color"
            />
            {errors.facebook && (
              <ErrorValidationMessage message={errors.facebook.message ?? ""} />
            )}
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="twitter">Twitter (x)</Label>
            <Input
              {...register("twitter", {
                setValueAs: (value) => (value === "" ? null : value),
              })}
              aria-invalid={errors.twitter ? "true" : "false"}
              type="text"
              id="twitter"
              placeholder="https://x.com/..."
              className="bg-white border border-border-color"
            />

            {errors.twitter && (
              <ErrorValidationMessage message={errors.twitter.message ?? ""} />
            )}
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="website-url">Website URL</Label>
            <Input
              {...register("websiteUrl", {
                setValueAs: (value) => (value === "" ? null : value),
              })}
              aria-invalid={errors.websiteUrl ? "true" : "false"}
              type="text"
              id="website-url"
              placeholder="https://www.company-website.com"
              className="bg-white border border-border-color"
            />

            {errors.websiteUrl && (
              <ErrorValidationMessage
                message={errors.websiteUrl.message ?? ""}
              />
            )}
          </div>
        </div>
        <Button
          disabled={isPending}
          type="submit"
          className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
          {isPending ? <Spinner /> : "Save"}
        </Button>
      </form>
    </div>
  );
}
