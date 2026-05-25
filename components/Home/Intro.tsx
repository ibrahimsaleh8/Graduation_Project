"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useEffectEvent, useRef, useState } from "react";

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
      tl.to(".jobify-heading p", {
        opacity: 100,
        y: 0,
        duration: isFirst ? 0.8 : 0.5,
        ease: "power4.inOut",
      });

      tl.to(".intro-phrase p", {
        opacity: 100,
        x: 0,
        duration: isFirst ? 0.8 : 0.4,
        ease: "power4.inOut",
      });

      tl.to(
        ".jobify-heading",
        {
          overflow: "visible",
        },
        "<=0",
      );
      tl.to(loader.current, {
        width: "100%",
        duration: isFirst ? 0.8 : 0.4,
        ease: "power1.inOut",
      });
      // tl.to(loader.current, {
      //   delay: 0.4,
      //   height: "100%",
      //   duration: 0.8,
      //   ease: "power1.inOut",
      // });
      tl.to(".jobify-heading p", {
        delay: 0.4,
        scale: 1000,
        force3D: true,
        transformOrigin: "center center",
        willChange: "transform",
        duration: 0.5,
        ease: "power4.inOut",
      });
      tl.to(
        ".intro-phrase",
        {
          opacity: 0,
        },
        "<=0",
      );

      tl.to(mainLoader.current, {
        delay: 0.5,
        opacity: 0,
        pointerEvents: "none",
      });
      tl.to(mainLoader.current, {
        delay: 0.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "cubic-bezier(0.87, 0, 0.13, 1)",
      });

      tl.to(mainLoader.current, {
        duration: isFirst ? 0.8 : 0.4,
        display: "none",
      });
    },
    {
      dependencies: [isFirst],
      scope: mainLoader,
      revertOnUpdate: true,
    },
  );

  return (
    <div
      ref={mainLoader}
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
      id="main-loader"
      className="font-bold h-screen w-screen fixed left-0 top-0 bg-white bg-linear-to-b from-[#E2F0FF] to-[#FFFFFF] lg:text-9xl text-6xl flex items-center justify-center z-99999 flex-col text-black">
      <div className="relative text-center">
        <div className="jobify-heading overflow-hidden">
          <p className="opacity-0 translate-y-full">Jobify</p>
        </div>
        <div className="overflow-x-hidden intro-phrase w-fit mx-auto">
          <p className="md:text-xl text-sm mt-3 opacity-0 translate-x-full">
            Find Your Dream Career
          </p>
          <div ref={loader} className="h-px bg-main-dark w-0"></div>
        </div>
      </div>
    </div>
  );
}
