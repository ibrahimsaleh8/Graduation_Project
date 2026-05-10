"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import {
  CallIcon,
  Settings01Icon,
  Briefcase08Icon,
  Calendar02Icon,
  Location01Icon,
  Mail01Icon,
  UserBlock02Icon,
  LinkCircle02Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";

import userImage from "@images/HR.png";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import SmallDetailsCard from "../../_components/SmallDetailsCard";
import SmallStatisticCardForDetails from "../../_components/SmallStatisticCardForDetails";
import DeleteBtnWithVerfication from "../../_components/DeleteBtnWithVerfication";
const details = [
  {
    title: "Email Address",
    value: "contact@techify.com",
    icon: Mail01Icon,
  },
  {
    title: "Phone Number",
    value: "+20 100 123 4567",
    icon: CallIcon,
  },
  {
    title: "Location",
    value: "Egypt",
    icon: Location01Icon,
  },
  {
    title: "Job Title",
    value: "Frontend Developer",
    icon: Briefcase08Icon,
  },
];

const userStatistics = [
  {
    value: "24",
    label: "Applications",
  },
  {
    value: "12",
    label: "Saved Jobs",
  },
  {
    value: "8",
    label: "Interviews",
  },
  {
    value: "13",
    label: "Projects",
  },
];
export default function ShowUserDetails() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-[0.77rem] h-9 w-30 flex items-center justify-center text-center px-8 rounded-sm bg-blue-500 text-white hover:bg-blue-600 gap-1.5">
          <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} /> Details
        </Button>
      </SheetTrigger>

      <SheetContent className="border-black bg-white text-black! md:w-124 w-[90%] relative h-screen">
        <SheetHeader>
          <SheetTitle className="pt-2 text-lg text-black">
            User Details
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>

        {/* User Details */}
        <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-3">
          <div className="space-y-5 px-4 pb-2 w-full">
            {/* Top User Info */}
            <div className="w-full flex md:items-end items-center text-center md:text-left md:flex-row flex-col gap-4 flex-wrap">
              {/* Avatar */}
              <div className="size-18 rounded-full overflow-hidden border-4 border-input-bg bg-input-bg">
                <Image
                  src={userImage}
                  alt="userImage"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* User Main Data */}
              <div>
                <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                  <p className="text-xs px-3 py-1 bg-green-50 text-green-700 w-fit font-medium rounded-md">
                    Active
                  </p>
                </div>

                <p className="text-lg font-medium mt-2">Ibrahim Saleh</p>

                <div className="flex items-center gap-4 flex-wrap text-sm text-black/70 justify-center md:justify-start">
                  <p className="flex items-center gap-1">
                    <HugeiconsIcon
                      icon={Briefcase08Icon}
                      className="size-4"
                      strokeWidth={2}
                    />
                    Frontend Developer
                  </p>

                  <p className="flex items-center gap-1">
                    <HugeiconsIcon
                      icon={Calendar02Icon}
                      className="size-4"
                      strokeWidth={2}
                    />
                    Joined May 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.map((detail) => (
                <SmallDetailsCard
                  icon={detail.icon}
                  title={detail.title}
                  value={detail.value}
                  key={detail.title}
                />
              ))}
            </div>

            {/* Statistics */}
            <div className="space-y-3">
              <p className="font-medium text-sm">Statistics</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userStatistics.map((statistic) => (
                  <SmallStatisticCardForDetails
                    label={statistic.label}
                    value={statistic.value}
                    key={statistic.label}
                  />
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <p className="font-medium text-sm">Skills</p>

              <div className="flex items-center gap-2 flex-wrap">
                <p className="px-3 py-1.5 bg-input-bg text-xs rounded-sm border">
                  React
                </p>

                <p className="px-3 py-1.5 bg-input-bg text-xs rounded-sm border">
                  Next.js
                </p>

                <p className="px-3 py-1.5 bg-input-bg text-xs rounded-sm border">
                  TypeScript
                </p>

                <p className="px-3 py-1.5 bg-input-bg text-xs rounded-sm border">
                  Tailwind CSS
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <p className="font-medium text-sm">Social Links</p>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center justify-center gap-2 text-sm px-8 py-2 bg-input-bg w-full rounded-md hover:underline">
                  <FaFileAlt className="size-4" />
                  Show CV
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center justify-center gap-2 text-sm px-8 py-2 bg-sky-700 text-white w-full rounded-md hover:underline">
                  <RiGlobalLine className="size-4" />
                  Portfolio
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center justify-center text-white gap-2 text-sm px-8 py-2 bg-[#1877f2] w-full rounded-md hover:underline">
                  <FaFacebook className="size-4" />
                  Facebook
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center justify-center gap-2 text-white text-sm px-8 py-2 bg-[#0a66c2] w-full rounded-md hover:underline">
                  <FaLinkedin className="size-4" />
                  Linkedin
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center justify-center gap-2 text-white text-sm px-8 py-2 bg-black w-full rounded-md hover:underline">
                  <FaGithub className="size-4" />
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center flex-col gap-4">
            <div className="w-full flex items-center gap-4">
              <Button className="text-sm h-10 flex-1 bg-yellow-400 hover:bg-yellow-500 text-black">
                <HugeiconsIcon icon={UserBlock02Icon} /> Block User
              </Button>
              <DeleteBtnWithVerfication
                deleteFn={() => {
                  console.log("Delete User");
                }}
              />
            </div>

            <Link
              href={"/"}
              target="_blank"
              className="w-full text-sm bg-main-color text-white h-10 rounded-md text-center flex gap-1 items-center justify-center">
              <HugeiconsIcon
                icon={LinkCircle02Icon}
                className="size-5"
                strokeWidth={2}
              />
              Show User Profile
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
