import AlertModel from "@/components/main-layout/AlertModel";
import {
  CloudUploadIcon,
  Delete02Icon,
  File02Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import UpdateMyCv from "./Update_Components/UpdateMyCv";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EmployeeResumeDataType } from "@/hooks/useGetEmployeeProfile";
import DeleteCv from "./Delete_Components/DeleteCv";

type Props = {
  resumes: EmployeeResumeDataType[];
  token: string;
};

export default function ProfileDataCv({ resumes, token }: Props) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">My CV</Label>

      <div className="flex flex-wrap gap-4">
        {resumes.map((res) => (
          <div
            key={res.resumeId}
            className="group w-52 rounded-xl border bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex size-14 items-center justify-center rounded-full bg-main-color/10">
                <HugeiconsIcon
                  icon={File02Icon}
                  className="size-7 text-main-color"
                />
              </div>

              <div className="space-y-1 w-full">
                <p title={res.name} className="truncate text-sm font-medium">
                  {res.name}
                </p>

                <p className="text-xs text-muted-foreground">Resume Document</p>
              </div>

              <div className="flex gap-2 w-full">
                <a
                  target="_blank"
                  href={res.url}
                  className="h-8 text-sm bg-main-color flex-1 text-white flex items-center justify-center gap-2 px-3 py-2 rounded-md w-1/2">
                  <HugeiconsIcon
                    icon={ViewIcon}
                    className="size-4.5"
                    strokeWidth={2}
                  />
                </a>

                <AlertModel
                  title="Delete CV"
                  trigger={
                    <Button size="sm" className="bg-red-500 hover:bg-red-600 ">
                      <HugeiconsIcon icon={Delete02Icon} className="size-4" />
                    </Button>
                  }
                  content={<DeleteCv token={token} resumeId={res.resumeId} />}
                  contentClassname="md:min-w-150"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Upload New CV */}
        <AlertModel
          title="Add New CV"
          trigger={
            <button
              className="
              cursor-pointer
            w-52 h-47.5
            rounded-xl border-2 border-dashed
            border-main-color/30
            bg-white
            transition-all
            hover:border-main-color
            hover:bg-main-color/5
            flex flex-col items-center justify-center gap-3
          ">
              <div className="flex size-14 items-center justify-center rounded-full bg-main-color/10">
                <HugeiconsIcon
                  icon={CloudUploadIcon}
                  className="size-7 text-main-color"
                />
              </div>

              <div>
                <p className="font-medium text-sm">Upload New CV</p>
                <p className="text-xs text-muted-foreground">PDF, DOCX</p>
              </div>
            </button>
          }
          content={<UpdateMyCv token={token} />}
          contentClassname="md:min-w-150"
        />
      </div>
    </div>
  );
}
