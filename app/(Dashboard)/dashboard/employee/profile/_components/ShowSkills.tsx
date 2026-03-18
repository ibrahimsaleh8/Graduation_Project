import MySkills from "./MySkills";

export default function ShowSkills() {
  return (
    <div className="w-full lg:max-w-xl bg-white border p-4 rounded-md space-y-4">
      <p className="text-xl font-medium">Skills</p>
      <MySkills />
    </div>
  );
}
