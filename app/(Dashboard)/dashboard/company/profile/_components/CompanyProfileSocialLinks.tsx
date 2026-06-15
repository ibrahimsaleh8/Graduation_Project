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
  const hasSocialLinks =
    socialLinks.facebook ||
    socialLinks.instagram ||
    socialLinks.linkedin ||
    socialLinks.twitter;

  return (
    <div className="w-full xl:max-w-100 bg-white p-5 rounded-2xl border border-border-color">
      <p className="font-medium pb-2 border-b">Social Links</p>

      {!hasSocialLinks && (
        <Link
          href="/dashboard/company/setting"
          className="text-sm text-black/70 font-medium w-full flex items-center gap-1 mt-4 hover:underline">
          <HugeiconsIcon icon={Share01Icon} className="size-5" />
          Please Add Company Social Links in Settings
        </Link>
      )}

      <ul className="space-y-6 mt-4">
        {socialLinks.facebook && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <FaFacebook className="size-5 text-black/70" />
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline">
              Facebook
            </a>
          </li>
        )}

        {socialLinks.linkedin && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <FaLinkedin className="size-5 text-black/70" />
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline">
              LinkedIn
            </a>
          </li>
        )}

        {socialLinks.instagram && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <FaInstagram className="size-5 text-black/70" />
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline">
              Instagram
            </a>
          </li>
        )}

        {socialLinks.twitter && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <BsTwitterX className="size-5 text-black/70" />
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline">
              Twitter (X)
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
