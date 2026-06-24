import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    title: "Facebook",
    link: "#",
    icon: FaFacebookF,
  },
  {
    title: "Youtube",
    link: "#",
    icon: FaYoutube,
  },
  {
    title: "Linkedin",
    link: "#",
    icon: FaLinkedinIn,
  },
  {
    title: "Instagram",
    link: "#",
    icon: FaInstagram,
  },
];
export default function FooterSocials() {
  return (
    <div className="flex items-center flex-wrap gap-4 pt-8">
      {socials.map((social, index) => {
        const Icon = social.icon;

        return (
          <a
            aria-label={social.title}
            key={social.title}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3">
            <div
              className={`sm:size-13 size-10 flex items-center justify-center rounded-full duration-300 ${index == 2 ? "hover:text-white hover:bg-[#373737] bg-white text-[#373737]" : "text-white bg-[#373737] hover:bg-white hover:text-[#373737]"}`}>
              <Icon className="sm:size-6 size-4" />
            </div>
          </a>
        );
      })}
    </div>
  );
}
