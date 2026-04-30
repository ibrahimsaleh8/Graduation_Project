"use client";

import aiChatImage from "@images/ai-chatbot-head.png";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function AiChatFloatedIcon() {
  const pathname = usePathname();
  console.log("pathname", pathname.split("/")[2]);
  return (
    <Link
      style={{
        display: pathname.split("/")[2] == "company" ? "flex" : "none",
      }}
      href="/dashboard/company/ai-chat"
      aria-label="Open AI Chat"
      className={cn(
        "group fixed bottom-6 left-6 z-50",
        "flex items-center justify-center",
        "w-16 h-16 rounded-full",
        "bg-main-color/10 backdrop-blur-md",
        "border border-main-color/30",
        "shadow-lg",
        "transition-all duration-300 ease-out",
        "hover:scale-110 hover:shadow-xl",
        "active:scale-95",
      )}>
      {/* Glow Effect */}
      <span className="absolute inset-0 rounded-full bg-main-color/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Icon */}
      <Image
        src={aiChatImage}
        alt="AI Chatbot"
        width={60}
        height={60}
        priority
        className="w-10 h-10 relative z-10 transition-transform duration-300 group-hover:rotate-6"
      />

      {/* Tooltip */}
      <span className="absolute left-20 whitespace-nowrap bg-black text-white text-xs px-3 py-1.5 rounded-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        AI Assistant
      </span>
    </Link>
  );
}
