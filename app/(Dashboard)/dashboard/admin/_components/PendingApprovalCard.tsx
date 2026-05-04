import comapnyImage from "@images/Icons/apple-11.svg";
import Image from "next/image";

export default function PendingApprovalCard() {
  return (
    <div className="flex md:items-center md:flex-row flex-col justify-between gap-5 pb-3 md:pb-1 border-b  ">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="size-14 p-1 flex items-center justify-center bg-white rounded-full">
          <Image
            src={comapnyImage}
            alt="Company Title"
            className="w-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">Frontend Developer</p>
          <p className="text-sm text-black/70">12 Jun 03:20 GMT</p>
        </div>
      </div>

      <p className="px-6 py-2 bg-[#FCF4C3] w-fit rounded-sm text-[#a26f19] border border-[#f5ecb4] text-xs font-medium">
        Pending
      </p>
    </div>
  );
}
