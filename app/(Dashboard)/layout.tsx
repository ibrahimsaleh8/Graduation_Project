import React from "react";
import DashboardHeader from "./_components/DashboardHeader";
import AiChatFloatedIcon from "./dashboard/company/_components/AiChatFloatedIcon";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full bg-main-dark min-h-screen ">
      <DashboardHeader />
      <div className=" md:px-4 px-2">
        <div className="md:p-6 p-4 min-h-[calc(100vh-100px)] overflow-x-hidden bg-[#F6F6F6] rounded-md">
          {children}
        </div>
      </div>

      <AiChatFloatedIcon />
    </main>
  );
}
