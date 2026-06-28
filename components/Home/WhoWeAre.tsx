"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sectionImage from "@images/Logo.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function WhoWeAre() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const text = SplitText.create(textRef.current, {
      type: "words",
    });
    gsap.set(text.words, {
      opacity: 0.3,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        scrub: 1,
        end: "-=100px",
      },
    });
    text.words.forEach((word) => {
      tl.to(word, {
        opacity: 1,
        duration: 1,
      });
    });
  });
  return (
    <div
      ref={container}
      className="py-32 flex flex-col container mx-auto items-start gap-10 relative px-4 md:px-10">
      <div className="flex font-bold items-center gap-2 text-black md:text-6xl text-5xl mx-auto">
        <Image
          src={sectionImage}
          alt="section Image"
          width={1000}
          height={100}
          className="md:w-14 w-10"
        />
        <p>Jobify</p>
      </div>
      <div className="w-full flex flex-col items-center gap-20">
        <p
          ref={textRef}
          className="lg:text-5xl md:text-4xl text-3xl text-center font-medium leading-[1.3]">
          We believe great talent deserves the right opportunity. Our platform
          is built to help job seekers discover meaningful careers, connect with
          top employers, and take the next step toward their professional goals.
        </p>
      </div>
    </div>
  );
}
