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
        <TabsList className="w-fit flex flex-wrap items-center justify-center gap-4 text-white px-3 md:rounded-4xl rounded-md">
          <TabsTrigger
            className="cursor-pointer duration-300 hover:bg-white w-full font-medium text-white/70 text-sm aria-selected:border aria-selected:bg-white aria-selected:text-black px-4 py-2 hover:text-black"
            value="companies">
            Companies
          </TabsTrigger>
          <TabsTrigger
            className="cursor-pointer duration-300 hover:bg-white w-full font-medium text-white/70 text-sm aria-selected:border aria-selected:bg-white aria-selected:text-black px-4 py-2 hover:text-black"
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
