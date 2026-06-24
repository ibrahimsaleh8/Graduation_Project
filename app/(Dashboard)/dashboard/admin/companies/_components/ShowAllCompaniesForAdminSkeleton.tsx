"use client";

import DashboardCardStatisticsSkeleton from "@/app/(Dashboard)/_components/DashboardCardStatisticsSkeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/motion/tabs";
import ShowAllCompaniesSkeleton from "./ShowAllCompaniesSkeleton";
import VerificationRequestesSkeleton from "./VerificationRequestesSkeleton";

export default function ShowAllCompaniesForAdminSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="font-medium text-xl">Companies Management</p>
        <p className="text-sm">Track and manage all registered companies</p>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <DashboardCardStatisticsSkeleton variant="dark" size="small" />
        <DashboardCardStatisticsSkeleton variant="light" size="small" />
        <DashboardCardStatisticsSkeleton variant="light" size="small" />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="companies">
        <TabsList className="md:w-100 w-full flex flex-col md:flex-row gap-4 items-center text-white">
          <TabsTrigger
            className="cursor-pointer duration-300 hover:bg-white w-full font-medium text-black/70 text-sm data-[state=active]:border data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 rounded-md"
            value="companies">
            Companies
          </TabsTrigger>
          <TabsTrigger
            className="cursor-pointer duration-300 hover:bg-white w-full font-medium text-black/70 text-sm data-[state=active]:border data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 rounded-md"
            value="verifi-req">
            Verification Requestes
          </TabsTrigger>
        </TabsList>
        <div className="overflow-visible! mt-7">
          <TabsContent value="companies">
            <ShowAllCompaniesSkeleton />
          </TabsContent>
          <TabsContent value="verifi-req">
            <VerificationRequestesSkeleton />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
