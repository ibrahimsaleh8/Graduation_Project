import { formatDate } from "@/lib/FormatDate";
import { formatFileSize } from "@/lib/FormatFileSize";
import { File02Icon, ViewIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
type Props = {
  fileUrl: string;
  fileName: string;
  fileSize: number;
  createdAt: string;
};
export default function VerificationDocumentCard({
  fileName,
  fileSize,
  fileUrl,
  createdAt,
}: Props) {
  return (
    <div className="w-full p-3 bg-input-bg rounded-md flex items-center gap-3 pr-5">
      {/* Icon */}
      <div className="size-10 flex items-center justify-center bg-white rounded-md">
        <HugeiconsIcon
          icon={File02Icon}
          className="size-6 text-main-color"
          strokeWidth={2}
        />
      </div>

      {/* Details File */}
      <div className="text-xs">
        <p className="font-medium truncate">{fileName}</p>
        <p>
          {formatFileSize(fileSize)} • Uploaded {formatDate(createdAt)}
        </p>
      </div>

      {/* Link */}
      <a
        href={fileUrl}
        target="_blank"
        className="ml-auto hover:bg-white size-8 duration-300 flex items-center justify-center rounded-sm">
        <HugeiconsIcon icon={ViewIcon} className="size-5" strokeWidth={2} />
      </a>
    </div>
  );
}
