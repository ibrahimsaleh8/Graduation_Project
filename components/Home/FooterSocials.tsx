import { ProjectSettingsResponse } from "@/app/(Dashboard)/dashboard/admin/setting/_components/ShowAdminSettings";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

type Props = {
  socials: ProjectSettingsResponse;
};

export default function FooterSocials({ socials }: Props) {
  const socialCards = [
    {
      title: "Facebook",
      link: socials.facebookUrl,
      icon: FaFacebookF,
    },
    {
      title: "Youtube",
      link: socials.youtubeUrl,
      icon: FaYoutube,
    },
    {
      title: "Linkedin",
      link: socials.linkedInUrl,
      icon: FaLinkedinIn,
    },
    {
      title: "Instagram",
      link: socials.instagramUrl,
      icon: FaInstagram,
    },
    {
      title: "Twitter",
      link: socials.twitterUrl,
      icon: FaTwitter,
    },
  ].filter((social) => social.link);

  return (
    <div className="flex items-center flex-wrap gap-4 pt-8">
      {socialCards.map((social, index) => {
        const Icon = social.icon;

        return (
          <a
            aria-label={social.title}
            key={social.title}
            href={social.link!}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3">
            <div
              className={`sm:size-13 size-10 flex items-center justify-center rounded-full duration-300 ${
                index === 2
                  ? "hover:text-white hover:bg-[#373737] bg-white text-[#373737]"
                  : "text-white bg-[#373737] hover:bg-white hover:text-[#373737]"
              }`}>
              <Icon className="sm:size-6 size-4" />
            </div>
          </a>
        );
      })}
    </div>
  );
}
