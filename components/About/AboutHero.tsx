"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Beams from "@/components/ui/Beams";
import ArrowLink from "@/components/Home/ArrowLink";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".about-badge", {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    tl.to(
      ".about-hero-title span",
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.9,
        ease: "power1.inOut",
      },
      "<=50%"
    );

    tl.to(
      ".about-hero-desc",
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut",
      },
      "<=70%"
    );

    tl.to(
      ".about-hero-link",
      {
        scale: 1,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<=60%"
    );
  });

  return (
    <div className="w-full relative overflow-hidden bg-[radial-gradient(circle_at_35%_20%,rgba(0,0,255,0.22),transparent_16%),radial-gradient(circle_at_50%_45%,rgba(0,0,255,0.25),transparent_18%),radial-gradient(circle_at_65%_90%,rgba(0,0,255,0.2),transparent_14%),linear-gradient(120deg,transparent_18%,rgba(0,0,255,0.08)_32%,transparent_48%),linear-gradient(120deg,transparent_42%,rgba(0,0,255,0.07)_55%,transparent_70%),linear-gradient(to_bottom,#000,#000)] text-white flex flex-col items-center justify-center min-h-[80vh] px-4 py-32 rounded-b-2xl">
      {/* Beam Background */}
      <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
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
      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="about-badge scale-0 opacity-0 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium text-white/80 flex items-center gap-2">
          <span className="size-2 rounded-full bg-main-color inline-block animate-pulse" />
          About Jobify
        </div>

        {/* Title */}
        <h1 className="about-hero-title xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-medium leading-[1.1] overflow-hidden">
          <span className="block translate-y-20 opacity-0">Connecting Talent</span>
          <span className="block translate-y-20 opacity-0 text-main-color">
            With Opportunity
          </span>
        </h1>

        {/* Description */}
        <p className="about-hero-desc translate-y-10 opacity-0 text-white/70 max-w-xl text-lg leading-relaxed">
          We're on a mission to make career growth accessible for everyone.
          Discover the story behind Jobify and the passionate team driving it
          forward.
        </p>

        {/* CTA */}
        <div className="about-hero-link scale-0">
          <ArrowLink label="Browse Jobs" link="/jobs" />
        </div>
      </div>
    </div>
  );
}
