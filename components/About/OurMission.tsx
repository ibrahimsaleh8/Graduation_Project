"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Target01Icon,
  Globe02Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons";

const missionData = [
  {
    icon: Target01Icon,
    title: "Precision Matching",
    desc: "Our intelligent algorithm matches candidates with roles tailored to their skills, experience, and career aspirations — not just keywords.",
  },
  {
    icon: Globe02Icon,
    title: "Global Reach",
    desc: "Access thousands of opportunities from leading companies across industries worldwide, all in one place.",
  },
  {
    icon: Rocket01Icon,
    title: "Career Growth",
    desc: "We don't just help you find a job — we help you build a career. Resources, guidance, and tools to grow at every stage.",
  },
];
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function OurMission() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(
      ".mission-title",
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      },
    );

    // Split text reveal for paragraph
    const text = SplitText.create(textRef.current, { type: "words" });
    gsap.set(text.words, { opacity: 0.2 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        scrub: 1,
        end: "+=200px",
      },
    });
    text.words.forEach((word) => {
      tl.to(word, { opacity: 1, duration: 1 });
    });

    // Cards
    gsap.fromTo(
      ".mission-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".mission-cards",
          start: "top 85%",
        },
      },
    );
  });

  return (
    <div
      ref={container}
      className="py-32 container mx-auto flex flex-col gap-16 px-4 md:px-10">
      {/* Header */}
      <div className="flex flex-col gap-6 items-center justify-center text-center">
        <p
          ref={textRef}
          className="lg:text-5xl md:text-4xl text-3xl font-medium leading-[1.3] max-w-4xl">
          We believe great talent deserves the right opportunity. Our platform
          is built to help job seekers discover meaningful careers, connect with
          top employers, and take the next step toward their professional goals.
        </p>
      </div>

      {/* Mission Cards */}
      <div className="mission-cards grid md:grid-cols-3 gap-6">
        {missionData.map((item, i) => (
          <div
            key={i}
            className="mission-card opacity-0 p-8 rounded-2xl bg-card-bg border border-border-color hover:border-main-color/30 hover:shadow-lg hover:shadow-main-color/5 transition-all duration-300 flex flex-col gap-4 group">
            <div className="group-hover:scale-110 transition-transform duration-300 w-fit">
              <HugeiconsIcon
                icon={item.icon}
                size={40}
                className="text-main-color"
                strokeWidth={1.8}
              />
            </div>

            <h3 className="text-xl font-semibold text-main-dark">
              {item.title}
            </h3>

            <p className="text-black/60 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
