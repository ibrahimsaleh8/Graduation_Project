import Image from "next/image";
import microsoft from "@images/Icons/microsoft-6.svg";
import { Location01Icon, MoneyBag02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ShowJobDetails() {
  return (
    <div className="space-y-5 w-full">
      <div className="flex gap-7 items-start flex-wrap">
        <div className="flex flex-col gap-3">
          <Image
            src={microsoft}
            alt="logo"
            width={1000}
            height={1000}
            className="w-30"
          />
          <p className="font-medium text-main-color">Microsoft</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-6 flex-wrap">
            <p className="flex items-center gap-1 text-sm text-low-color font-medium">
              <HugeiconsIcon icon={Location01Icon} className="size-5" />
              Cairo, Egypt
            </p>
            <p className="flex items-center gap-1 text-sm text-low-color font-medium">
              <HugeiconsIcon icon={MoneyBag02Icon} className="size-5" />
              1000$ - 2000$
            </p>
          </div>

          <div className="flex gap-6 flex-wrap">
            <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
              Full-time
            </p>
            <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
              Part-time
            </p>
            <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
              Remote
            </p>
            <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
              On-site
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <p className="text-lg font-medium">Description</p>
        <p>
          We are looking for a skilled Frontend Developer to join our team. You
          will be responsible for building modern, responsive web applications
          using React and Next.js.
        </p>
      </div>

      {/* Responsibilities */}
      <div className="space-y-2">
        <p className="text-lg font-medium">Responsibilities</p>
        <p>
          Develop and maintain user interfaces, collaborate with designers and
          backend developers, optimize applications for performance, and ensure
          code quality.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <p className="text-lg font-medium">Required Skills</p>
        <div className="flex items-center gap-3 flex-wrap">
          <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
            React
          </p>
          <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
            Next.js
          </p>
          <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
            TypeScript
          </p>
          <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
            Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
