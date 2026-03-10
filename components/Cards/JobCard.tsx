import microsoft from "@images/Icons/google.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Bookmark01Icon } from "@hugeicons/core-free-icons";
import JobDetailsSheet from "./JobDetailsSheet";

export default function JobCard() {
  return (
    <div className="bg-white w-full rounded-2xl flex flex-col gap-5 p-8 border border-black/5 text-black">
      {/* Top */}
      <div className="flex items-center justify-between gap-5">
        <div className="p-2 rounded-md flex gap-3">
          <Image src={microsoft} alt="microsoft" className="w-10" />
          <div className="text-sm">
            <p className="font-medium text-low-color">Google</p>
            <p className="text-low-color">Cairo, Egypt</p>
          </div>
        </div>

        <Button className="bg-white text-black hover:bg-white/90">
          <HugeiconsIcon icon={Bookmark01Icon} className="size-5!" />
        </Button>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-3">
        <p className="md:text-2xl text-xl font-medium">
          Fronted Developer React.js
        </p>
        <p className="text-sm font-medium text-low-color">$240 - $300</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <p className="px-3 py-1.5 bg-input-bg text-low-color rounded-md text-sm">
          Part-time
        </p>
        <p className="px-3 py-1.5 bg-input-bg text-low-color rounded-md text-sm">
          Remote
        </p>
      </div>

      {/* Bottom */}
      <div className="flex justify-between border-t pt-5 items-center gap-4 flex-wrap">
        <JobDetailsSheet />
        <p className="text-sm text-low-color">3 day ago</p>
      </div>
    </div>
  );
}
