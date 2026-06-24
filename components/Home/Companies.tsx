import Image from "next/image";
import { Marquee } from "../ui/marquee";
import company1 from "@images/landing-page-images/Logos/bolt-new.svg";
import company2 from "@images/landing-page-images/Logos/cisco_light.svg";
import company3 from "@images/landing-page-images/Logos/reflex-dark.svg";
import company4 from "@images/landing-page-images/Logos/uber_light.svg";
import company5 from "@images/landing-page-images/Logos/webgl.svg";

const logos = [company1, company2, company3, company4, company5];

export default function Companies() {
  return (
    <div className="w-full flex items-center flex-col gap-3 hero-content py-10">
      <p className="text-black">Trusted By</p>

      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo, i) => (
          <div key={i} className="h-17 w-36 flex items-center justify-center">
            <Image
              src={logo}
              alt="Company Logo"
              width={140}
              height={60}
              className="h-auto w-auto max-h-10 object-contain grayscale"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
