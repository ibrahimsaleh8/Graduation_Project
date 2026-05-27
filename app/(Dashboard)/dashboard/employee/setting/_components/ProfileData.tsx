"use client";
import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CloudUploadIcon,
  File02Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import UpdateMyCv from "./Update_Components/UpdateMyCv";
import CountrySelect from "@/components/forms/CountrySelect";
import TextEditor from "@/app/(Dashboard)/_components/TextEditor";

export default function ProfileData() {
  const UpdateCountry = (country: string) => {
    console.log(country);
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full px-4 py-4 md:py-0">
      {/* Body */}
      <div className="flex flex-col gap-3">
        {/* Image */}
        <div className="flex flex-col w-full">
          <div className="w-full h-40 bg-amber-400 rounded-2xl flex items-center justify-center">
            <HugeiconsIcon
              icon={CloudUploadIcon}
              className="size-10 text-black"
            />
          </div>
          <div className="size-25 rounded-full bg-main-color -mt-10 flex items-center justify-center">
            <HugeiconsIcon
              icon={CloudUploadIcon}
              className="size-10 text-white"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex gap-5 flex-col w-full mt-5 px-3">
          <div className="flex items-center gap-4 w-full flex-col lg:flex-row">
            <div className="space-y-1 w-full">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                type="text"
                id="full-name"
                placeholder="Full Name"
                className="bg-white border border-border-color placeholder:text-black/30 shadow-none"
              />
            </div>
            <div className="space-y-1 w-full">
              <Label htmlFor="job-title">Job Title</Label>
              <Input
                type="text"
                id="job-title"
                placeholder="Job Title"
                className="bg-white border border-border-color placeholder:text-black/30 shadow-none"
              />
            </div>
            <div className="space-y-1 w-full">
              <Label className="text-sm">Country</Label>
              <CountrySelect
                classes="h-11 text-low-color border border-border-color hover:bg-white/80! w-full flex justify-start hover:bg-input-bg/80 duration-300 bg-white"
                deafultCountry=""
                UpdateCountry={UpdateCountry}
              />
            </div>
          </div>

          <div className="space-y-1">
            <TextEditor
              deafultValue={""}
              label="About Me"
              updateFn={(value: string) => {
                console.log(value);
              }}
            />
          </div>

          <div className="space-y-2">
            <Label>My CV</Label>
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
                  content={<UpdateMyCv />}
                  contentClassname="md:min-w-150"
                />
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm ml-3">
          Save
        </Button>
      </div>
    </form>
  );
}
