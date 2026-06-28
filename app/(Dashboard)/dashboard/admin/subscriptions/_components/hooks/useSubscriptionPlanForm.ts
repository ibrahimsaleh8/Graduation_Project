import {
  createSubscriptionPlanSchema,
  CreateSubscriptionPlanSchemaType,
} from "@/validations/CreateSubscriptionPlanSchema";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { SubscriptionPlanDataType } from "../DisplaySubscriptionPage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { sileo } from "sileo";

type Props = {
  operation: "edit" | "create";
  deafultValues?: SubscriptionPlanDataType;
  token: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function UpdateAndCreatePlan(
  token: string,
  id: string,
  data: CreateSubscriptionPlanSchemaType,
  operation: "edit" | "create",
) {
  const planData = {
    name: data.planName,
    shortDescription: data.shortDescription,
    monthlyPrice: data.monthlyPrice,
    yearlyPrice: data.yearlyPrice,
    maxJobPostsPerMonth: data.maxJobPosts,
    featuredJobPostsPerMonth: data.featuredJobPosts,
    hasAiToolsAccess: data.aiToolsAccess ?? false,
    hasCandidateSearch: data.candidateSearch,
    hasPrioritySupport: data.prioritySupport,
    isPublished: true,
  };

  if (operation == "edit") {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/SubscriptionPlan/update/${id}`,
      planData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  }

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/SubscriptionPlan/create`,
    planData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res;
}

export const useSubscriptionPlanForm = ({
  operation,
  token,
  deafultValues,
  setOpen,
}: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<CreateSubscriptionPlanSchemaType>({
    resolver: zodResolver(createSubscriptionPlanSchema),
    defaultValues: {
      planName: deafultValues?.name ?? "",
      shortDescription: deafultValues?.shortDescription ?? "",
      monthlyPrice: deafultValues?.monthlyPrice ?? 0,
      yearlyPrice: deafultValues?.yearlyPrice ?? 0,
      maxJobPosts: deafultValues?.maxJobPostsPerMonth ?? 0,
      featuredJobPosts: deafultValues?.featuredJobPostsPerMonth ?? 0,
      aiToolsAccess: deafultValues?.hasAiToolsAccess ?? false,
      candidateSearch: deafultValues?.hasCandidateSearch ?? false,
      prioritySupport: deafultValues?.hasPrioritySupport ?? false,
    },
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateSubscriptionPlanSchemaType) =>
      UpdateAndCreatePlan(token, deafultValues?.id ?? "", data, operation),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["subscription-plans"],
      });
      if (setOpen) {
        setOpen(false);
      }
      sileo.success({
        title: `Plan ${operation == "edit" ? "updated" : "created"} successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to ${operation == "edit" ? "updated" : "created"} plan`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const onSubmit: SubmitHandler<CreateSubscriptionPlanSchemaType> = (data) => {
    mutate(data);
  };
  return {
    onSubmit,
    isPending,
    getValues,
    errors,
    register,
    handleSubmit,
    setValue,
  };
};
