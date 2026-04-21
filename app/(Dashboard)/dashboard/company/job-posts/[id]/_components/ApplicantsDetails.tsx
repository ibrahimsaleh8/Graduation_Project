import Image from "next/image";
import userImage from "@images/user-image.png";
import MatchCircle from "./MatchCircle";

export default function ApplicantsDetails() {
  return (
    <div>
      {/* Top */}
      <div className="w-full flex items-center justify-between gap-4">
        {/* User Image & Name */}
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
          <div className="text-sm space-y-0.5">
            <p className="font-medium">Ibrahim Saleh</p>
            <p className="text-black/70 text-xs">ebrihm576@gmail.com</p>
          </div>
        </div>

        {/* Match Bar */}
        <div className="">
          <MatchCircle percentage={80} size={90} />
        </div>
      </div>
    </div>
  );
}
