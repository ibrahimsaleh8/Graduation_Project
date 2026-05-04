"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Intro() {
  useGSAP(() => {
    gsap.set("#top", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
    gsap.set("#bottom", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
    gsap.set("#loader", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
    gsap.set(".main-jobify-header", {
      visibility: "visible",
    });
    gsap.set(".second-jobify-header", {
      visibility: "visible",
    });

    const tl = gsap.timeline();

    tl.fromTo(
      "#loader",
      {
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1,
        ease: "expo.inOut",
      },
    );

    tl.from(".main-jobify-header", {
      visibility: "visible",
      yPercent: 100,
      duration: 1,
      ease: "expo.inOut",
    });

    tl.from(
      ".second-jobify-header",
      {
        visibility: "visible",
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut",
      },
      "<",
    );

    // Top & Bottom Animation
    tl.to("#top", {
      delay: 0.8,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power2.inOut",
      duration: 1,
    });
    tl.to(
      "#bottom",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
        duration: 1,
      },
      "<",
    );
    // tl.to("#loader", {
    //   height: "100%",
    //   duration: 1,
    //   ease: "power2.inOut",
    // });

    tl.to(
      "#loader",
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      },
      "<",
    );
    tl.to(
      "#mian-loader",
      {
        backgroundColor: "transparent",
      },
      "<",
    );
    tl.to("#mian-loader", {
      opacity: 0,
      display: "none",
    });
  });

  return (
    <div
      id="mian-loader"
      className={`font-bold h-screen w-screen fixed left-0 top-0 bg-white lg:text-7xl md:text-5xl text-2xl z-100000`}>
      <div
        id="top"
        className="w-full h-1/2 bg-linear-to-b from-[#DCECF9] via-[#eef8ff] to-[#f9fafb] flex flex-col items-center justify-end">
        <div className="pt-3 flex justify-end items-end overflow-hidden mb-3">
          <p className="main-jobify-header mt-auto invisible">Jobify</p>
        </div>
      </div>

      <div
        style={{
          transformOrigin: "center center",
        }}
        id="loader"
        className="w-0 h-1 bg-blue-500 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
      <div
        id="bottom"
        className="w-full h-1/2 bg-linear-to-b from-[#f9fbfd] via-[#eef8ff] to-[#f9fafb] flex flex-col items-center justify-start
      
        
        ">
        <div className="pb-3 flex justify-end items-end overflow-hidden text-center mt-2">
          <p className="second-jobify-header mb-auto invisible">
            Your Career Starts Here
          </p>
        </div>
      </div>
    </div>
  );
}
