import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { CompanySocialLinks } from "./ShowCompanyProfile";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

type Props = {
  socialLinks: CompanySocialLinks;
};
export default function CompanyProfileSocialLinks({ socialLinks }: Props) {
  return (
    <div className="w-full lg:max-w-lg bg-white border p-4 rounded-md space-y-4">
      <p className="text-xl font-medium">Social Links</p>
      {!socialLinks.facebook &&
        !socialLinks.instagram &&
        !socialLinks.linkedin &&
        !socialLinks.twitter && (
          <Link
            href={"/dashboard/company/setting"}
            className="text-sm text-black/70 font-medium w-full flex items-center gap-1 hover:underline">
            <HugeiconsIcon icon={Share01Icon} className="size-5" /> Please Add
            Company Social Links in Settings{" "}
          </Link>
        )}
      <ul className="grid md:grid-cols-2 gap-4 text-sm">
        {socialLinks.facebook && (
          <li>
            <a
              href={socialLinks.facebook}
              target="_blank"
              className="flex items-center gap-2 bg-[#1877f2] text-white px-4 py-2 rounded-md hover:opacity-80 duration-300">
              <FaFacebook className="size-5" />
              Facebook
            </a>
          </li>
        )}

        {socialLinks.linkedin && (
          <li>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              className="flex items-center gap-2 bg-[#0a66c2] text-white px-4 py-2 rounded-md hover:opacity-80 duration-300">
              <FaLinkedin className="size-5" />
              Linkedin
            </a>
          </li>
        )}

        {socialLinks.instagram && (
          <li>
            <a
              href={socialLinks.instagram}
              target="_blank"
              className="flex items-center gap-2 bg-[#e1306c] text-white px-4 py-2 rounded-md hover:opacity-80 duration-300">
              <FaInstagram className="size-5" />
              Instagram
            </a>
          </li>
        )}

        {socialLinks.twitter && (
          <li>
            <a
              href={socialLinks.twitter}
              target="_blank"
              className="flex items-center gap-2 bg-[#000000] text-white px-4 py-2 rounded-md hover:opacity-80 duration-300">
              <BsTwitterX className="size-5" />
              Twitter
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
