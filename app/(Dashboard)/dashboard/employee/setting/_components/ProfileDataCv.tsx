import AlertModel from "@/components/main-layout/AlertModel";
import {
  CloudUploadIcon,
  File02Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import UpdateMyCv from "./Update_Components/UpdateMyCv";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Props = {
  cvLink?: string;
  token: string;
};

export default function ProfileDataCv({ cvLink, token }: Props) {
  return (
    <div className="space-y-2">
      <Label>My CV</Label>
      {cvLink ? (
        <div className="flex items-start flex-col w-fit">
          <div className="w-fit px-5 pt-4 pb-4 bg-white rounded-md border flex flex-col gap-2 items-center">
            <HugeiconsIcon
              icon={File02Icon}
              className="size-10 text-black/70"
            />
            <div>
              <p className="text-xs font-medium">My_Cv.pdf</p>
            </div>
          </div>
          <div className="flex gap-1 items-center pt-1 w-full">
            <a
              href="#"
              className="h-8 text-sm bg-main-color text-white flex items-center justify-center gap-2 px-3 py-2 rounded-md w-1/2">
              <HugeiconsIcon
                icon={ViewIcon}
                className="size-4.5"
                strokeWidth={2}
              />
            </a>

            <AlertModel
              title="Update My CV"
              trigger={
                <Button className="h-8 text-sm w-1/2">
                  <HugeiconsIcon
                    icon={CloudUploadIcon}
                    className="size-4.5"
                    strokeWidth={2}
                  />
                </Button>
              }
              content={<UpdateMyCv token={token} />}
              contentClassname="md:min-w-150"
            />
          </div>
        </div>
      ) : (
        <>
          <AlertModel
            title="Upload My CV"
            trigger={
              <Button className="size-30 bg-white hover:bg-white/60 border border-border-color text-xs text-black/80 flex flex-col gap-2">
                <HugeiconsIcon
                  icon={CloudUploadIcon}
                  className="size-6"
                  strokeWidth={2}
                />
                Upload My Cv
              </Button>
            }
            content={<UpdateMyCv token={token} />}
            contentClassname="md:min-w-150"
          />
        </>
      )}
    </div>
  );
}
