import MyExperienceCard from "./MyExperienceCard";
import { ExperienceType } from "./ShowMyEmployeeProfile";

export default function ShowMyExperience({
  experience,
}: {
  experience?: ExperienceType[];
}) {
  return (
    <div className="w-full p-5 rounded-md border border-border-color bg-white space-y-4">
      <p className="font-medium pb-2 border-b">Experience</p>

      {experience && experience.length > 0 ? (
        <div className="space-y-2">
          {experience.map((exp) => (
            <MyExperienceCard key={exp.experienceID} {...exp} />
          ))}
        </div>
      ) : (
        <div className="p-3 text-2xl font-medium text-black/70">
          No Experience Added...
        </div>
      )}
    </div>
  );
}
