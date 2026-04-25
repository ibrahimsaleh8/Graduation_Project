"use client";

import MessageContent from "./_components/MessageContent";
import { TooltipProvider } from "@/components/ui/tooltip";
import ShowAllMessages from "./_components/ShowAllMessages";
import { useState } from "react";

export default function MailsPage() {
  const [showMessageListMobile, setShowMessageListMobile] = useState(true);
  const [showMessageContentDesktop, setShowMessageContentDesktop] =
    useState(false);

  return (
    <TooltipProvider>
      <div className="space-y-3">
        {/* Header */}
        <div>
          <p className="font-medium text-xl">Mails</p>
          <p className="text-sm">
            Keep track of and manage your upcoming messages
          </p>
        </div>

        {/* Desktop */}
        <div className="w-full h-200 bg-white shadow border rounded-2xl hidden md:flex overflow-hidden">
          <ShowAllMessages
            toggleShowEmailContentForPC={setShowMessageContentDesktop}
            toggleShowEmailContent={setShowMessageListMobile}
          />

          <MessageContent
            showEmailContent={showMessageContentDesktop}
            toggleShowEmailContent={setShowMessageListMobile}
          />
        </div>

        {/* Mobile */}
        <div className="w-full min-h-175 bg-white shadow border rounded-2xl flex md:hidden overflow-hidden">
          {showMessageListMobile ? (
            <ShowAllMessages
              toggleShowEmailContentForPC={setShowMessageContentDesktop}
              toggleShowEmailContent={setShowMessageListMobile}
            />
          ) : (
            <MessageContent
              showEmailContent={showMessageContentDesktop}
              toggleShowEmailContent={setShowMessageListMobile}
            />
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
