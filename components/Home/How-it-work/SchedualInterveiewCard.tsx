import Image from "next/image";
import schedualInterviewImage from "@images/landing-page-images/howItWork/schedualInterview.png";

export default function SchedualInterveiewCard() {
  return (
    <div className="xl:h-100 w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center">
      <Image
        src={schedualInterviewImage}
        alt="schedual interview"
        className="xl:w-90"
      />
    </div>
  );
}
