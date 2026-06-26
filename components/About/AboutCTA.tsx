"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ArrowRight02Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import googleIcon from "@images/landing-page-images/google.svg";
import amazonIcon from "@images/landing-page-images/aws_light.svg";
import notionIcon from "@images/landing-page-images/notion.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCTA() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
      },
    });

    tl.to(".cta-image", {
      y: 0,
      rotate: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    tl.to(
      ".cta-header",
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      0.3
    );

    tl.to(
      ".cta-desc",
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      0.4
    );

    tl.to(".cta-link", {
      scale: 1,
      duration: 2,
      ease: "power1.inOut",
      stagger: 1,
    });
  });

  return (
    <div
      ref={container}
      className="py-32 bg-white flex flex-col items-center gap-3 text-center relative px-3 w-full"
    >
      {/* Grid Background */}
      <div
        className="
          absolute inset-0 z-0
          bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)]
          sm:bg-size-[50px_50px] bg-size-[30px_30px]
          mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_70%)]
          [-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_70%)]
        "
      />

      {/* Floating Company Icons */}
      <div className="flex items-center gap-10 flex-wrap relative w-full p-10 justify-center overflow-hidden">
        <Image
          src={googleIcon}
          alt="google icon"
          className="sm:w-14 w-9 relative rotate-140 translate-y-60 cta-image"
        />
        <Image
          src={amazonIcon}
          alt="amazon icon"
          className="sm:w-20 w-15 relative rotate-140 translate-y-60 cta-image"
        />
        <Image
          src={notionIcon}
          alt="notion icon"
          className="sm:w-14 w-9 relative rotate-140 translate-y-60 cta-image"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-10 w-full items-center relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="overflow-hidden">
            <p className="md:text-7xl text-3xl font-medium cta-header translate-y-30 opacity-0">
              Join Jobify Today
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="text-black/80 capitalize sm:max-w-lg cta-desc translate-y-30 opacity-0">
              Create your profile and start discovering jobs that match your
              skills and career goals — it's completely free.
            </p>
          </div>
        </div>

        <div className="flex items-center sm:gap-6 gap-3 flex-col sm:flex-row">
          <Link
            className="px-10 py-4 scale-0 cta-link bg-main-dark border border-main-dark text-white rounded-2xl flex items-center gap-2 hover:bg-main-dark/80 duration-300"
            href={"/register"}
          >
            Create Profile{" "}
            <HugeiconsIcon icon={ArrowRight02Icon} className="size-5" strokeWidth={2} />
          </Link>
          <Link
            className="px-10 py-4 border scale-0 cta-link bg-input-bg text-black rounded-2xl flex items-center gap-2 hover:bg-input-bg/80 duration-300"
            href={"/jobs"}
          >
            Browse Jobs
            <HugeiconsIcon icon={Search01Icon} className="size-5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
