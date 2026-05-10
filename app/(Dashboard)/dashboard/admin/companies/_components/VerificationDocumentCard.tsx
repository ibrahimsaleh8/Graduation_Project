import { File02Icon, ViewIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function VerificationDocumentCard() {
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
        <p className="font-medium">Business_License_2023.pdf</p>
        <p>PDF • 2.4 MB • Uploaded Oct 11</p>
      </div>

      {/* Link */}
      <a
        href="#"
        target="_blank"
        className="ml-auto hover:bg-white size-8 duration-300 flex items-center justify-center rounded-sm">
        <HugeiconsIcon icon={ViewIcon} className="size-5" strokeWidth={2} />
      </a>
    </div>
  );
}
