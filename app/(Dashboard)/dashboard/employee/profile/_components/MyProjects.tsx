import ProjectCard from "./ProjectCard";

export default function MyProjects() {
  return (
    <div className="w-full p-4 rounded-md space-y-4">
      <p className="text-xl font-medium">My Projects</p>

      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
