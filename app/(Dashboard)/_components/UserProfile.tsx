import userImage from "@images/dashboard-user-image.png";
import Image from "next/image";
export default function UserProfile() {
  return (
    <div className="flex items-center gap-3 font-medium bg-white hover:bg-white text-black hover:text-black px-4">
      <Image
        src={userImage}
        alt="User Image"
        width={1000}
        height={1000}
        className="md:size-12 size-8 object-center object-cover"
      />
      <div className="flex items-center gap-3">
        <div className="hidden md:flex flex-col gap-1">
          <span className="text-sm">ibrahim saleh</span>
          <span className="text-xs">Employee</span>
        </div>
      </div>
    </div>
  );
}
