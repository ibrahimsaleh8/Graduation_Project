"use client";

import { useGSAP } from "@gsap/react";
import {
  Mail01Icon,
  Call02Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const infoItems = [
  {
    icon: Mail01Icon,
    title: "Email Us",
    value: "support@jobify.com",
    sub: "We reply within 24 hours",
    href: "mailto:support@jobify.com",
  },
  {
    icon: Call02Icon,
    title: "Call Us",
    value: "+1 (800) 123-4567",
    sub: "Mon – Fri, 9am – 6pm",
    href: "tel:+18001234567",
  },
  {
    icon: Location01Icon,
    title: "Our Office",
    value: "Cairo, Egypt",
    sub: "Visit us anytime",
    href: "#",
  },
];

export default function ContactInfo() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".info-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      },
    );
  });

  return (
    <div
      ref={container}
      className="w-full bg-white border-b border-border-color py-20 px-4">
      <div className="container mx-auto grid sm:grid-cols-3 gap-6">
        {infoItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="info-card opacity-0 flex flex-col gap-4 p-8 rounded-2xl bg-card-bg border border-border-color hover:border-main-color/40 hover:shadow-lg hover:shadow-main-color/5 transition-all duration-300 group">
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300 w-fit">
              <HugeiconsIcon
                icon={item.icon}
                className="md:size-8 size-5"
                strokeWidth={2}
              />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-black/50 text-sm font-medium">{item.title}</p>
              <p className="text-main-dark font-semibold text-lg group-hover:text-main-color transition-colors duration-300">
                {item.value}
              </p>
              <p className="text-black/40 text-sm">{item.sub}</p>
            </div>
            <div className="w-10 h-0.5 bg-main-color/30 group-hover:w-full transition-all duration-500 rounded-full" />
          </a>
        ))}
      </div>
    </div>
  );
}
