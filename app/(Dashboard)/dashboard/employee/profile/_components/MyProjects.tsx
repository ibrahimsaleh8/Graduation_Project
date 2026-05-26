import ProjectCard from "./ProjectCard";
import { ProjectType } from "./ShowMyEmployeeProfile";

export default function MyProjects({ projects }: { projects?: ProjectType[] }) {
  return (
    <div className="w-full p-4 rounded-md space-y-4">
      <p className="text-xl font-medium">My Projects</p>
      {projects && projects.length > 0 ? (
        <div className="grid md:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.projectID} {...project} />
          ))}
        </div>
      ) : (
        <div className="p-3 text-2xl font-medium text-black/70">
          No Projects Added...
        </div>
      )}
    </div>
  );
}
