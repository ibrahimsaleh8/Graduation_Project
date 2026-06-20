import { FaFacebook, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
type Props = {
  cvUrl: string | null;
  portfolio: string | null;
  facebook: string | null;
  linkedin: string | null;
  github: string | null;
};
export default function UserDetailsSocials({
  cvUrl,
  facebook,
  github,
  linkedin,
  portfolio,
}: Props) {
  return (
    <div className="space-y-2">
      <p className="font-medium text-sm">Social Links</p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {cvUrl && (
          <a
            href={cvUrl}
            target="_blank"
            className="flex items-center justify-center gap-2 text-sm px-8 py-2 bg-input-bg w-full rounded-md hover:underline">
            <FaFileAlt className="size-4" />
            Show CV
          </a>
        )}
        {portfolio && (
          <a
            href={portfolio}
            target="_blank"
            className="flex items-center justify-center gap-2 text-sm px-8 py-2 bg-sky-700 text-white w-full rounded-md hover:underline">
            <RiGlobalLine className="size-4" />
            Portfolio
          </a>
        )}

        {facebook && (
          <a
            href={facebook}
            target="_blank"
            className="flex items-center justify-center text-white gap-2 text-sm px-8 py-2 bg-[#1877f2] w-full rounded-md hover:underline">
            <FaFacebook className="size-4" />
            Facebook
          </a>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            className="flex items-center justify-center gap-2 text-white text-sm px-8 py-2 bg-[#0a66c2] w-full rounded-md hover:underline">
            <FaLinkedin className="size-4" />
            Linkedin
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            className="flex items-center justify-center gap-2 text-white text-sm px-8 py-2 bg-black w-full rounded-md hover:underline">
            <FaGithub className="size-4" />
            Github
          </a>
        )}
      </div>
    </div>
  );
}
