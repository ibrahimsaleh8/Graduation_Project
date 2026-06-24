import ArrowLink from "./ArrowLink";
import {
  CodeIcon,
  ArtificialIntelligence04Icon,
  PaintBrush02Icon,
  Megaphone01Icon,
  Book01Icon,
  Settings02Icon,
  SecurityLockIcon,
  CloudIcon,
} from "@hugeicons/core-free-icons";

import JobCategoryCard from "./JobCategoryCard";

export const jobCategories = [
  {
    title: "Software Development",
    description:
      "Frontend, Backend, Full-Stack, Mobile, and Software Engineering roles.",
    icon: CodeIcon,
  },
  {
    title: "Data Science & AI",
    description:
      "Data Analysts, Data Scientists, Machine Learning and AI Engineers.",
    icon: ArtificialIntelligence04Icon,
  },
  {
    title: "Design & Creative",
    description:
      "UI/UX Designers, Graphic Designers, Product Designers, and Creative roles.",
    icon: PaintBrush02Icon,
  },
  {
    title: "Marketing",
    description:
      "Digital Marketing, SEO, Content Marketing, Social Media, and Branding.",
    icon: Megaphone01Icon,
  },
  {
    title: "Education",
    description: "Teachers, Tutors, Trainers, and Educational Administrators.",
    icon: Book01Icon,
  },
  {
    title: "Engineering",
    description:
      "Civil, Mechanical, Electrical, and Industrial Engineering positions.",
    icon: Settings02Icon,
  },

  {
    title: "Cybersecurity",
    description:
      "Security Analysts, Penetration Testers, and Security Engineers.",
    icon: SecurityLockIcon,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud Engineers, DevOps Engineers, and Site Reliability Engineers.",
    icon: CloudIcon,
  },
];

export default function JobsCategories() {
  return (
    <div className="container mx-auto space-y-6 w-full md:p-10 p-5 relative mt-20 pb-20">
      <p className="px-4 py-2 bg-[#1A1A1A] w-fit rounded-2xl text-sm">
        Categories
      </p>

      <div className="flex items-center gap-8 flex-wrap justify-between">
        <p className="xl:text-5xl lg:text-4xl text-3xl capitalize font-medium">
          Job Categories in our <br />
          platform
        </p>
        <div className="ml-auto">
          <ArrowLink label="Join us" link="/" />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {jobCategories.map((cat) => (
          <JobCategoryCard key={cat.title} {...cat} />
        ))}
      </div>
    </div>
  );
}
