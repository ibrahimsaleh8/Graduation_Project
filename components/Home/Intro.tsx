"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useEffectEvent, useRef, useState } from "react";

gsap.registerPlugin(SplitText);

export default function Intro() {
  const mainLoader = useRef(null);
  const loader = useRef(null);
  const [isFirst, setIsFirst] = useState(true);
  const UpdateIsFirst = useEffectEvent((value: boolean) => {
    setIsFirst(value);
  });

  useEffect(() => {
    const isExist = sessionStorage.getItem("showIntro");
    if (isExist) {
      UpdateIsFirst(false);
    } else {
      sessionStorage.setItem("showIntro", "true");
    }
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      const headingTexts = SplitText.create(".jobify-heading p", {
        type: "chars",
      });

      tl.to(".jobify-heading p", {
        opacity: 1,
        duration: 0.1,
      });

      tl.from(headingTexts.chars, {
        y: 100,
        opacity: 0,
        stagger: isFirst ? 0.06 : 0.03,
        duration: isFirst ? 0.8 : 0.4,
        ease: "power3.out",
      });
      tl.to(headingTexts.chars, {
        y: -100,
        opacity: 0,
        stagger: 0.06,
        duration: isFirst ? 0.8 : 0.4,
        ease: "power3.out",
        delay: 0.4,
      });

      if (loader.current) {
        tl.to(
          loader.current,
          {
            width: "100%",
            duration: isFirst ? 2 : 1.5,
            ease: "none",
          },
          0,
        );
      }

      tl.to(mainLoader.current, {
        delay: isFirst ? 0.1 : 0.05,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "cubic-bezier(0.87, 0, 0.13, 1)",
      });

      tl.to(mainLoader.current, {
        opacity: 0,
        duration: isFirst ? 0.8 : 0.4,
        pointerEvents: "none",
        display: "none",
      });
    },
    {
      dependencies: [isFirst],
      scope: mainLoader,
    },
  );

  return (
    <div
      ref={mainLoader}
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
      id="main-loader"
      className="font-bold h-screen w-screen fixed left-0 top-0 bg-linear-to-b from-[#E2F0FF]  to-[#FFFFFF] lg:text-8xl md:text-5xl text-2xl flex items-center justify-center z-99999 flex-col">
      <div className="jobify-heading overflow-hidden">
        <p className="opacity-0">Jobify</p>
      </div>
      {isFirst && (
        <div
          ref={loader}
          className="absolute left-0 top-0 w-0 h-5 bg-black"></div>
      )}
    </div>
  );
}
