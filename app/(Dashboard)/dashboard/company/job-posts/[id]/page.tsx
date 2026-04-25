import { HugeiconsIcon } from "@hugeicons/react";
import JobDetailsBreadcrumb from "./_components/JobDetailsBreadcrumb";
import {
  Briefcase01Icon,
  Calendar02Icon,
  Calendar03Icon,
  Delete02Icon,
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
import ShowJobDetails from "./_components/ShowJobDetails";
import JobApplicants from "./_components/JobApplicants";
import Image from "next/image";
import google from "@images/Icons/google.svg";
import JobPostStaticsCard from "./_components/JobPostStaticsCard";
import JobInterviews from "./_components/JobInterviews";

const jobPostStatics = [
  {
    label: "Applicants",
    value: "30",
    bg: "#eff4ff",
    color: "#1a56db",
    icon: UserGroupIcon,
  },
  {
    label: "Interviews",
    value: "2",
    bg: "#e6f7ef",
    color: "#0d7a4e",
    icon: Calendar03Icon,
  },
  {
    label: "Days Active",
    value: "2d",
    bg: "#fff8e6",
    color: "#b45309",
    icon: Time04Icon,
  },
];

export default async function JobPostDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  return (
    <div className="space-y-3 container mx-auto">
      {/* Breadcrumb */}
      <JobDetailsBreadcrumb />
      {/* Job Details */}
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center gap-5 flex-wrap w-full justify-between bg-white md:p-10 p-5 rounded-md border shadow">
          <div className="flex md:items-center flex-col md:flex-row items-start gap-3">
            {/* Logo */}
            <div className="size-15 bg-input-bg p-2 rounded-sm flex items-center justify-center">
              <Image
                src={google}
                alt="logo"
                width={1000}
                height={1000}
                className="w-full object-cover"
              />
            </div>
            {/* Job Header */}
            <div>
              <p className="md:text-3xl text-xl font-medium flex items-end gap-3 flex-wrap">
                Frontend Developer
                <span className="text-xs px-2 py-1 bg-[#ECFDF5] text-[#059669] w-fit rounded-md font-medium border border-green-700/20">
                  Active
                </span>
              </p>
              <div className="flex items-center gap-3 md:mt-1 mt-3 flex-wrap">
                <p className="flex items-center gap-1 text-sm text-black/70">
                  <HugeiconsIcon icon={Calendar02Icon} className="size-4" />
                  Posted 2 days ago
                </p>
                <p className="flex items-center gap-1 text-sm text-black/70">
                  <HugeiconsIcon icon={Briefcase01Icon} className="size-4" />
                  Web Development
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
              content={<>Edit Job Post</>}
              contentClassname="md:min-w-150 pb-3"
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
              content={<>Delete</>}
              contentClassname="md:min-w-150 pb-3"
            />
          </div>
        </div>

        {/* Statics */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-6 flex-wrap justify-between">
          {jobPostStatics.map((statistic) => (
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
                <ShowJobDetails />
              </TabsContent>
              <TabsContent value="applicants" className="w-full">
                <JobApplicants />
              </TabsContent>
              <TabsContent value="interviews" className="w-full">
                <JobInterviews />
              </TabsContent>
            </TabsContents>

            <div className="lg:w-85 w-full bg-white p-6 rounded-md border shadow space-y-4">
              <p className="text-xl font-medium">Job Details</p>
              <div className="space-y-3">
                {/* Job Location */}
                <div className="flex items-center justify-between text-sm pb-4 border-b">
                  <p className="flex items-center gap-1 text-black/80">
                    <HugeiconsIcon icon={Calendar02Icon} className="size-4" />
                    Location
                  </p>
                  <p>Cairo, Egypt</p>
                </div>

                {/* Salary */}
                <div className="flex items-center justify-between text-sm pb-4 border-b">
                  <p className="flex items-center gap-1 text-black/80">
                    <HugeiconsIcon icon={Calendar02Icon} className="size-4" />
                    Salary
                  </p>
                  <p>$1k – $2k</p>
                </div>

                {/* Category */}
                <div className="flex items-center justify-between text-sm pb-4 border-b">
                  <p className="flex items-center gap-1 text-black/80">
                    <HugeiconsIcon icon={Calendar02Icon} className="size-4" />
                    Category
                  </p>
                  <p>Web Development</p>
                </div>

                {/* Posted */}
                <div className="flex items-center justify-between text-sm pb-2">
                  <p className="flex items-center gap-1 text-black/80">
                    <HugeiconsIcon icon={Calendar02Icon} className="size-4" />
                    Posted
                  </p>
                  <p>2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
