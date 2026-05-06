import {
  Briefcase08Icon,
  Building03Icon,
  Calendar02Icon,
  Link03Icon,
  Location01Icon,
  MoneyBag02Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import companyImage from "@images/Icons/apple-11.svg";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";

export default function JobDetailsForCheetContent() {
  return (
    <div className="space-y-4 px-4 pb-8 w-full">
      {/* Top */}
      <div className="w-full flex md:items-end items-center text-center md:text-left md:flex-row flex-col gap-4 flex-wrap">
        {/* Company Logo */}
        <div className="size-15 bg-input-bg flex items-center justify-center rounded-md p-1">
          <Image
            src={companyImage}
            alt="companyImage"
            className="w-full object-cover"
          />
        </div>
        {/* Job Main Data */}
        <div>
          <p className="text-xs px-3 py-1 bg-[#fff9df] text-[#c47b40] w-fit font-medium rounded-md mx-auto md:mx-0">
            Pending Review
          </p>
          <p className="text-lg font-medium">Frontend Developer</p>

          <div className="flex items-center gap-4 flex-wrap text-sm text-black/70">
            <p className="flex items-center gap-1">
              <HugeiconsIcon
                icon={Briefcase08Icon}
                className="size-4"
                strokeWidth={2}
              />
              Engineering
            </p>
            <p className="flex items-center gap-1">
              <HugeiconsIcon
                icon={Calendar02Icon}
                className="size-4"
                strokeWidth={2}
              />
              Posted 2 days ago
            </p>
          </div>
        </div>
      </div>

      {/* Location & Salary */}
      <div className="w-full flex items-center md:flex-row flex-col gap-4">
        {/* Salary */}
        <div className="w-full p-2 bg-input-bg flex flex-col items-center rounded-md border">
          <p className="font-medium flex items-center gap-1 text-[0.9rem]">
            <HugeiconsIcon
              icon={MoneyBag02Icon}
              className="size-4"
              strokeWidth={2}
            />
            Salary Range
          </p>
          <p className="text-sm">$200 - $300</p>
        </div>

        {/* Location */}
        <div className="w-full p-2 bg-input-bg flex flex-col items-center rounded-md border">
          <p className="font-medium flex items-center gap-1 text-[0.9rem]">
            <HugeiconsIcon
              icon={Location01Icon}
              className="size-4"
              strokeWidth={2}
            />
            Location
          </p>
          <p className="text-sm">Egypt</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-5">
        {/* Description */}
        <div className="space-y-1.5 text-sm">
          <p className="font-medium">Description</p>
          <p>
            We are looking for a skilled Frontend Developer to join our team.
            You will be responsible for building modern, responsive web
            applications using React and Next.js.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="space-y-1.5 text-sm">
          <p className="font-medium">Responsibilities</p>
          <p>
            Develop and maintain user interfaces, collaborate with designers and
            backend developers, optimize applications for performance, and
            ensure code quality.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-1.5 text-sm">
          <p className="font-medium">Skills</p>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="px-3 py-1.5 bg-input-bg text-xs w-fit rounded-sm">
              React
            </p>
            <p className="px-3 py-1.5 bg-input-bg text-xs w-fit rounded-sm">
              Nextjs
            </p>
            <p className="px-3 py-1.5 bg-input-bg text-xs w-fit rounded-sm">
              TypeScript
            </p>
            <p className="px-3 py-1.5 bg-input-bg text-xs w-fit rounded-sm">
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="space-y-3 mt-6">
        <p className="font-medium text-sm">Company Details</p>
        <div className="w-full bg-input-bg p-3 flex items-center flex-col md:flex-row text-center md:text-left gap-6 rounded-md border">
          {/* Company Image */}
          <div className="size-14 bg-white rounded-full flex items-center justify-center p-1">
            <Image
              src={companyImage}
              alt="companyImage"
              className="w-full object-cover"
            />
          </div>

          {/* Company Details */}
          <div>
            <p className="font-medium">TechCorp Egypt</p>
            <div className="text-[0.85rem] flex items-center justify-center gap-4 flex-wrap text-black/70">
              <p className="flex items-center gap-1">
                <HugeiconsIcon
                  icon={UserGroupIcon}
                  className="size-4.5"
                  strokeWidth={2}
                />
                10 - 50 Employees
              </p>
              <p className="flex items-center gap-1">
                <HugeiconsIcon
                  icon={Building03Icon}
                  className="size-4.5"
                  strokeWidth={2}
                />
                Cloud Computing
              </p>
            </div>

            <Link
              className="text-[0.85rem] font-medium underline text-blue-600 flex items-center gap-1 mt-2 w-fit mx-auto md:mx-0"
              href={"/"}>
              <HugeiconsIcon
                icon={Link03Icon}
                className="size-4"
                strokeWidth={2}
              />{" "}
              View Company Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
