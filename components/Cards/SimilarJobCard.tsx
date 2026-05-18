import { Dot } from "lucide-react";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Bookmark01Icon,
  Calendar02Icon,
  MoneyBag02Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function SimilarJobCard() {
  return (
    <div className="p-3 w-full border-2 rounded-md space-y-3">
      {/* Top */}
      <div className="flex items-start gap-3 justify-between flex-wrap">
        <div className="flex items-start flex-col sm:flex-row gap-2">
          {/* Company Logo */}
          <div className="size-14 bg-input-bg rounded-md"></div>

          {/* Company Data */}
          <div className="">
            <p className="text-lg font-medium">Fronted Developer</p>

            <p className="text-sm text-black/80 flex items-center">
              Microsoft <Dot className="size-5" /> Egypt
            </p>
          </div>
        </div>

        <Button className="bg-transparent hover:bg-black/5 text-black ml-auto">
          <HugeiconsIcon icon={Bookmark01Icon} className="size-5!" />
        </Button>
      </div>

      {/* Employemnt Types */}
      <div className="flex items-center gap-2 flex-wrap">
        <p className="px-2 py-1.5 text-[0.8rem] bg-input-bg rounded-sm">
          Part-time
        </p>
        <p className="px-2 py-1.5 text-[0.8rem] bg-input-bg rounded-sm">
          Part-time
        </p>
        <p className="px-2 py-1.5 text-[0.8rem] bg-input-bg rounded-sm">
          Part-time
        </p>
      </div>

      {/* Bottom */}
      <div className="w-full flex items-center justify-between gap-7">
        <div className="flex items-center gap-3 flex-wrap">
          <p className="flex items-center gap-1 text-sm text-black/80">
            <HugeiconsIcon icon={Calendar02Icon} className="size-4" /> 2 day ago
          </p>
          <p className="flex items-center gap-1 text-sm text-black/80">
            <HugeiconsIcon icon={MoneyBag02Icon} className="size-4" /> $100 -
            $300
          </p>
        </div>

        <Link
          className="ml-auto px-4 py-2 text-sm bg-main-color rounded-sm hover:bg-main-color/80 duration-300 text-white"
          href={"/"}>
          Apply
        </Link>
      </div>
    </div>
  );
}
