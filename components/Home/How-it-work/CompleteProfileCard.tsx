import CompleteProfileStepCard from "./CompleteProfileStepCard";

import uploadImage from "@images/landing-page-images/howItWork/image_upload.png";
import personalDataImage from "@images/landing-page-images/howItWork/personal_data.png";
import cvImage from "@images/landing-page-images/howItWork/cv_upload.png";
import socialsImage from "@images/landing-page-images/howItWork/socials.png";

const profileSteps = [
  {
    image: uploadImage,
    title: "Upload Your Profile Images",
  },
  {
    image: personalDataImage,
    title: "Fill Your Personal Data",
  },
  {
    image: cvImage,
    title: "Upload Your CV",
  },
  {
    image: socialsImage,
    title: "Add Your Social Links",
  },
];

export default function CompleteProfileCard() {
  return (
    <div className="xl:h-120 w-full bg-white rounded-2xl md:p-5 p-2 text-black flex flex-col justify-between gap-3">
      {profileSteps.map((step) => (
        <CompleteProfileStepCard
          key={step.title}
          image={step.image}
          title={step.title}
        />
      ))}
    </div>
  );
}
