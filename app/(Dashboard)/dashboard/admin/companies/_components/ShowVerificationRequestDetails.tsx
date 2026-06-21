/* eslint-disable @next/next/no-img-element */
"use client";
import { Activity, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AskMoreDetails from "./AskMoreDetails";
import Link from "next/link";
import ShowVerificationDocuments from "./ShowVerificationDocuments";
import {
  Building03Icon,
  File02Icon,
  FileAddIcon,
  ImageNotFound01Icon,
  NotebookIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { VerificationRequestStatusDataType } from "./hooks/useVerificationRequest";
import VerificationStatusBadge from "./VerificationStatusBadge";
import ChangeVerificationRequestStatus from "./ChangeVerificationRequestStatus";
import ShowVerificationRequestDetailsSkeleton from "./ShowVerificationRequestDetailsSkeleton";

type Props = {
  token: string;
  id: string;
};

export type CompanyVerificationDetails = {
  companyId: string;
  companyName: string;
  companyCoverImage: string;
  companyLogoImage: string;
  status: VerificationRequestStatusDataType;
  companyDescription: string | null;
  notes: string | null;
  documents: {
    fileUrl: string;
    fileName: string;
    fileSize: number;
  }[];
  createdAt: string;
};

async function getVerificationRequestDetailsApi(token: string, id: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/vertification-request-details/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowVerificationRequestDetails({ id, token }: Props) {
  const [askMoreDetails, setAskMoreDetails] = useState(false);

  const { error, isLoading, data } = useQuery<
    CompanyVerificationDetails,
    AxiosError<{ message: string }>
  >({
    queryKey: ["verification-request-details", id],
    queryFn: () => getVerificationRequestDetailsApi(token, id),
  });

  if (error) {
    console.log("error", error.response);
    const errorMessage =
      error.response?.data.message ?? error.response?.statusText;
    return (
      <ErrorDashboardMessage
        statusCode={error.response?.status}
        errorMessage={errorMessage ?? "Something Went Wrong"}
      />
    );
  }

  return isLoading ? (
    <ShowVerificationRequestDetailsSkeleton />
  ) : (
    data && (
      <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-4">
        {/* Top */}
        <div>
          {/* Wide Image */}
          <div className="w-full h-40 bg-input-bg flex items-center justify-center overflow-hidden">
            {!data.companyCoverImage && (
              <p className="font-medium flex items-center gap-2 text-black/80">
                <HugeiconsIcon
                  icon={ImageNotFound01Icon}
                  className="size-5"
                  strokeWidth={2}
                />
                No Cover Image
              </p>
            )}
            {data.companyCoverImage && (
              <img
                src={data.companyCoverImage}
                alt={`cover image ${data.companyName}`}
                className="w-full object-cover"
              />
            )}
          </div>

          {/* Company Logo */}
          <div className="size-20 bg-input-bg flex items-center justify-center border -mt-10 ml-3 rounded-full overflow-hidden">
            {!data.companyLogoImage && (
              <p className="font-medium flex items-center justify-center gap-2 w-full h-full text-black/80">
                <HugeiconsIcon
                  icon={ImageNotFound01Icon}
                  className="size-7"
                  strokeWidth={2}
                />
              </p>
            )}
            {data.companyLogoImage && (
              <img
                src={data.companyLogoImage}
                alt={`Logo ${data.companyName}`}
                className="w-full object-cover rounded-full"
              />
            )}
          </div>
        </div>

        <div className="px-4 space-y-4">
          {/* Title & Desc */}
          <div className="space-y-4">
            <div className="flex items-center flex-wrap justify-between gap-4">
              <p className="text-lg font-medium">{data.companyName}</p>

              <VerificationStatusBadge status={data.status} />
            </div>

            <Link
              className="text-xs px-4 py-2 bg-main-color text-white flex w-fit rounded-md items-center gap-1 hover:bg-main-color/90"
              href={`/profile/${data.companyId}`}
              target="_blank">
              <HugeiconsIcon
                icon={Building03Icon}
                className="size-4"
                strokeWidth={2}
              />
              Show Company Profile
            </Link>

            {data.companyDescription && (
              <div
                className="text-xs  ProseMirror"
                dangerouslySetInnerHTML={{
                  __html: data.companyDescription,
                }}
              />
            )}
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
                <AskMoreDetails
                  id={id}
                  setAskMoreDetails={setAskMoreDetails}
                  token={token}
                />
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
                <div className="space-y-2">
                  {data.notes && (
                    <div className="text-sm py-2 space-y-3 border-y">
                      <p className="flex items-center gap-1 font-medium">
                        <HugeiconsIcon
                          icon={NotebookIcon}
                          className="size-4"
                          strokeWidth={2}
                        />{" "}
                        Notes
                      </p>
                      <p className="pl-3">{data.notes}</p>
                    </div>
                  )}

                  <ShowVerificationDocuments
                    documents={data.documents}
                    createdAt={data.createdAt}
                  />
                </div>
              </motion.div>
            </Activity>
          </AnimatePresence>

          {/* Verification Documents */}
        </div>

        <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center flex-col gap-4">
          <div className="w-full flex items-center gap-4">
            <ChangeVerificationRequestStatus
              id={id}
              status={data.status}
              token={token}
              operation="approve"
            />
            <ChangeVerificationRequestStatus
              id={id}
              status={data.status}
              token={token}
              operation="reject"
            />
          </div>

          <Button
            disabled={data.status == "NeedsMoreInformation"}
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
    )
  );
}
