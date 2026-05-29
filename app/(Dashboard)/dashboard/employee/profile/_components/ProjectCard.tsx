import { ProjectType } from "@/hooks/useGetEmployeeProfile";
import { GithubIcon, Saturn02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ProjectCard({
  title,
  projectUrl,
  imageUrl,
  githubRepoUrl,
  description,
}: ProjectType) {
  return (
    <div className="w-full space-y-2.5">
      <div className="w-full bg-white h-50 rounded-md overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="font-medium text-xl line-clamp-1" title={title}>
          {title}
        </p>
        <p className="text-sm line-clamp-3" title={description}>
          {description}
        </p>

        <div className="flex items-center gap-4 flex-wrap mt-4">
          <a
            href={projectUrl}
            target="_blank"
            className="flex items-center gap-1 text-sm bg-sky-600 text-white px-4 py-1.5 rounded-md hover:opacity-80 duration-300">
            <HugeiconsIcon icon={Saturn02Icon} className="size-4.5" /> Live
            Preview
          </a>
          {githubRepoUrl && (
            <a
              href={githubRepoUrl}
              target="_blank"
              className="flex items-center gap-1 text-sm bg-black text-white px-4 py-1.5 rounded-md hover:opacity-80 duration-300">
              <HugeiconsIcon icon={GithubIcon} className="size-4.5" />
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
