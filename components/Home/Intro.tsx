"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function Intro() {
  const loader = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    const headingTexts = SplitText.create(".jobify-heading p", {
      type: "chars",
    });

    tl.to(".jobify-heading p", {
      opacity: 1,
      duration: 0.2,
    });

    tl.from(headingTexts.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: "power3.out",
    });
    tl.to(headingTexts.chars, {
      y: -100,
      opacity: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4,
    });

    tl.to(
      loader.current,
      {
        width: "100%",
        duration: 2,
        ease: "none",
      },
      0,
    );

    tl.to("#main-loader", {
      delay: 0.1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "sine.inOut",
    });
    tl.to("#main-loader", {
      opacity: 0,
      duration: 0.8,
      pointerEvents: "none",
      display: "none",
    });
  });

  return (
    <div
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
      id="main-loader"
      className="font-bold h-screen w-screen fixed left-0 top-0 bg-linear-to-b from-[#E2F0FF]  to-[#FFFFFF] lg:text-8xl md:text-5xl text-2xl flex items-center justify-center z-99999 flex-col">
      <div className="jobify-heading overflow-hidden">
        <p className="opacity-0">Jobify</p>
      </div>

      <div
        ref={loader}
        className="absolute left-0 bottom-0 w-0 h-10 bg-black"></div>
    </div>
  );
}
