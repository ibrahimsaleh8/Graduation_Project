import UpFromDownText from "../AnimatedComponents/UpFromDownText";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  BrushIcon,
  CodeIcon,
  SmartPhone01Icon,
  AnalyticsIcon,
  DatabaseIcon,
  MarketingIcon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons";

const categories = [
  {
    title: "UI / UX Design",
    description:
      "Design user interfaces and create engaging digital experiences.",
    icon: BrushIcon,
  },
  {
    title: "Web Development",
    description:
      "Build modern websites and web applications using latest technologies.",
    icon: CodeIcon,
  },
  {
    title: "Mobile Development",
    description:
      "Create powerful mobile applications for iOS and Android platforms.",
    icon: SmartPhone01Icon,
  },
  {
    title: "Data & Analytics",
    description:
      "Analyze data to uncover insights and support business decisions.",
    icon: AnalyticsIcon,
  },
  {
    title: "Backend Development",
    description: "Develop scalable APIs, servers, and cloud-based systems.",
    icon: DatabaseIcon,
  },
  {
    title: "Digital Marketing",
    description: "Grow brands using SEO, social media, and digital campaigns.",
    icon: MarketingIcon,
  },
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
          Discover jobs across different industries and find the role that
          matches your skills.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="
            group relative bg-white border border-border-color
            rounded-2xl p-6 transition-all duration-300
            hover:shadow-lg hover:border-main-color
            flex flex-col gap-4">
            {/* Icon */}
            <div
              className="
              w-14 h-14 flex items-center justify-center
              rounded-xl bg-main-color/10 text-main-color
              group-hover:bg-main-color group-hover:text-white
              transition">
              <HugeiconsIcon icon={item.icon} className="size-7" />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-main-dark">
                {item.title}
              </h3>
              <p className="text-sm text-low-color leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {/* More Categories */}
        <div
          className="
          flex flex-col justify-center items-center text-center
          border border-dashed border-main-color/40
          rounded-2xl p-6 gap-3
          bg-main-color/5 hover:bg-main-color/10
          transition">
          <HugeiconsIcon
            icon={PlusSignIcon}
            className="size-8 text-main-color"
          />
          <p className="font-semibold text-main-dark">More Categories</p>
          <p className="text-sm text-low-color">25+ more job fields</p>
        </div>
      </div>
    </section>
  );
}
