"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import webDevImage from "@images/Categories_illustrations/web_dev.svg";
import dataAnalyticsImage from "@images/Categories_illustrations/Data_ Analytics.svg";
import digitalMarketingImage from "@images/Categories_illustrations/Marketing.svg";
import moreCatsImage from "@images/Categories_illustrations/more_categories.svg";
import CatCard from "./CatCard";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Software Development",
    description:
      "Build modern websites and mobile applications using latest technologies.",
    image: webDevImage,
  },

  {
    title: "Data & Analytics",
    description:
      "Analyze data to uncover insights and support business decisions.",
    image: dataAnalyticsImage,
  },

  {
    title: "Digital Marketing",
    description: "Grow brands using SEO, social media, and digital campaigns.",
    image: digitalMarketingImage,
  },
  {
    title: "More Categories",
    description: "25+ more job fields",
    image: moreCatsImage,
  },
];

export default function ShowJobsCats() {
  const container = useRef(null);
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>(".card");
    const txtTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
    txtTl.from(".main-job-cat-header", {
      y: 100,
    });
    txtTl.from(".job-cat-desc", {
      y: 100,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: `+=${cards.length * 900}px`,
        pin: true,
        scrub: 1,
      },
    });

    cards.forEach((card, i) => {
      if (i != 0) {
        tl.fromTo(
          card,
          {
            y: window.innerHeight,
          },
          {
            y: 0,
            duration: 2,
          },
        );
      }
    });
  });
  return (
    <div
      ref={container}
      className="w-full min-h-screen py-32 md:px-10 px-3 flex items-start gap-10 flex-col lg:flex-row">
      {/* Left */}
      <div className="w-full max-w-3xl space-y-2 text-center md:text-left">
        <div className="overflow-y-hidden">
          <p className="main-job-cat-header md:text-5xl text-3xl font-semibold">
            Jobs Categories
          </p>
        </div>
        <div className="overflow-y-hidden">
          <p className="job-cat-desc lg:max-w-lg text-black/70">
            Discover thousands of career opportunities across different
            industries and professional fields.
          </p>
        </div>
      </div>
      {/* Right */}
      <div className="w-full h-full relative">
        {categories.map((cat) => (
          <CatCard key={cat.title} {...cat} />
        ))}
      </div>
    </div>
  );
}
