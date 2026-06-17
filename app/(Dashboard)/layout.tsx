import { ReactNode } from "react";
import DashboardHeader from "./_components/DashboardHeader";
import AiChatFloatedIcon from "./dashboard/company/_components/AiChatFloatedIcon";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={`w-full bg-main-dark min-h-screen ${font.className}`}>
      <DashboardHeader />
      <div className=" md:px-4 px-2">
        <div className="md:p-6 p-4 min-h-[calc(100vh-100px)] overflow-x-hidden bg-[#F6F6F6] rounded-md">
          {children}
        </div>
      </div>

      {/* <AiChatFloatedIcon /> */}
    </main>
  );
}
