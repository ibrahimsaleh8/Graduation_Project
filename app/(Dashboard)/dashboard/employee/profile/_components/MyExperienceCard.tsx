import { Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function MyExperienceCard() {
  return (
    <div className="space-y-3 border-b pb-3">
      {/* Top */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-lg font-medium">Senior Full Stack Developer</p>
          <p className="font-medium">Tech Corp Inc.</p>
          <p className="flex items-center gap-1 text-sm">
            <HugeiconsIcon icon={Location01Icon} className="size-4.5" />
            San Francisco, CA
          </p>
        </div>
        <p className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-md">
          2019 - 2021
        </p>
      </div>

      <div>
        <p>
          Led the frontend team in rebuilding the core product using Next.js 14
          and React, improving performance by 40%
        </p>
        <p>
          Architected and implemented a microservices-based backend using
          Node.js and GraphQL
        </p>
        <p>
          Mentored 5 junior developers and conducted weekly code review sessions
        </p>
      </div>
    </div>
  );
}
