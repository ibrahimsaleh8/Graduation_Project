import { File02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import VerificationDocumentCard from "./VerificationDocumentCard";

export default function ShowVerificationDocuments() {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 text-sm">
        <p className="font-medium">Verification Documents</p>
        <p className="flex items-center gap-1">
          <HugeiconsIcon icon={File02Icon} className="size-4" strokeWidth={2} />
          3 Files
        </p>
      </div>
      {/* Documents */}
      <div className="space-y-2">
        <VerificationDocumentCard />
        <VerificationDocumentCard />
      </div>
    </div>
  );
}
