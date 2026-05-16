"use client";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import howitWorkImage from "@images/Technical_Collaboration.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const howItWork = [
  {
    label: "Create Your Profile",
    desc: "Sign Up And Build Your Professional Profile To Showcase Your Skills And Experience.",
  },
  {
    label: "Search & Apply",
    desc: "Browse Jobs Based On Your Interests, Location, And Expertise—Apply In Just One Click.",
  },
  {
    label: "Get Hired",
    desc: "Connect With Employers, Attend Interviews, And Land Your Ideal Job.",
  },
];
export default function NewHowItWork() {
  const container = useRef(null);

  useGSAP(
    () => {
      const defaultScrollTrigger = {
        trigger: container.current,
        start: "top 80%",
        end: "top 30%",
      };

      gsap.from(".how-it-work-header p", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: defaultScrollTrigger,
      });

      gsap.from(".how-it-work-desc-p", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: defaultScrollTrigger,
      });

      gsap.from(".how-it-work-desc-a", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: defaultScrollTrigger,
      });

      gsap.from(".how-it-work-main-header p", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: defaultScrollTrigger,
      });

      const cards = gsap.utils.toArray(".how-it-work-card");

      gsap.from(cards, {
        x: -100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: defaultScrollTrigger,
      });

      gsap.from(".how-it-work-image", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power1.inOut",
        scrollTrigger: defaultScrollTrigger,
      });
    },
    { scope: container },
  );
  return (
    <div ref={container} className="w-full py-32 pt-50 md:px-10 px-3 space-y-5">
      {/* top */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Header */}
        <div className="md:text-6xl text-3xl font-medium w-full overflow-y-hidden how-it-work-header">
          <p>Your Future Starts</p>
          <p>With Right Opportunity</p>
        </div>

        {/* Desc */}
        <div className="space-y-8 w-full overflow-y-hidden">
          <div className="overflow-y-hidden how-it-work-desc-p">
            <p className="text-black/70 md:text-lg text-sm">
              Finding Your Dream Job {"Shouldn't"} Be Complicated. {"That's"}{" "}
              Why Our Platform Is Designed To Make Your Job Search Simple, Fast,
              and Effective. Explore thousands of opportunities, connect with
              top employers, and take the next step toward your ideal career
              with confidence.
            </p>
          </div>
          <div className="how-it-work-desc-a overflow-y-hidden">
            <Link
              className="px-10 py-5 bg-main-color  text-white rounded-4xl flex items-center gap-1 w-fit hover:bg-main-color/70 duration-300"
              href={"/login"}>
              Get Started
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="size-5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10">
        {/* How it Works */}
        <div className="space-y-5 w-full">
          <div className="overflow-y-hidden how-it-work-main-header">
            <p className="pl-3 text-2xl font-medium">How it Works</p>
          </div>
          {/* Cards */}
          <div className="space-y-3 overflow-x-hidden">
            {howItWork.map((work, i) => (
              <div
                key={work.label}
                className="md:p-8 p-4 flex items-start border-2 gap-5 rounded-2xl how-it-work-card">
                <div className="size-10 md:text-lg text-base flex items-center justify-center rounded-full bg-sky-50">
                  {i + 1}
                </div>

                <div className="space-y-2 flex-1">
                  <p className="text-xl font-medium">{work.label}</p>
                  <p className="text-black/70">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          className="w-full bg-input-bg rounded-2xl how-it-work-image overflow-hidden h-130">
          <Image
            src={howitWorkImage}
            alt="howit Work Image"
            className="w-full object-top h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
