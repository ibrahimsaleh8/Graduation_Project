/* eslint-disable @next/next/no-img-element */
import {
  Briefcase01Icon,
  Location01Icon,
  Mail01FreeIcons,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { formatDate } from "@/lib/FormatDate";
import { CompanyInfo } from "./hooks/useSubscriptionDetails";

type Props = {
  companyData: CompanyInfo;
};

export default function CompanyMainInfo({ companyData }: Props) {
  const companyInfo = [
    {
      value: companyData.companyEmail,
      icon: Mail01FreeIcons,
    },
    {
      value: companyData.industry,
      icon: Briefcase01Icon,
    },
    {
      value: companyData.location,
      icon: Location01Icon,
    },
  ];
  return (
    <div className="bg-white p-5 w-full rounded-md border flex flex-col gap-6">
      {/* Image & Title */}
      <div className="flex md:items-center items-start flex-col md:flex-row gap-3">
        <div className="size-15 bg-input-bg rounded-full overflow-hidden">
          <img src={companyData.companyLogoUrl} alt={companyData.companyName} />
        </div>
        <div className="space-y-1">
          <p className="font-medium">{companyData.companyName}</p>
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
      <div className="pt-3 mt-auto border-t flex items-center justify-between text-sm flex-wrap gap-4">
        <p className="text-black/70">
          Joined: {formatDate(companyData.joinedAt)}
        </p>
        <Link
          target="_blank"
          className="text-main-color font-medium hover:underline"
          href={`/profile/${companyData.companyId}`}>
          View Profile
        </Link>
      </div>
    </div>
  );
}
