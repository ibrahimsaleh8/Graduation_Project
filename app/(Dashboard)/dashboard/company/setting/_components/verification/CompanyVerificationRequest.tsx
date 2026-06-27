"use client";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkBadge02Icon,
  Clock01Icon,
  Cancel01Icon,
  MessageQuestionIcon,
} from "@hugeicons/core-free-icons";
import UploadVerificationDocuments from "./UploadVerificationDocuments";

type Props = {
  token: string;
};

export type VerificationRequestStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "NeedsMoreInformation";

export type VerificationRequestResponseDataType = {
  status: VerificationRequestStatus | null;
  adminNotes: string | null;
};

async function getVerificationStatus(
  token: string,
): Promise<VerificationRequestResponseDataType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Company/verification-request-status`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

// ─── Status Banner Components ─────────────────────────────────────────────────

function PendingBanner() {
  return (
    <div className="w-full rounded-2xl border border-yellow-200 bg-yellow-50 p-6 flex items-start gap-4">
      <div className="size-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
        <HugeiconsIcon
          icon={Clock01Icon}
          className="size-6 text-yellow-600"
          strokeWidth={2}
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-yellow-800">Verification Pending</p>
        <p className="text-sm text-yellow-700">
          Your verification request has been submitted and is currently under
          review. We&apos;ll notify you once an admin has reviewed your documents.
          This usually takes 1–3 business days.
        </p>
      </div>
    </div>
  );
}

function ApprovedBanner() {
  return (
    <div className="w-full rounded-2xl border border-green-200 bg-green-50 p-6 flex items-start gap-4">
      <div className="size-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
        <HugeiconsIcon
          icon={CheckmarkBadge02Icon}
          className="size-6 text-green-600"
          strokeWidth={2}
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-green-800">Account Verified</p>
        <p className="text-sm text-green-700">
          Congratulations! Your company account has been successfully verified.
          You now have full access to all platform features.
        </p>
      </div>
    </div>
  );
}

function RejectedBanner({
  adminNotes,
  token,
}: {
  adminNotes: string | null;
  token: string;
}) {
  return (
    <div className="w-full space-y-6">
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 flex items-start gap-4">
        <div className="size-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
          <HugeiconsIcon
            icon={Cancel01Icon}
            className="size-6 text-red-600"
            strokeWidth={2}
          />
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-red-800">Verification Rejected</p>
          <p className="text-sm text-red-700">
            Unfortunately, your verification request was rejected. Please review
            the admin&apos;s notes below and resubmit with the correct documents.
          </p>
          {adminNotes && (
            <div className="mt-3 rounded-xl bg-red-100 border border-red-200 px-4 py-3">
              <p className="text-xs font-semibold text-red-800 mb-1">
                Admin Notes:
              </p>
              <p className="text-sm text-red-700">{adminNotes}</p>
            </div>
          )}
        </div>
      </div>

      {/* Allow re-upload after rejection */}
      <UploadVerificationDocuments token={token} />
    </div>
  );
}

function NeedsMoreInfoBanner({
  adminNotes,
  token,
}: {
  adminNotes: string | null;
  token: string;
}) {
  return (
    <div className="w-full space-y-6">
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 flex items-start gap-4">
        <div className="size-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
          <HugeiconsIcon
            icon={MessageQuestionIcon}
            className="size-6 text-blue-600"
            strokeWidth={2}
          />
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-blue-800">More Information Required</p>
          <p className="text-sm text-blue-700">
            The admin has reviewed your request and requires additional
            documents or information. Please read the notes below and upload
            the requested files.
          </p>
          {adminNotes && (
            <div className="mt-3 rounded-xl bg-blue-100 border border-blue-200 px-4 py-3">
              <p className="text-xs font-semibold text-blue-800 mb-1">
                What&apos;s needed:
              </p>
              <p className="text-sm text-blue-700">{adminNotes}</p>
            </div>
          )}
        </div>
      </div>

      {/* Allow uploading additional documents */}
      <UploadVerificationDocuments token={token} />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function CompanyVerificationRequest({ token }: Props) {
  const { error, data, isLoading } = useQuery<
    VerificationRequestResponseDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["verification-req-status"],
    queryFn: () => getVerificationStatus(token),
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

  if (isLoading) {
    return (
      <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
        <div className="space-y-3">
          <div className="h-6 w-48 bg-input-bg animate-pulse rounded-lg" />
          <div className="h-4 w-full bg-input-bg animate-pulse rounded-lg" />
          <div className="h-4 w-3/4 bg-input-bg animate-pulse rounded-lg" />
        </div>
        <div className="h-48 w-full bg-input-bg animate-pulse rounded-2xl" />
      </div>
    );
  }

  return (
    data && (
      <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
        {data.status === null && (
          <UploadVerificationDocuments token={token} />
        )}
        {data.status === "Pending" && <PendingBanner />}
        {data.status === "Approved" && <ApprovedBanner />}
        {data.status === "Rejected" && (
          <RejectedBanner adminNotes={data.adminNotes} token={token} />
        )}
        {data.status === "NeedsMoreInformation" && (
          <NeedsMoreInfoBanner adminNotes={data.adminNotes} token={token} />
        )}
      </div>
    )
  );
}
