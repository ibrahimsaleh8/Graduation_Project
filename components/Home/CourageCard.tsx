"use client";
import {
  ArrowUpRight01Icon,
  Search01Icon,
  UserAdd02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import courageImage from "@images/courageImage.png";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CourageCard() {
  const container = useRef(null);

  useGSAP(() => {
    const defaultScrollTrigger = {
      trigger: container.current,
      start: "top 80%",
      end: "top 30%",
    };
    gsap.from(".start-career-header", {
      y: 100,
      ease: "power3.out",
      duration: 0.8,
      scrollTrigger: defaultScrollTrigger,
    });
    gsap.from(".start-career-desc", {
      y: 100,
      ease: "power3.out",
      duration: 0.8,
      scrollTrigger: defaultScrollTrigger,
    });
    gsap.from(".career-journy-links a", {
      opacity: 0,
      ease: "power3.out",
      duration: 0.8,
      scrollTrigger: defaultScrollTrigger,
    });
    gsap.from(".courage-social a", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: defaultScrollTrigger,
    });
  });

  return (
    <div ref={container} className="w-full xl:px-10 md:px-3 px-1">
      <div className="w-full lg:h-150 bg-main-dark rounded-2xl flex flex-col lg:flex-row items-stretch overflow-hidden">
        <div className="w-full">
          <Image
            src={courageImage}
            alt="Courage image"
            className="w-full object-cover object-center h-full rounded-tr-2xl rounded-br-2xl"
          />
        </div>

        <div className="w-full md:px-10 p-5 md:py-16 py-10 text-white flex flex-col md:gap-6 gap-2 items-center text-center lg:items-start lg:text-left">
          <div className="overflow-y-hidden">
            <p className="md:text-4xl text-2xl font-medium start-career-header">
              Start Your Career Journey Today
            </p>
          </div>

          <div className="overflow-y-hidden">
            <p className="md:text-lg max-w-3xl start-career-desc">
              Whether {"you're"} searching for your next role or hiring top
              talent, Jobify makes the process simple, fast, and reliable for
              everyone.
            </p>
          </div>

          <div className="flex career-journy-links items-center md:flex-row flex-col md:gap-6 gap-3 justify-center lg:justify-start md:mt-10 mt-5">
            <Link
              className="xl:px-14 px-10 py-5 bg-main-color text-white rounded-4xl flex items-center gap-3 w-fit hover:bg-main-color/70 duration-300"
              href={"/jobs"}>
              <HugeiconsIcon
                icon={Search01Icon}
                className="size-5"
                strokeWidth={2}
              />
              Find Jobs
            </Link>
            <Link
              className="xl:px-14 px-10 py-5 bg-white text-black rounded-4xl flex items-center gap-3 w-fit hover:bg-white/70 duration-300"
              href={"/register"}>
              <HugeiconsIcon
                icon={UserAdd02Icon}
                className="size-5"
                strokeWidth={2}
              />
              Join Us
            </Link>
          </div>

          <div className="courage-social lg:mt-auto mt-10 flex items-center justify-center lg:justify-start gap-4 flex-wrap w-full text-xl">
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-1 underline">
              Facebook
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="size-5"
                strokeWidth={2}
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-1 underline">
              Twitter
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="size-5"
                strokeWidth={2}
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-1 underline">
              Instagram
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="size-5"
                strokeWidth={2}
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-1 underline">
              Linkedin
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="size-5"
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
