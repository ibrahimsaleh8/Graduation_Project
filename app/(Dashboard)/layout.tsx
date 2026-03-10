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
        <div className="p-4 min-h-screen overflow-x-hidden">{children}</div>
      </main>
    </SidebarProvider>
  );
}
