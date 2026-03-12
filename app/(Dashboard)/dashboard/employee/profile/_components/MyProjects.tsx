import ProjectCard from "./ProjectCard";

export default function MyProjects() {
  return (
    <div>
      <div className="flex gap-8 flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
