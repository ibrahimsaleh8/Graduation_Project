import MyExperienceCard from "./MyExperienceCard";

export default function ShowMyExperience() {
  return (
    <div className="w-full bg-white border p-4 rounded-md space-y-4">
      <p className="text-xl font-medium">Experience</p>
      <MyExperienceCard />
    </div>
  );
}
