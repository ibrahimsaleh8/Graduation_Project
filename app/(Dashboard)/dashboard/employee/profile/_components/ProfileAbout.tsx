import { Profile02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

type Props = {
  aboutMe: string | null;
};
export default function ProfileAbout({ aboutMe }: Props) {
  return (
    <div className="w-full p-5 rounded-md border border-border-color bg-white space-y-4">
      <p className="font-medium pb-2 border-b">About</p>

      {aboutMe ? (
        <div
          className="text-sm ProseMirror"
          dangerouslySetInnerHTML={{
            __html: aboutMe,
          }}
        />
      ) : (
        <Link
          href={"/dashboard/company/setting"}
          className="font-medium text-black/70 text-sm hover:underline flex items-center gap-1">
          <HugeiconsIcon icon={Profile02Icon} className="size-5" /> Please Add
          About Company in Settings
        </Link>
      )}
    </div>
  );
}
