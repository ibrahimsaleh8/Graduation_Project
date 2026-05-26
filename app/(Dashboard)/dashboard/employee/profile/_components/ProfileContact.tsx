import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

type Props = {
  linkedin?: string;
  github?: string;
  facebook?: string;
  portfolio?: string;
};
export default function ProfileSocialLinks({
  linkedin,
  facebook,
  github,
  portfolio,
}: Props) {
  return (
    <div className="w-full xl:max-w-120 bg-white p-5 rounded-2xl border border-border-color">
      <p className="font-medium pb-2 border-b">Social Links</p>
      <ul className="space-y-6 mt-4">
        {linkedin && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <FaLinkedin className="size-5 text-black/70" />
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline">
              LinkedIn
            </a>
          </li>
        )}

        {facebook && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <FaFacebook className="size-5 text-black/70" />
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline">
              Facebook
            </a>
          </li>
        )}

        {github && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <FaGithub className="size-5 text-black/70" />
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline">
              GitHub
            </a>
          </li>
        )}

        {portfolio && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <AiOutlineGlobal className="size-5 text-black/70" />
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline">
              Portfolio
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
