import { SidebarProvider } from "@/components/animate-ui/components/radix/sidebar";
import React from "react";
import DashboardSidebar from "./_components/DashboardSidebar";
import DashboardHeader from "./_components/DashboardHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full">
        <DashboardHeader />
        <div className="md:p-4 p-2 min-h-screen overflow-x-hidden bg-[#F5F7F9]">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
