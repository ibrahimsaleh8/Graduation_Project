/* eslint-disable @next/next/no-img-element */
"use client";

import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import JobDetailsBreadcrumb from "@/app/(Dashboard)/dashboard/company/job-posts/[id]/_components/JobDetailsBreadcrumb";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/motion/tabs";
import JobStatusBadge from "@/app/(Dashboard)/dashboard/company/job-posts/[id]/_components/JobStatusBadge";
import {
  ApplicantStatusDetailsType,
  JobStatusDataType,
} from "@/app/(Dashboard)/dashboard/company/job-posts/[id]/_components/ShowJobDetailsById";
import ShowJobDetails from "@/app/(Dashboard)/dashboard/company/job-posts/[id]/_components/ShowJobDetails";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Briefcase01Icon,
  Calendar02Icon,
  Location01Icon,
  MoneyBag02Icon,
  Building03Icon,
  CheckmarkCircle01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { formatDate } from "@/lib/FormatDate";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlertModel from "@/components/main-layout/AlertModel";
import JobPostManageStatus from "./JobPostManageStatus";
import JobApplicantsForAdmin from "./JobApplicantsForAdmin";
import ShowJobDetailsPageSkeleton from "./ShowJobDetailsPageSkeleton";

type Props = {
  token: string;
  jobId: string;
};

export type JobDetailsCandidatesDataType = {
  applicationId: string;
  fullName: string;
  jobTitle: string;
  location: string;
  avatarUrl: string;
  applicationStatus: ApplicantStatusDetailsType;
  appliedAgo: string;
  matchPercentage: number;
  cvUrl: string;
  applicantId: string;
};

export type JobDetailsResponse = {
  jobID: string;
  title: string;
  description: string;
  responsibility: string;
  minSalary: number;
  maxSalary: number;
  jobCategory: string;
  location: string;
  postedAgo: string;
  status: JobStatusDataType;
  skills: string[];
  jobTypes: string[];
  workApproaches: string[];
  applicationsCount: number;
  companyName: string;
  companyLogoUrl: string;
  companySize: string;
  companyIndustry: string;
  companyID: string;
  candidates: JobDetailsCandidatesDataType[];
};

