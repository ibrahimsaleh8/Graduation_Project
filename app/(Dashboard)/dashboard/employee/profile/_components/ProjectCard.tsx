import { GithubIcon, Saturn02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ProjectCard() {
  return (
    <div className="w-full space-y-2.5">
      <div className="w-full bg-white h-50 rounded-md"></div>
      <div>
        <p className="font-medium text-xl">Project 1</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem
          perferendis, debitis mollitia blanditiis recusandae? Beatae unde
          facere recusandae officiis illum assumenda temporibus accusantium
          libero? Sit esse quas ut sed.
        </p>

        <div className="flex items-center gap-4 flex-wrap mt-4">
          <a
            href="#"
            className="flex items-center gap-1 text-sm bg-sky-600 text-white px-4 py-1.5 rounded-md hover:opacity-80 duration-300">
            <HugeiconsIcon icon={Saturn02Icon} className="size-4.5" /> Live
            Preview
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-sm bg-black text-white px-4 py-1.5 rounded-md hover:opacity-80 duration-300">
            <HugeiconsIcon icon={GithubIcon} className="size-4.5" />
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
