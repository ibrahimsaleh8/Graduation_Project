import userImage from "@images/dashboard-user-image.png";
import Image from "next/image";
type Props = {
  toggleShowEmailContent: (show: boolean) => void;
  toggleShowEmailContentForPC: (show: boolean) => void;
};
export default function MessageCard({
  toggleShowEmailContent,
  toggleShowEmailContentForPC,
}: Props) {
  return (
    <div
      onClick={() => {
        toggleShowEmailContent(false);
        toggleShowEmailContentForPC(true);
      }}
      className="p-3 flex gap-2 items-start bg-input-bg rounded-md hover:bg-input-bg/40 duration-500 cursor-pointer">
      {/* Image */}
      <div className="size-10 bg-white rounded-full">
        <Image
          src={userImage}
          alt="user image"
          width={1000}
          height={1000}
          className="w-full object-cover object-center"
        />
      </div>
      {/* Text */}
      <div className="text-sm flex-1">
        <div className="flex items-center justify-between">
          <p className="font-medium">Ibrahim saleh</p>
          <p className="text-xs font-medium text-main-color">2 mins ago</p>
        </div>
        <p className="line-clamp-1 font-medium ">
          Interview Process Update - Product Designer
        </p>
        <p className="line-clamp-1 text-black/60">
          Hi there! We loved your portfolio. Are you available for a quick chat
          tomorrow regarding the next steps in our process?
        </p>
      </div>
    </div>
  );
}
