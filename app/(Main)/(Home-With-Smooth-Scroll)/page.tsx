"use client";

import HeroSectionWithBg from "@/components/Home/HeroSectionWithBg";
import Companies from "@/components/Home/Companies";
import WhoWeAre from "@/components/Home/WhoWeAre";
import StartCareerToday from "@/components/Home/StartCareerToday";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import HowItWorkSection from "@/components/Home/How-it-work/HowItWorkSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container-wraper",
        start: "top top",
        scrub: true,
        end: "+=500px",
      },
    });
    tl.to(container.current, {
      clipPath: "inset(0px 0px 0px round 0px)",
    });
  });

  return (
    <div
      id="container-wraper"
      className="w-full flex items-center flex-col overflow-x-hidden">
      <div
        ref={container}
        className="[clip-path:inset(5px_10px_36px_round_24px)] lg:[clip-path:inset(5px_80px_36px_round_24px)] xl:[clip-path:inset(5px_200px_34px_round_24px)] overflow-x-hidden w-full bg-[radial-gradient(circle_at_35%_20%,rgba(0,0,255,0.22),transparent_16%),radial-gradient(circle_at_50%_45%,rgba(0,0,255,0.25),transparent_18%),radial-gradient(circle_at_65%_90%,rgba(0,0,255,0.2),transparent_14%),linear-gradient(120deg,transparent_18%,rgba(0,0,255,0.08)_32%,transparent_48%),linear-gradient(120deg,transparent_42%,rgba(0,0,255,0.07)_55%,transparent_70%),linear-gradient(to_bottom,#000,#000)] text-white relative flex flex-col items-center gap-10 rounded-b-2xl">
        <HeroSectionWithBg />
      </div>
      <Companies />
      <WhoWeAre />
      <HowItWorkSection />
      <StartCareerToday />
    </div>
  );
}
