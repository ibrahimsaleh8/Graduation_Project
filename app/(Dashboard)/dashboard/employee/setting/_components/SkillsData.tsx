import AlertModel from "@/components/main-layout/AlertModel";
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddSkillForm from "./Add_Components/AddSkillForm";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "React Query",
  "Zustand",
  "Tailwind CSS",
  "Shadcn UI",
  "Framer Motion",
  "React Hook Form",
  "Zod",
  "Axios",
  "Node.js",
  "Express.js",
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "JWT Authentication",
  "Stripe Integration",
  "Cloudinary",
  "Git",
  "GitHub",
];
export default function SkillsData() {
  return (
    <div className="w-full px-4 py-4 md:py-0">
      <div className="w-full flex justify-end pb-4">
        <AlertModel
          title="Add Skill"
          trigger={
            <Button className="text-sm h-9.5 min-w-40 bg-main-color text-white hover:bg-main-color/90 gap-1 ml-3">
              <Plus className="size-4.5" /> Add Skill
            </Button>
          }
          content={<AddSkillForm skills={skills} />}
          contentClassname="md:min-w-150"
        />
      </div>
      {/* All Skills */}
      <div className="flex items-center gap-4 flex-wrap">
        {skills.map((skill) => (
          <SkillCard title={skill} key={skill} />
        ))}
      </div>
    </div>
  );
}
