import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import {
  editInterviewFormData,
  editInterviewSchema,
} from "@/validations/EditInterviewDataSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { InterviewDetailsResponse } from "./InterviewDetailsSheetBody";
import {
  InterviewStatusDataType,
  JobDetailsResponse,
} from "../../job-posts/[id]/_components/ShowJobDetailsById";

type Props = {
  setShowInterviewData: Dispatch<SetStateAction<boolean>>;
  interviewDetails: InterviewDetailsResponse;
  token: string;
  jobId: string;
};

type InterviewDataType = {
  InterviewDate: string;
  startTime: string;
  endTime: string;
  MeetingLink: string;
  interviewerName: string;
  interviewType: string;
  notes: string | null;
  status: string;
};

const interviewformatDate = (date: Date | string) => {
  const d = new Date(date);

  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
};

async function updateInterviewDataAPI(
  token: string,
  interviewBody: InterviewDataType,
  interviewId: string,
) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/CompanyInterviews/${interviewId}`,
    interviewBody,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export const useEditInterview = ({
  interviewDetails,
  jobId,
  setShowInterviewData,
  token,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<editInterviewFormData>({
    resolver: zodResolver(editInterviewSchema),
    defaultValues: {
      date: interviewDetails.interviewDate,
      startTime: interviewDetails.startTime,
      endTime: interviewDetails.endTime,
      interviewerName: interviewDetails.interviewerName,
      interviewType: interviewDetails.interviewType,
      interviewLink: interviewDetails.interviewLink,
      status: interviewDetails.interviewStatus,
      notes: interviewDetails.notes,
    },
  });
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (interviewBody: InterviewDataType) =>
      updateInterviewDataAPI(
        token,
        interviewBody,
        interviewDetails.interviewId,
      ),

    onSuccess: () => {
      const newData: InterviewDetailsResponse = {
        applicantName: interviewDetails.applicantName,
        email: interviewDetails.email,
        imageUrl: interviewDetails.imageUrl,
        positionTitle: interviewDetails.positionTitle,
        resumePath: interviewDetails.resumePath,
        interviewId: interviewDetails.interviewId,
        endTime: getValues("endTime"),
        interviewDate: interviewformatDate(getValues("date")),
        interviewerName: getValues("interviewerName"),
        interviewLink: getValues("interviewLink"),
        interviewStatus: getValues("status") as InterviewStatusDataType,
        interviewType: getValues("interviewType"),
        notes: getValues("notes"),
        startTime: getValues("startTime"),
      };

      queryClient.setQueryData(
        ["interview-details", interviewDetails.interviewId],
        (oldData: InterviewDetailsResponse | undefined) => {
          if (!oldData) return oldData;
          return newData;
        },
      );
      queryClient.setQueryData(
        ["job-post-details", jobId],
        (oldData: JobDetailsResponse | undefined) => {
          if (!oldData) return oldData;

          const applicantInterviews = oldData.applicantInterviews.map(
            (inter) =>
              inter.interviewId === interviewDetails.interviewId
                ? {
                    ...inter,
                    applicantName: interviewDetails.applicantName,
                    email: interviewDetails.email,
                    imageUrl: interviewDetails.imageUrl,
                    interviewDate: interviewformatDate(getValues("date")),
                    startTime: getValues("startTime"),
                    endTime: getValues("endTime"),
                    interviewStatus: getValues(
                      "status",
                    ) as InterviewStatusDataType,
                  }
                : inter,
          );

          return {
            ...oldData,
            applicantInterviews,
          };
        },
      );

      sileo.success({
        title: "Interview details updated successfully",
      });
      setShowInterviewData(true);
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

  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedDate = watch("date");

  const onSubmit = (data: editInterviewFormData) => {
    const SchedualdDay = new Date(data.date).toDateString();
    const InterviewData: InterviewDataType = {
      InterviewDate: SchedualdDay,
      notes: data.notes ?? null,
      endTime: data.endTime,
      interviewerName: data.interviewerName,
      interviewType: data.interviewType,
      MeetingLink: data.interviewLink,
      startTime: data.startTime,
      status: data.status,
    };
    mutate(InterviewData);
  };
  return {
    onSubmit,
    selectedDate,
    isPending,
    setValue,
    register,
    handleSubmit,
    errors,
    getValues,
  };
};
