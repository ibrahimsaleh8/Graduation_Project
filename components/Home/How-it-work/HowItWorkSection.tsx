"use client";

import { useRef } from "react";
import ApplyForJobCard from "./ApplyForJobCard";
import CompleteProfileCard from "./CompleteProfileCard";
import RegisterCard from "./RegisterCard";
import SchedualInterveiewCard from "./SchedualInterveiewCard";
import HowItWorkCard from "./HowItWorkCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const howItWork = [
  {
    title: "Sign Up",
    description: "Create your account to get started.",
    component: <RegisterCard />,
  },
  {
    title: "Complete Your Profile",
    description:
      "Add your personal details, skills, experience, and upload your resume.",
    component: <CompleteProfileCard />,
  },
  {
    title: "Apply For Jobs",
    description:
      "Browse available opportunities and submit applications to positions that match your qualifications.",
    component: <ApplyForJobCard />,
  },
  {
    title: "Schedule Interview",
    description:
      "Choose a convenient time and attend interviews with potential employers.",
    component: <SchedualInterveiewCard />,
  },
];
export default function HowItWorkSection() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.6,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      tl.to(".section-header", {
        y: -4,
        duration: 0.7,
        ease: "power3.inOut",
      });
      tl.to(
        ".section-desc",
        {
          y: 0,
          duration: 0.7,
          ease: "power3.inOut",
        },
        0.2,
      );
    },
    {
      scope: container,
    },
  );
  return (
    <div
      ref={container}
      className="py-32 bg-input-bg w-full flex flex-col items-center gap-10">
      <div className="space-y-3 text-center px-6">
        <div className="overflow-hidden">
          <p className="md:text-5xl text-3xl font-medium translate-y-30 section-header">
            How Can you find a job in jobify?
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="translate-y-30 section-desc">
            A step-by-step guide to find your dream job in our platform
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 container mx-auto gap-4">
        {howItWork.map((card, index) => (
          <HowItWorkCard {...card} key={card.title} index={index} />
        ))}
      </div>
    </div>
  );
}
