import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editJobPostDataType,
  editJobPostSchema,
} from "@/validations/EditJobPostSchema";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { JobDetailsResponse } from "../ShowJobDetailsById";
import { Dispatch, SetStateAction, useState } from "react";

type EditJobPostBodyType = {
  jobBasicData: {
    employmentType: string[];
    jobCategory: string;
    minExperience: number;
    maxExperience: number;
    jobTitle: string;
    location: string;
    salaryMax: number;
    salaryMin: number;
    workApproach: string[];
  };
  jobDetails: {
    jobDescription: string;
    responsibilities: string;
    skills: string[];
  };
  isActive: boolean;
};

async function UpdateJobPost(
  data: EditJobPostBodyType,
  token: string,
  jobId: string,
) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/JobPosting/${jobId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res.data;
}
type Props = {
  deafultValues: JobDetailsResponse;
  token: string;
  jobId: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export const useEditJobPost = ({
  deafultValues,
  jobId,
  token,
  setOpen,
}: Props) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: EditJobPostBodyType) =>
      UpdateJobPost(data, token, jobId),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["job-post-details", jobId] });
      queryClient.refetchQueries({ queryKey: ["company-job-posts"] });
      if (setOpen) {
        setOpen(false);
      }
      sileo.success({
        title: "Job Posted updated successfully!",
      });
    },
    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: "Failed to update job post",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const [skillInput, setSkillInput] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    getValues,
  } = useForm<editJobPostDataType>({
    resolver: zodResolver(editJobPostSchema),
    defaultValues: {
      jobTitle: deafultValues.title,
      jobCategory: deafultValues.category,
      location: deafultValues.location,
      employmentType: deafultValues.jobTypes,
      workApproach: deafultValues.workApproaches,
      salaryMin: deafultValues.minSalary,
      salaryMax: deafultValues.maxSalary,
      jobDescription: deafultValues.description,
      responsibilities: deafultValues.responsibility,
      skills: deafultValues.requiredSkill,
      isActive: deafultValues.isActive,
      maxYearsExperience: deafultValues.maxExper,
      minYearsExperience: deafultValues.minExper,
    },
    mode: "onChange",
  });
  const skills = getValues("skills");
  const employment = getValues("employmentType");
  const work = getValues("workApproach");

  const toggleItem = (
    value: string,
    field: "employmentType" | "workApproach",
    current: string[],
  ) => {
    const updated = current.includes(value)
      ? current.filter((i) => i !== value)
      : [...current, value];

    setValue(field, updated, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const addSkill = () => {
    const value = skillInput.trim();
    if (!value || skills.includes(value)) return;

    setValue("skills", [...skills, value], {
      shouldValidate: true,
      shouldDirty: true,
    });

    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    setValue(
      "skills",
      skills.filter((s) => s !== skill),
      { shouldValidate: true, shouldDirty: true },
    );
  };

  const onSubmit = (data: editJobPostDataType) => {
    mutate({
      isActive: data.isActive,
      jobBasicData: {
        employmentType: data.employmentType,
        jobCategory: data.jobCategory,
        jobTitle: data.jobTitle,
        location: data.location,
        salaryMax: data.salaryMax,
        salaryMin: data.salaryMin,
        workApproach: data.workApproach,
        maxExperience: data.maxYearsExperience,
        minExperience: data.minYearsExperience,
      },
      jobDetails: {
        jobDescription: data.jobDescription,
        responsibilities: data.responsibilities,
        skills: data.skills,
      },
    });
    console.log("Updated Job:", data);
  };

  return {
    onSubmit,
    removeSkill,
    addSkill,
    toggleItem,
    employment,
    work,
    errors,
    register,
    handleSubmit,
    watch,
    isPending,
    setValue,
    getValues,
    skillInput,
    setSkillInput,
    skills,
  };
};
