"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollSmoother);

export default function SmoothScrolling({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: false,
    });
  });
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="pt-20">
        {children}
      </div>
    </div>
  );
}
