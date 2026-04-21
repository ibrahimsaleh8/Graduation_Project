import { HugeiconsIcon } from "@hugeicons/react";
import JobDetailsBreadcrumb from "./_components/JobDetailsBreadcrumb";
import {
  Briefcase01Icon,
  Calendar02Icon,
  Delete02Icon,
  Setting07Icon,
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

export default async function JobPostDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  return (
    <div className="space-y-3">
      {/* Breadcrumb */}
      <JobDetailsBreadcrumb />
      {/* Job Details */}
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center gap-5 flex-wrap w-full justify-between">
          <div>
            <p className="text-3xl font-medium flex items-end gap-3 flex-wrap">
              Frontend Developer
              <span className="text-xs px-2 py-1 bg-[#ECFDF5] text-[#059669] w-fit rounded-md font-medium border border-green-700/20">
                Active
              </span>
            </p>
            <div className="flex items-center gap-3 mt-1">
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

        {/* Tabs */}
        <Tabs defaultValue="details">
          <TabsList className="relative w-full flex gap-4 rounded-lg py-2 items-center text-white">
            <span className="absolute left-0 bottom-2 z-1 w-full h-px bg-black/10"></span>
            <TabsTrigger
              className="cursor-pointer pb-2 text-black/50 w-fit font-medium text-sm border-b border-transparent data-[state=active]:border-main-color data-[state=active]:text-main-color px-4 py-1.5"
              value="details">
              Details
            </TabsTrigger>

            <TabsTrigger
              value="applicants"
              className="cursor-pointer pb-2 text-black/50 border-transparent w-fit font-medium text-sm border-b data-[state=active]:border-main-color data-[state=active]:text-main-color px-4 py-1.5">
              Applicants (30)
            </TabsTrigger>
            <TabsTrigger
              value="interviews"
              className="cursor-pointer pb-2 text-black/50 border-transparent w-fit font-medium text-sm border-b data-[state=active]:border-main-color data-[state=active]:text-main-color px-4 py-1.5">
              Interviews (2)
            </TabsTrigger>
          </TabsList>
          <TabsContents className="mt-5">
            <TabsContent value="details" className="w-full">
              <ShowJobDetails />
            </TabsContent>
            <TabsContent value="applicants" className="w-full">
              <JobApplicants />
            </TabsContent>
          </TabsContents>
        </Tabs>
      </div>
    </div>
  );
}
