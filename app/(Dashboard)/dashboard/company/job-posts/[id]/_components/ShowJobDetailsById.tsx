"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import JobDetailsBreadcrumb from "./JobDetailsBreadcrumb";
import {
  Briefcase01Icon,
  Calendar02Icon,
  Calendar03Icon,
  Delete02Icon,
  Location01Icon,
  MoneyBag02Icon,
  Setting07Icon,
  Time04Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/primitives/radix/tabs";
import ShowJobDetails from "./ShowJobDetails";
import JobApplicants from "./JobApplicants";
import JobPostStaticsCard from "./JobPostStaticsCard";
import JobInterviews from "./JobInterviews";
import EditJobPost from "./EditJobPost";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { formatDate } from "@/lib/FormatDate";
import { useMemo } from "react";
import { getJobActiveDuration } from "@/lib/JobActiveDuration";
import DeleteJob from "./DeleteJob";
import ShowJobDetailsSkeleton from "./ShowJobDetailsSkeleton";
import JobStatusBadge from "./JobStatusBadge";

type Props = {
  jobId: string;
  token: string;
};

export type JobDetailsResponse = {
  title: string;
  jobStatus: JobStatusDataType;
  category: string;
  postedDate: string;
  applicantsCount: number;
  jobTypes: string[];
  isActive: boolean;
  minExper: number;
  maxExper: number;
  workApproaches: string[];
  interviewCount: number;
  description: string;
  responsibility: string;
  requiredSkill: string[];
  location: string;
  minSalary: number;
  maxSalary: number;
  applicantDetails: JobDetailsApplicantDetailsType[];
  applicantInterviews: string[];
};

export type JobDetailsApplicantDetailsType = {
  applicantionId: string;
  applicantName: string;
  email: string;
  imageUrl: string;
  appliedDate: string;
  status: ApplicantStatusDetailsType;
};
export type JobStatusDataType = "Pending" | "Approved" | "Rejected";
export type ApplicantStatusDetailsType =
  | "Pending"
  | "Reviewed"
  | "Accepted"
  | "Rejected";

async function getJobPostDetailsApi(params: {
  jobId: string;
  token: string;
}): Promise<JobDetailsResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/JobPosting/job-details/${params.jobId}`,
    {
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    },
  );
  return res.data;
}

export default function ShowJobDetailsById({ jobId, token }: Props) {
  const { data, error, isLoading } = useQuery<
    JobDetailsResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["job-post-details", jobId],
    queryFn: () => getJobPostDetailsApi({ jobId, token }),
  });

  const jobPostStatics = useMemo(() => {
    if (!data) return undefined;
    return [
      {
        label: "Applicants",
        value: data.applicantsCount.toString(),
        bg: "#eff4ff",
        color: "#1a56db",
        icon: UserGroupIcon,
      },
      {
        label: "Interviews",
        value: data.interviewCount.toString(),
        bg: "#e6f7ef",
        color: "#0d7a4e",
        icon: Calendar03Icon,
      },
      {
        label: "Days Active",
        value: getJobActiveDuration(data.postedDate),
        bg: "#fff8e6",
        color: "#b45309",
        icon: Time04Icon,
      },
    ];
  }, [data]);

  if (error) {
    console.log("error", error.response);
    const errorMessage =
      error.response?.data.message ?? error.response?.statusText;
    return (
      <ErrorDashboardMessage
        statusCode={error.response?.status}
        errorMessage={errorMessage ?? "Something Went Wrong"}
      />
    );
  }
  return isLoading ? (
    <ShowJobDetailsSkeleton />
  ) : (
    data && (
      <div className="space-y-3 container mx-auto">
        {/* Breadcrumb */}
        <JobDetailsBreadcrumb jobId={jobId} jobTitle={data.title} />

        {/* Job Details */}
        <div className="space-y-5">
          {/* Header */}
          <div className="flex items-center gap-5 flex-wrap w-full justify-between bg-white md:p-10 p-5 rounded-md border shadow">
            <div className="flex md:items-center flex-col md:flex-row items-start gap-3">
              {/* Job Header */}
              <div>
                <p className="md:text-3xl text-xl font-medium flex items-end gap-3 flex-wrap">
                  {data.title}

                  <span className="flex items-center gap-1">
                    <JobStatusBadge jobStatus={data.jobStatus} />
                    {data.jobStatus == "Approved" &&
                      (data.isActive ? (
                        <span className="text-xs px-2 py-1 bg-green-600 text-white w-fit rounded-md font-medium">
                          Active
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-1 bg-red-600 text-white w-fit rounded-md font-medium">
                          Not-Active
                        </span>
                      ))}
                  </span>
                </p>

                <div className="flex items-center gap-5 md:mt-3 mt-2 flex-wrap">
                  <p className="flex items-center gap-1 text-sm text-black/70">
                    <HugeiconsIcon icon={Calendar02Icon} className="size-4" />
                    Posted - {formatDate(data.postedDate)}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-black/70">
                    <HugeiconsIcon icon={Briefcase01Icon} className="size-4" />
                    {data.category}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-black/70">
                    <HugeiconsIcon icon={Location01Icon} className="size-4" />
                    {data.location}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-black/70">
                    <HugeiconsIcon icon={MoneyBag02Icon} className="size-4" />$
                    {data.minSalary} - ${data.maxSalary}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <AlertModel
                title="Edit Job Post"
                trigger={
                  <Button className="text-xs h-9.5 bg-main-color text-white justify-start hover:bg-main-color/80 hover:text-white gap-1.5">
                    <HugeiconsIcon
                      icon={Setting07Icon}
                      className="size-4.5"
                      strokeWidth={2}
                    />
                    Edit Job Post
                  </Button>
                }
                content={
                  <EditJobPost
                    jobId={jobId}
                    token={token}
                    deafultValues={data}
                  />
                }
                contentClassname="md:min-w-150 pb-0"
              />
              <AlertModel
                title="Delete Job Post"
                trigger={
                  <Button className="text-xs h-9.5 bg-red-600 text-white justify-start hover:bg-red-500 hover:text-white gap-1.5">
                    <HugeiconsIcon
                      icon={Delete02Icon}
                      className="size-4.5"
                      strokeWidth={2}
                    />
                  </Button>
                }
                content={<DeleteJob token={token} jobId={jobId} />}
                contentClassname="md:min-w-150 pb-3"
              />
            </div>
          </div>

          {/* Statics */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-6 flex-wrap justify-between">
            {jobPostStatics &&
              jobPostStatics.map((statistic) => (
                <JobPostStaticsCard key={statistic.label} {...statistic} />
              ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="details">
            <TabsList className="relative sm:w-fit w-full flex flex-wrap gap-4 py-2 items-center text-black bg-white rounded-md shadow border px-2">
              <TabsTrigger
                className="cursor-pointer pb-2 text-black/50 w-fit font-medium text-[0.80rem] rounded-md data-[state=active]:bg-main-color data-[state=active]:text-white px-4 py-1.5"
                value="details">
                Details
              </TabsTrigger>

              <TabsTrigger
                value="applicants"
                className="cursor-pointer pb-2 text-black/50 w-fit font-medium text-[0.80rem] rounded-md data-[state=active]:bg-main-color data-[state=active]:text-white px-4 py-1.5">
                Applicants
              </TabsTrigger>
              <TabsTrigger
                value="interviews"
                className="cursor-pointer pb-2 text-black/50 w-fit font-medium text-[0.80rem] rounded-md data-[state=active]:bg-main-color data-[state=active]:text-white px-4 py-1.5">
                Interviews
              </TabsTrigger>
            </TabsList>
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 mt-8">
              <TabsContents className="bg-white p-6 rounded-md border shadow lg:flex-1 w-full lg:w-fit">
                <TabsContent value="details" className="w-full">
                  <ShowJobDetails
                    description={data.description}
                    requiredSkill={data.requiredSkill}
                    responsibility={data.responsibility}
                  />
                </TabsContent>
                <TabsContent value="applicants" className="w-full">
                  <JobApplicants
                    candidates={data.applicantDetails}
                    token={token}
                    jobId={jobId}
                  />
                </TabsContent>
                <TabsContent value="interviews" className="w-full">
                  <JobInterviews />
                </TabsContent>
              </TabsContents>
            </div>
          </Tabs>
        </div>
      </div>
    )
  );
}
