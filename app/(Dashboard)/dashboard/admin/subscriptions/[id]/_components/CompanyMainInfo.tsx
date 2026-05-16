import {
  Briefcase01Icon,
  Location01Icon,
  Mail01FreeIcons,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
const companyInfo = [
  {
    value: "ebrihm576@gmail.com",
    icon: Mail01FreeIcons,
  },
  {
    value: "Software Development",
    icon: Briefcase01Icon,
  },
  {
    value: "Cairo, Egypt",
    icon: Location01Icon,
  },
];
export default function CompanyMainInfo() {
  return (
    <div className="bg-white p-5 w-full rounded-md border space-y-6">
      {/* Image & Title */}
      <div className="flex md:items-center items-start flex-col md:flex-row gap-3">
        <div className="size-15 bg-amber-300 rounded-sm"></div>
        <div className="space-y-1">
          <p className="font-medium">Techify Solutions</p>
          <p className="text-sm text-black/70">
            Building innovative solutions for a better tomorrow
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4 text-sm md:pl-3">
        {companyInfo.map((info) => (
          <p key={info.value} className="flex items-center gap-3">
            <HugeiconsIcon
              icon={info.icon}
              className="size-4.5 text-black/70"
            />
            {info.value}
          </p>
        ))}
      </div>

      {/* Bottom */}
      <div className="pt-3 border-t flex items-center justify-between text-sm flex-wrap gap-4">
        <p className="text-black/70">Joined Jan 12, 2023</p>
        <Link
          className="text-main-color font-medium hover:underline"
          href={"/"}>
          View Profile
        </Link>
      </div>
    </div>
  );
}
