"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProjectSettingsResponse } from "./ShowAdminSettings";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ProjectSocialsDataType,
  ProjectSocialsSchema,
} from "@/validations/ProjectSocialsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { Spinner } from "@/components/ui/spinner";
type Props = {
  socialsData: ProjectSettingsResponse;
  token: string;
};

async function UpdateSocilaLinksApi(
  token: string,
  data: ProjectSettingsResponse,
) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/website-settings`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ManageProjectSocialLinks({
  socialsData,
  token,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ProjectSocialsDataType>({
    resolver: zodResolver(ProjectSocialsSchema),
    mode: "onSubmit",
    defaultValues: {
      facebookUrl: socialsData.facebookUrl,
      instagramUrl: socialsData.instagramUrl,
      linkedInUrl: socialsData.linkedInUrl,
      twitterUrl: socialsData.twitterUrl,
      youtubeUrl: socialsData.youtubeUrl,
    },
  });

  const queryClinet = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ProjectSettingsResponse) =>
      UpdateSocilaLinksApi(token, data),

    onSuccess: () => {
      queryClinet.setQueryData(
        ["project-socials"],
        (oldData: ProjectSettingsResponse | undefined) => {
          if (!oldData) return;

          const newData: ProjectSettingsResponse = {
            facebookUrl: getValues("facebookUrl"),
            instagramUrl: getValues("instagramUrl"),
            linkedInUrl: getValues("linkedInUrl"),
            twitterUrl: getValues("twitterUrl"),
            youtubeUrl: getValues("youtubeUrl"),
          };

          return { ...newData };
        },
      );

      sileo.success({
        title: `Socials updated successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to update socials`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const onSubmit: SubmitHandler<ProjectSocialsDataType> = (data) => {
    if (
      socialsData.facebookUrl == data.facebookUrl &&
      socialsData.instagramUrl == data.instagramUrl &&
      socialsData.linkedInUrl == data.linkedInUrl &&
      socialsData.twitterUrl == data.twitterUrl &&
      socialsData.youtubeUrl == data.youtubeUrl
    ) {
      sileo.warning({
        title: "No Changes Detected",
        description: "Make at least one change before saving new data.",
      });
      return;
    }

    mutate(data);
    console.log(data);
  };

  return (
    <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
      {/* Contact */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-1 w-full">
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              {...register("facebookUrl")}
              type="text"
              aria-invalid={errors.facebookUrl ? "true" : "false"}
              id="facebook"
              placeholder="https://www.facebook.com/......"
              className="bg-white border border-border-color"
            />

            {errors.facebookUrl && (
              <ErrorValidationMessage
                message={errors.facebookUrl.message ?? ""}
              />
            )}
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="linkedin">Linkedin</Label>
            <Input
              type="text"
              {...register("linkedInUrl")}
              aria-invalid={errors.linkedInUrl ? "true" : "false"}
              id="linkedin"
              placeholder="https://www.linkedin.com/in/...."
              className="bg-white border border-border-color"
            />
            {errors.linkedInUrl && (
              <ErrorValidationMessage
                message={errors.linkedInUrl.message ?? ""}
              />
            )}
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              type="text"
              aria-invalid={errors.instagramUrl ? "true" : "false"}
              {...register("instagramUrl")}
              id="instagram"
              placeholder="https://instagram.com/...."
              className="bg-white border border-border-color"
            />

            {errors.instagramUrl && (
              <ErrorValidationMessage
                message={errors.instagramUrl.message ?? ""}
              />
            )}
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="youtube">Youtube</Label>
            <Input
              {...register("youtubeUrl")}
              aria-invalid={errors.youtubeUrl ? "true" : "false"}
              type="text"
              id="youtube"
              placeholder="https://www.youtube.com/@......"
              className="bg-white border border-border-color"
            />
            {errors.youtubeUrl && (
              <ErrorValidationMessage
                message={errors.youtubeUrl.message ?? ""}
              />
            )}
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="twitter">Twitter (x)</Label>
            <Input
              {...register("twitterUrl")}
              aria-invalid={errors.twitterUrl ? "true" : "false"}
              type="text"
              id="twitter"
              placeholder="https://x.com/..."
              className="bg-white border border-border-color"
            />
            {errors.twitterUrl && (
              <ErrorValidationMessage
                message={errors.twitterUrl.message ?? ""}
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
