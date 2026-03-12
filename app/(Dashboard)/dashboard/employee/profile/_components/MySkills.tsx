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
export default function MySkills() {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {skills.map((skill) => (
        <p
          key={skill}
          className="py-2 px-4 bg-input-bg text-black text-sm rounded-sm">
          {skill}
        </p>
      ))}
    </div>
  );
}
