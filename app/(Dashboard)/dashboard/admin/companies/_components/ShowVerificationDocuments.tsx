import { File02Icon, Files02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import VerificationDocumentCard from "./VerificationDocumentCard";
type Props = {
  documents: {
    fileUrl: string;
    fileName: string;
    fileSize: number;
  }[];

  createdAt: string;
};
export default function ShowVerificationDocuments({
  documents,
  createdAt,
}: Props) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 text-sm">
        <p className="font-medium">Verification Documents</p>
        <p className="flex items-center gap-1">
          <HugeiconsIcon icon={File02Icon} className="size-4" strokeWidth={2} />
          {documents.length} Files
        </p>
      </div>
      {/* Documents */}

      <div className="space-y-2">
        {documents.length > 0 ? (
          documents.map((doc) => (
            <VerificationDocumentCard
              key={doc.fileUrl}
              {...doc}
              createdAt={createdAt}
            />
          ))
        ) : (
          <p className="text-center text-sm p-4 font-medium text-black/80 flex items-center gap-2 justify-center  ">
            <HugeiconsIcon icon={Files02Icon} className="size-4" /> No Documents
            Attatched
          </p>
        )}
      </div>
    </div>
  );
}
