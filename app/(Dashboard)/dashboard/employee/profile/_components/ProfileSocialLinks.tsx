import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProfileSocialLinks() {
  return (
    <div className="w-full lg:max-w-xl bg-white border p-4 rounded-md space-y-4">
      <p className="text-xl font-medium">Social Links</p>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            target="_blank"
            className="flex items-center gap-2 bg-[#1877f2] text-white px-4 py-2 rounded-md hover:opacity-80 duration-300">
            <FaFacebook className="size-5" />
            Facebook
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            className="flex items-center gap-2 bg-[#0a66c2] text-white px-4 py-2 rounded-md hover:opacity-80 duration-300">
            <FaLinkedin className="size-5" />
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            className="flex items-center gap-2 bg-[#333] text-white px-4 py-2 rounded-md hover:opacity-80 duration-300">
            <FaGithub className="size-5" />
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
