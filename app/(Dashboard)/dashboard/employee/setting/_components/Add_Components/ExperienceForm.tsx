"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SelectExperienceDate from "../SelectDate";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AddExperienceSchemaType,
  ExperienceFormSchema,
} from "@/validations/ExperienceFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { Spinner } from "@/components/ui/spinner";
import { Dispatch, SetStateAction } from "react";
type Props = {
  opeartion: "add" | "update";
  token: string;
  dealtValues?: AddExperienceSchemaType & { id: string };
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function ExperienceSubmitApi(
  token: string,
  data: AddExperienceSchemaType,
  id: string,
  opeartion: "add" | "update",
) {
  if (opeartion === "add") {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Experience`,
      {
        jobTitle: data.jobTitle,
        companyName: data.companyName,
        location: data.location,
        jobType: data.locationType,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  } else {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Experience/${id}`,
      {
        jobTitle: data.jobTitle,
        companyName: data.companyName,
        location: data.location,
        jobType: data.locationType,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  }
}

export default function ExperienceForm({
  dealtValues,
  opeartion,
  token,
  setOpen,
}: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddExperienceSchemaType>({
    resolver: zodResolver(ExperienceFormSchema),
    mode: "onSubmit",
    defaultValues: {
      jobTitle: dealtValues?.jobTitle ?? "",
      companyName: dealtValues?.companyName ?? "",
      location: dealtValues?.location ?? "",
      locationType: dealtValues?.locationType ?? undefined,
      startDate: dealtValues?.startDate ?? undefined,
      endDate: dealtValues?.endDate ?? undefined,
      description: dealtValues?.description ?? "",
    },
  });
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: AddExperienceSchemaType) =>
      ExperienceSubmitApi(token, data, dealtValues?.id ?? "", opeartion),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: `Experience ${opeartion === "add" ? "added" : "updated"} successfully!`,
      });
      if (setOpen) {
        setOpen(false);
      }
    },
    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to ${opeartion === "add" ? "add" : "update"} experience`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const onSubmit: SubmitHandler<AddExperienceSchemaType> = (data) => {
    mutate(data);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Job Title */}
      <div className="space-y-1">
        <div className="space-y-1.5">
          <Label htmlFor="job-title">Job Title</Label>
          <Input
            id="job-title"
            type="text"
            placeholder="e.g Software Engineer"
            className="border-border-color"
            {...register("jobTitle")}
            aria-invalid={!!errors.jobTitle}
          />
        </div>

        {errors.jobTitle && (
          <ErrorValidationMessage message={errors.jobTitle.message ?? ""} />
        )}
      </div>

      {/* Company Name */}
      <div className="space-y-1">
        <div className="space-y-1.5">
          <Label htmlFor="company-name">Company Name</Label>
          <Input
            id="company-name"
            type="text"
            placeholder="e.g Google"
            className="border-border-color"
            {...register("companyName")}
            aria-invalid={!!errors.companyName}
          />
        </div>
        {errors.companyName && (
          <ErrorValidationMessage message={errors.companyName.message ?? ""} />
        )}
      </div>

      {/* Location */}
      <div className="space-y-1">
        <div className="space-y-1.5">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            type="text"
            placeholder="e.g Egypt,Cairo"
            className="border-border-color"
            {...register("location")}
            aria-invalid={!!errors.location}
          />
        </div>
        {errors.location && (
          <ErrorValidationMessage message={errors.location.message ?? ""} />
        )}
      </div>

      {/* Location Type */}
      <div className="space-y-1">
        <div className="space-y-1.5">
          <Label htmlFor="location-type">Location Type</Label>
          <Select
            defaultValue={dealtValues?.locationType}
            onValueChange={(value: "remote" | "onsite" | "hybride") =>
              setValue("locationType", value)
            }>
            <SelectTrigger
              aria-invalid={!!errors.locationType}
              id="location-type"
              className="w-full bg-input-bg h-11! border-border-color">
              <SelectValue placeholder="Location Type" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectGroup>
                <SelectItem value="onsite">Onsite</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="hybride">Hybride</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {errors.locationType && (
          <ErrorValidationMessage message={errors.locationType.message ?? ""} />
        )}
      </div>

      {/* Start Date */}
      <div className="space-y-1">
        <div className="space-y-1.5">
          <Label htmlFor="start-date">Start Date</Label>
          <SelectExperienceDate
            id="start-date"
            setValue={(date) => {
              if (date) {
                setValue("startDate", date.toISOString());
              }
            }}
            isInvalid={!!errors.startDate}
            dealtValues={
              dealtValues?.startDate
                ? new Date(dealtValues.startDate)
                : undefined
            }
          />
        </div>
        {errors.startDate && (
          <ErrorValidationMessage message={errors.startDate.message ?? ""} />
        )}
      </div>

      {/* End Date */}
      <div className="space-y-1">
        <div className="space-y-1.5">
          <Label htmlFor="end-date">End Date</Label>
          <SelectExperienceDate
            id="end-date"
            setValue={(date) => {
              if (date) {
                setValue("endDate", date.toISOString());
              }
            }}
            isInvalid={!!errors.endDate}
            dealtValues={
              dealtValues?.endDate ? new Date(dealtValues.endDate) : undefined
            }
          />
        </div>
        {errors.endDate && (
          <ErrorValidationMessage message={errors.endDate.message ?? ""} />
        )}
      </div>

      {/* Description */}
      <div className="space-y-1">
        <div className="space-y-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Description"
            className="bg-input-bg h-20 border-border-color"
            {...register("description")}
            aria-invalid={!!errors.description}
          />
        </div>
        {errors.description && (
          <ErrorValidationMessage message={errors.description.message ?? ""} />
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm capitalize">
        {isPending ? (
          <Spinner />
        ) : (
          `${opeartion === "add" ? "Add" : "Update"} Experience`
        )}
      </Button>
    </form>
  );
}
