import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import { Button } from "@/components/ui/button";
import {
  BlockedIcon,
  Building03Icon,
  LinkCircle02Icon,
  Location01Icon,
  Mail01Icon,
  Settings01Icon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import SmallDetailsCard from "../../_components/SmallDetailsCard";
import SmallStatisticCardForDetails from "../../_components/SmallStatisticCardForDetails";
import Link from "next/link";
import DeleteBtnWithVerfication from "../../_components/DeleteBtnWithVerfication";

const details = [
  {
    title: "Email Address",
    value: "contact@techify.com",
    icon: Mail01Icon,
  },
  {
    title: "Industry",
    value: "Software Development",
    icon: Building03Icon,
  },
  {
    title: "Location",
    value: "Egypt",
    icon: Location01Icon,
  },
  {
    title: "Employees",
    value: "201 - 500 Employees",
    icon: UserGroup02Icon,
  },
];
const companyStatistics = [
  {
    value: "24",
    label: "Total Jobs",
  },
  {
    value: "24",
    label: "Active Jobs",
  },
  {
    value: "148",
    label: "Total Applicants",
  },
  {
    value: "12",
    label: "Total Interviews",
  },
];
export default function DisplayCompanyFullDetails() {
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
            Company Details
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-4">
          {/* Top */}
          <div>
            {/* Wide Image */}
            <div className="w-full h-40 bg-amber-400"></div>

            {/* Company Logo */}
            <div className="size-20 bg-black -mt-10 ml-3 rounded-2xl"></div>
          </div>

          <div className="px-4 space-y-4">
            {/* Title & Desc */}
            <div className="space-y-3">
              <div className="flex items-center flex-wrap justify-between gap-4">
                <p className="text-lg font-medium">Pixel Studio</p>

                <p className="ml-auto text-xs px-2 py-1 bg-input-bg rounded-sm font-medium">
                  Free Plane
                </p>
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto, id! Molestias, saepe quod aspernatur recusandae enim
                cum reprehenderit nemo ratione iure quis itaque incidunt at.
                Aliquid quam optio harum ex.
              </p>
            </div>

            {/* Data */}
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
                {companyStatistics.map((statistic) => (
                  <SmallStatisticCardForDetails
                    label={statistic.label}
                    value={statistic.value}
                    key={statistic.label}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center flex-col gap-4">
            <div className="w-full flex items-center gap-4">
              <Button className="text-[0.83rem] h-10 flex-1 bg-yellow-400 hover:bg-yellow-500 text-black">
                <HugeiconsIcon icon={BlockedIcon} /> Block Company
              </Button>
              <DeleteBtnWithVerfication
                isPending={false}
                deleteFn={() => {
                  console.log("delete company");
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
              Show Company Profile
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
