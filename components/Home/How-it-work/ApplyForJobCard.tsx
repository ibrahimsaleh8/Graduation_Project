import Image from "next/image";
import searchForJobImage from "@images/landing-page-images/howItWork/job_searching_illustration.png";
export default function ApplyForJobCard() {
  return (
    <div className="w-full xl:h-100 rounded-2xl overflow-hidden bg-white">
      <Image
        src={searchForJobImage}
        alt="search for job"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
