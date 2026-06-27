"use client";

import { Input } from "../ui/input";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, File02Icon } from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { ArrowUpRight } from "lucide-react";
import { useApplyJob } from "./hooks/useApplyJob";
import ApplyForJobSkeleton from "./ApplyForJobSkeleton";
import { Spinner } from "../ui/spinner";
import { Dispatch, SetStateAction } from "react";

type Props = {
  token: string;
  jobId: string;
  setShowDescription: Dispatch<SetStateAction<boolean>>;
};

export default function ApplicationForm({
  token,
  jobId,
  setShowDescription,
}: Props) {
  const {
    handleSubmit,
    errors,
    setSelectedCV,
    data,
    error,
    isLoading,
    selectedCV,
    isPending,
  } = useApplyJob({ token, jobId, setShowDescription });
  if (error) {
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
    <ApplyForJobSkeleton />
  ) : (
    data && (
      <form className="flex flex-col gap-3 max-w-3xl" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name:</label>
          <Input
            defaultValue={data.applicantName}
            disabled={true}
            className="disabled:border-black/10"
            type="text"
            placeholder="Your Name"
            id="name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <Input
            defaultValue={data.email}
            type="email"
            disabled={true}
            className="disabled:border-black/10"
            placeholder="Your Email"
            id="email"
          />
        </div>

        {/* CV */}
        <div className="flex flex-col gap-2">
          <p>Choose Your CV</p>

          <div className="flex items-center gap-3 flex-wrap">
            {data.resumes.map((cv) => (
              <div key={cv.resumeId}>
                <button
                  type="button"
                  onClick={() => setSelectedCV(cv.resumeId)}
                  className="bg-input-bg relative w-fit flex flex-col gap-2 items-center border p-4 pb-2 rounded-md rounded-b-none cursor-pointer">
                  {selectedCV === cv.resumeId && (
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      className="size-6 fill-green-600 text-white absolute -top-2 -right-1"
                    />
                  )}

                  <HugeiconsIcon
                    icon={File02Icon}
                    className="size-6.5"
                    strokeWidth={2}
                  />

                  <p
                    title={cv.fileName}
                    className="text-[0.8rem] truncate max-w-26">
                    {cv.fileName}
                  </p>
                </button>

                <a
                  href={cv.filePath}
                  target="_blank"
                  className="w-full px-4 py-1.5 text-sm bg-main-dark gap-1 hover:bg-main-dark/90 rounded-t-none text-white flex items-center justify-center rounded-md">
                  Show <ArrowUpRight className="size-4.5" />
                </a>
              </div>
            ))}
          </div>

          {errors.cv && <p className="text-red-500 text-sm">{errors.cv}</p>}
        </div>

        <Button
          disabled={isPending}
          className="w-32 mt-6 text-sm bg-main-color hover:bg-main-color/90 duration-300">
          {isPending ? <Spinner /> : "Apply"}
        </Button>
      </form>
    )
  );
}
