"use client";

import ArrowLink from "./ArrowLink";
import JobsImage from "./JobsImage";
import JobsCategories from "./JobsCategories";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarsRates from "./StarsRates";
import Beams from "../ui/Beams";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSectionWithBg() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".hero-header p", {
      y: 0,
      stagger: 0.4,
      duration: 1,
      ease: "power1.inOut",
    });

    tl.to(
      ".hero-desc",
      {
        y: 0,
        stagger: 0.4,
        ease: "power1.inOut",
      },
      "<=80%",
    );
    tl.to(
      ".hero-link",
      {
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "0",
    );
    tl.to(
      ".rating-stars",
      {
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "0",
    );
    tl.to(
      ".hero-image",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "0",
    );
  });

  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        <Beams
          beamWidth={2}
          beamHeight={20}
          beamNumber={20}
          lightColor="#2c41ff"
          speed={5}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 relative py-20">
        <div className="scale-0 rating-stars">
          <StarsRates />
        </div>

        <div className="xl:text-6xl lg:text-5xl text-3xl font-medium text-center hero-header">
          <div className="overflow-hidden">
            <p className="translate-y-40">Find Your Dream Job,</p>
          </div>
          <div className="overflow-hidden">
            <p className="translate-y-40">Build Your Future</p>
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="capitalize xl:text-lg text-sm max-w-50 md:max-w-full text-center font-medium hero-desc translate-y-40">
            discover your next career move with confifence and ease
          </p>
        </div>

        <div className="hero-link scale-0">
          <ArrowLink label="Search for jobs" link="/jobs" />
        </div>
      </div>
      {/* Jobs Image */}
      <JobsImage />

      {/* Job Categories */}
      <JobsCategories />
    </>
  );
}