async function getJobDetailsById(
  token: string,
  jobId: string,
): Promise<JobDetailsResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/job-details/${jobId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowJobDetailsPage({ jobId, token }: Props) {
  const { error, isLoading, data } = useQuery<
    JobDetailsResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["job-details-admin-dashboard", jobId],
    queryFn: () => getJobDetailsById(token, jobId),
  });

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
    <ShowJobDetailsPageSkeleton />
  ) : (
    data && (
      <div className="space-y-3 container mx-auto">
        <div className="flex items-center gap-6 justify-between flex-col sm:flex-row flex-wrap">
          <JobDetailsBreadcrumb
            dashboardLink="/dashboard/admin"
            jobslink="/dashboard/admin/jobs"
            jobId={jobId}
            jobTitle={"Forward Interactions Producer"}
          />

          <div className="flex items-center gap-1 flex-col sm:flex-row w-full sm:w-fit">
            <AlertModel
              title="Accept Job Post"
              trigger={
                <Button
                  disabled={data.status == "Approved"}
                  className="text-[0.8rem] h-9 bg-green-600 text-white hover:bg-green-700 gap-1 sm:w-fit w-full">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    strokeWidth={2}
                    className="size-4!"
                  />
                  Accept Job Post
                </Button>
              }
              content={
                <JobPostManageStatus
                  operation="accept"
                  jobId={data.jobID}
                  token={token}
                />
              }
              contentClassname="md:min-w-150 pb-3"
            />

            <AlertModel
              title="Reject Job Post"
              trigger={
                <Button
                  disabled={data.status == "Rejected"}
                  className="text-[0.8rem] h-9 bg-red-600 text-white hover:bg-red-700 gap-1 sm:w-fit w-full">
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    strokeWidth={2}
                    className="size-4!"
                  />
                  Reject Job Post
                </Button>
              }
              content={
                <JobPostManageStatus
                  operation="reject"
                  jobId={data.jobID}
                  token={token}
                />
              }
              contentClassname="md:min-w-150 pb-3"
            />
          </div>
        </div>

        {/* Job Details */}
        <div className="space-y-5">
          {/* Job Header */}
          <div className="bg-white border rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex flex-col gap-7">
              {/* Job Header */}
              <div>
                <p className="md:text-3xl text-xl font-medium flex items-end gap-3 flex-wrap">
                  {data.title}
                  <span className="flex items-center gap-1">
                    <JobStatusBadge jobStatus={data.status} />
                  </span>
                </p>
                <div className="flex items-center gap-5 md:mt-3 mt-2 flex-wrap">
                  <p className="flex items-center gap-1 text-sm text-black/70">
                    <HugeiconsIcon icon={Calendar02Icon} className="size-4" />
                    Posted - {formatDate(data.postedAgo)}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-black/70">
                    <HugeiconsIcon icon={Briefcase01Icon} className="size-4" />
                    {data.jobCategory}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-black/70">
                    <HugeiconsIcon icon={Location01Icon} className="size-4" />
                    {data.location}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-black/70">
                    <HugeiconsIcon icon={MoneyBag02Icon} className="size-4" />${" "}
                    {data.minSalary} - ${data.maxSalary}
                  </p>
                </div>

                <div className="flex items-center gap-3 md:mt-3 mt-2 flex-wrap">
                  {data.workApproaches.map((approch) => (
                    <p
                      key={approch}
                      className="text-xs font-medium border px-3 py-1 bg-input-bg rounded-sm w-fit">
                      {approch}
                    </p>
                  ))}
                  {data.jobTypes.map((jobType) => (
                    <p
                      key={jobType}
                      className="text-xs font-medium border px-3 py-1 bg-input-bg rounded-sm w-fit">
                      {jobType}
                    </p>
                  ))}
                </div>
              </div>

              {/* Company Data */}
              <div className="flex items-start gap-5 flex-col md:flex-row">
                <div className="size-23 rounded-2xl overflow-hidden border bg-input-bg shrink-0">
                  <img
                    src={data.companyLogoUrl}
                    alt={data.companyName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-semibold">{data.companyName}</h2>
                  <p className="text-sm text-black/60 mt-1 flex items-center gap-1">
                    <HugeiconsIcon
                      icon={Building03Icon}
                      className="size-4.5"
                      strokeWidth={2}
                    />
                    {data.companySize}
                  </p>
                  <p className="text-sm text-black/60 mt-1 flex items-center gap-1">
                    <HugeiconsIcon
                      icon={Briefcase01Icon}
                      className="size-4.5"
                      strokeWidth={2}
                    />
                    {data.companyIndustry}
                  </p>

                  <Link
                    className="flex items-center gap-1 text-xs px-4 py-1.5 bg-main-color text-white hover:bg-main-color/80 duration-300 w-fit rounded-sm mt-1.5"
                    target="_blank"
                    href={`/profile/${data.companyID}`}>
                    Company Profile
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="details">
            <TabsList className="relative sm:w-fit w-full flex flex-wrap gap-4 py-2 items-center text-black bg-white rounded-md shadow border px-2">
              <TabsTrigger
                className="cursor-pointer pb-2 text-black/50 sm:w-fit w-full font-medium text-[0.80rem] rounded-md data-[state=active]:bg-main-color data-[state=active]:text-white px-4 py-1.5"
                value="details">
                Details
              </TabsTrigger>

              <TabsTrigger
                value="applicants"
                className="cursor-pointer pb-2 text-black/50 sm:w-fit w-full font-medium text-[0.80rem] rounded-md data-[state=active]:bg-main-color data-[state=active]:text-white px-4 py-1.5">
                Applicants ({data.candidates.length})
              </TabsTrigger>
            </TabsList>
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 mt-8">
              <div className="bg-white p-6 rounded-md border shadow lg:flex-1 w-full lg:w-fit">
                <TabsContent value="details" className="w-full">
                  <ShowJobDetails
                    description={data.description}
                    requiredSkill={data.skills}
                    responsibility={data.responsibility}
                  />
                </TabsContent>
                <TabsContent value="applicants" className="w-full">
                  <JobApplicantsForAdmin
                    candidates={data.candidates}
                    jobId={jobId}
                    token={token}
                  />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    )
  );
}
