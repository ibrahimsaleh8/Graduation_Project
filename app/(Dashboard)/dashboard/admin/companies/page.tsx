"use client";
import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  Building03Icon,
  CheckmarkBadge01Icon,
  Alert02Icon,
} from "@hugeicons/core-free-icons";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/primitives/radix/tabs";
import ShowAllCompanies from "./_components/ShowAllCompanies";

const companiesStats = [
  {
    title: "Total Companies",
    value: 324,
    icon: Building03Icon,
    iconColor: "#ffffff",
    iconBg: "#125af7a6",
    description: "Registered companies",
    background: "#1b1b1b",
    textColor: "#ffffff",
    descriptionColor: "#ffffff",
  },
  {
    title: "Verified Companies",
    value: 218,
    icon: CheckmarkBadge01Icon,
    iconColor: "#1D4ED8",
    iconBg: "#DBEAFE",
    description: "Verified business accounts",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Verification Requests",
    value: 27,
    icon: Alert02Icon,
    iconColor: "#B45309",
    iconBg: "#FEF3C7",
    description: "Pending approval requests",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
];

export default function CompaniesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="font-medium text-xl">Companies Management</p>
        <p className="text-sm">Track and manage all registered companies</p>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {companiesStats.map((stat) => (
          <DashboardCardStatistics size="small" {...stat} key={stat.title} />
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="companies">
        <TabsList className="md:w-100 w-full flex flex-col md:flex-row gap-4 items-center text-white">
          <TabsTrigger
            className="cursor-pointer w-full font-medium text-black/50 text-sm data-[state=active]:border data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 rounded-md"
            value="companies">
            Companies
          </TabsTrigger>
          <TabsTrigger
            className="cursor-pointer w-full font-medium text-black/50 text-sm data-[state=active]:border data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 rounded-md"
            value="verifi-req">
            Verification Requestes
          </TabsTrigger>
        </TabsList>
        <TabsContents className="overflow-visible! mt-7">
          <TabsContent value="companies">
            <ShowAllCompanies />
          </TabsContent>
          <TabsContent value="verifi-req">
            Change your password here.
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
}
