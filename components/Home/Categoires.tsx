import UpFromDownText from "../AnimatedComponents/UpFromDownText";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  BrushIcon,
  CodeIcon,
  BriefcaseIcon,
  AnalyticsIcon,
  SmartPhone01Icon,
  DatabaseIcon,
  MarketingIcon,
  CustomerSupportIcon,
  TeacherIcon,
  CameraIcon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons";

const categories = [
  { category: "UI/UX Design", icon: BrushIcon, jobs: "12K Jobs" },
  { category: "Web Development", icon: CodeIcon, jobs: "18K Jobs" },
  { category: "Mobile Development", icon: SmartPhone01Icon, jobs: "9K Jobs" },
  { category: "Data & Analytics", icon: AnalyticsIcon, jobs: "7K Jobs" },
  { category: "Backend Development", icon: DatabaseIcon, jobs: "11K Jobs" },
  { category: "Digital Marketing", icon: MarketingIcon, jobs: "6K Jobs" },
  { category: "Business & Management", icon: BriefcaseIcon, jobs: "10K Jobs" },
  { category: "Customer Support", icon: CustomerSupportIcon, jobs: "8K Jobs" },
  { category: "Education & Training", icon: TeacherIcon, jobs: "5K Jobs" },
  { category: "Media & Photography", icon: CameraIcon, jobs: "4K Jobs" },
];

export default function Categories() {
  return (
    <section className="py-30 w-full">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center mb-16">
        <UpFromDownText
          text="Explore Opportunities by Category"
          classes="lg:text-5xl md:text-3xl text-xl font-semibold text-main-dark"
        />
        <p className="text-low-color max-w-xl">
          Find the job that suits your passion and expertise
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(26rem,1fr))] gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group bg-white border border-border-color rounded-xl p-6
            flex flex-col items-center text-center gap-4
            hover:border-main-color hover:shadow-md transition">
            <span className="text-main-color">
              <HugeiconsIcon icon={item.icon} className="size-10" />
            </span>

            <div>
              <p className="font-medium text-main-dark">{item.category}</p>
              <p className="text-sm text-low-color">{item.jobs}</p>
            </div>
          </div>
        ))}

        {/* More Categories Card */}
        <div
          className="bg-main-color/10 border border-main-color/30 rounded-xl p-6
          flex flex-col items-center justify-center text-center gap-4
          hover:bg-main-color/15 transition cursor-pointer">
          <span className="text-main-color">
            <HugeiconsIcon icon={PlusSignIcon} className="size-10" />
          </span>
          <p className="font-medium text-main-dark">+25 Categories</p>
          <p className="text-sm text-low-color">Browse all categories</p>
        </div>
      </div>
    </section>
  );
}
