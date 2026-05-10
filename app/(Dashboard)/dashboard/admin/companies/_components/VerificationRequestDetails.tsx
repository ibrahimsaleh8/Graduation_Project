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
  Building03Icon,
  Cancel01Icon,
  CheckmarkCircle03Icon,
  File02Icon,
  FileAddIcon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Activity, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AskMoreDetails from "./AskMoreDetails";
import Link from "next/link";
import ShowVerificationDocuments from "./ShowVerificationDocuments";

export default function VerificationRequestDetails() {
  const [askMoreDetails, setAskMoreDetails] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-[0.77rem] h-9 w-30 flex items-center justify-center text-center px-8 rounded-sm bg-blue-500 text-white hover:bg-blue-600 gap-1.5">
          <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} /> Details
        </Button>
      </SheetTrigger>

      <SheetContent className="border-black bg-white text-black! md:w-124 w-[90%] relative h-screen">
        <SheetHeader>
          <SheetTitle className="pt-2 text-black">
            Verification Request Details
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
            <div className="space-y-4">
              <div className="flex items-center flex-wrap justify-between gap-4">
                <p className="text-lg font-medium">Pixel Studio</p>

                <p className="ml-auto text-xs px-3 py-1.5 border border-yellow-200 bg-yellow-100 text-yellow-700 rounded-sm font-medium">
                  Pending
                </p>
              </div>

              <Link
                className="text-xs px-4 py-2 bg-main-color text-white flex w-fit rounded-md items-center gap-1 hover:bg-main-color/90"
                href={"/"}
                target="_blank">
                <HugeiconsIcon
                  icon={Building03Icon}
                  className="size-4"
                  strokeWidth={2}
                />
                Show Company Profile
              </Link>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto, id! Molestias, saepe quod aspernatur recusandae enim
                cum reprehenderit nemo ratione iure quis itaque incidunt at.
                Aliquid quam optio harum ex.
              </p>
            </div>

            <AnimatePresence mode="wait">
              <Activity
                key="textarea"
                mode={askMoreDetails ? "visible" : "hidden"}>
                <motion.div
                  key="textarea"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}>
                  <AskMoreDetails />
                </motion.div>
              </Activity>
              <Activity
                key="documents"
                mode={!askMoreDetails ? "visible" : "hidden"}>
                <motion.div
                  key="documents"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.25 }}>
                  <ShowVerificationDocuments />
                </motion.div>
              </Activity>
            </AnimatePresence>

            {/* Verification Documents */}
          </div>

          <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center flex-col gap-4">
            <div className="w-full flex items-center gap-4">
              <Button className="text-[0.83rem] h-10 flex-1 bg-green-600 hover:bg-green-700 text-white">
                <HugeiconsIcon icon={CheckmarkCircle03Icon} strokeWidth={2} />{" "}
                Approve Verification
              </Button>
              <Button className="text-[0.83rem] h-10 flex-1 bg-red-600 hover:bg-red-700 text-white">
                <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} /> Reject
              </Button>
            </div>

            <Button
              onClick={() => setAskMoreDetails((pre) => !pre)}
              className="text-[0.83rem] w-full h-10  bg-main-color hover:bg-main-color/90 text-white">
              <HugeiconsIcon
                icon={askMoreDetails ? File02Icon : FileAddIcon}
                strokeWidth={2}
              />
              {askMoreDetails ? "Show Documents" : "Ask More Documents"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
