"use client";

import Footer from "@/components/Home/Footer";
import Header from "@/components/main-layout/Header";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });
  return (
    <div id="smooth-wrapper" className="">
      <Header />

      <div id="smooth-content" className="pb-19 min-h-screen">
        {children}
        <Footer />
      </div>
    </div>
  );
}
