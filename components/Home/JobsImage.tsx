import Image from "next/image";
import heroImage from "@images/landing-page-images/hero-image.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function JobsImage() {
  const container = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "center center",
      end: "+=100px",
      pin: true,
      scrub: true,
    });
  });

  return (
    <div
      ref={container}
      className="w-full flex items-center justify-center hero-image opacity-0">
      <div
        ref={imageContainer}
        className="md:w-[50%] w-[90%] h-fit rounded-2xl mx-auto bg-main-dark overflow-hidden relative">
        <div className="w-full p-3 px-4 flex items-center bg-[#1B1818]">
          <div className="flex items-center gap-1">
            <span className="flex size-3 rounded-full bg-[#FB2C36]"></span>
            <span className="flex size-3 rounded-full bg-[#F0B100]"></span>
            <span className="flex size-3 rounded-full bg-[#00C951]"></span>
          </div>

          <div className="bg-[#141010] px-2 py-1 text-sm rounded-md mx-auto hidden md:flex">
            https://www.jobify.com
          </div>
        </div>
        <Image
          src={heroImage}
          alt="Hero image"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
