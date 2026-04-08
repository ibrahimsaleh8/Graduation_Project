import Link from "next/link";
import userImage from "@images/user-image.png";
import Image from "next/image";
export default function NewApplicantsCard() {
  return (
    <div className="flex md:items-center md:flex-row flex-col justify-between gap-5 pb-3 md:pb-0 border-b md:border-0">
      {/* Left */}
      <div className="flex items-start gap-3">
        {/* User Image */}
        <div className="size-12 rounded-full bg-amber-300">
          <Image
            src={userImage}
            alt="User Image"
            className="rounded-full w-full object-cover"
          />
        </div>
        {/* User Info */}
        <div className="text-sm">
          <p className="font-medium">Ibrahim Saleh</p>
          <p className="text-black/70">
            Applied For
            <span className="font-medium text-black"> Frontend Developer</span>
          </p>
          <p className="text-xs text-black/70">2 hours ago</p>
        </div>
      </div>

      {/* Right */}
      <div className="text-sm text-black/70">
        <Link
          href={"/"}
          className="px-4 flex w-fit text-center items-center justify-center py-2 text-xs bg-black text-white rounded-md border border-black hover:bg-black/70 duration-300">
          Show Applications
        </Link>
      </div>
    </div>
  );
}
