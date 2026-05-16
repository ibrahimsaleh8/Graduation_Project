"use client";
import { useGSAP } from "@gsap/react";
import CategoryCard from "./CategoryCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

import uiuxImage from "@images/Categories_illustrations/ui_ux.svg";
import webDevImage from "@images/Categories_illustrations/web_dev.svg";
import mobileDevImage from "@images/Categories_illustrations/mobile_dev.svg";
import dataAnalyticsImage from "@images/Categories_illustrations/Data_ Analytics.svg";
import backendDevImage from "@images/Categories_illustrations/backend_dev.svg";
import digitalMarketingImage from "@images/Categories_illustrations/Marketing.svg";
import moreCatsImage from "@images/Categories_illustrations/more_categories.svg";

import { useRef } from "react";
import FirstCategoryCard from "./FirstCategoryCard";
const categories = [
  {
    title: "UI / UX Design",
    description:
      "Design user interfaces and create engaging digital experiences.",
    image: uiuxImage,
    isLast: false,
  },
  {
    title: "Web Development",
    description:
      "Build modern websites and web applications using latest technologies.",
    image: webDevImage,
    isLast: false,
  },
  {
    title: "Mobile Development",
    description:
      "Create powerful mobile applications for iOS and Android platforms.",
    image: mobileDevImage,
    isLast: false,
  },
  {
    title: "Data & Analytics",
    description:
      "Analyze data to uncover insights and support business decisions.",
    image: dataAnalyticsImage,
    isLast: false,
  },
  {
    title: "Backend Development",
    description: "Develop scalable APIs, servers, and cloud-based systems.",
    image: backendDevImage,
    isLast: false,
  },
  {
    title: "Digital Marketing",
    description: "Grow brands using SEO, social media, and digital campaigns.",
    image: digitalMarketingImage,
    isLast: false,
  },
  {
    title: "More Categories",
    description: "25+ more job fields",
    image: moreCatsImage,
    isLast: true,
  },
];

export default function ShowAllJobsCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".category-card");

      const horizontalScroll = gsap.to(cards, {
        xPercent: -100 * categories.length,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${(categories.length + 1) * 1000}px`,
        },
      });

      cards.forEach((e, i) => {
        const elements = e.querySelectorAll("h2,p,img,a");

        if (i != 0) {
          gsap.from(elements, {
            y: 100,
            stagger: 0.1,
            opacity: 0,
            scrollTrigger: {
              trigger: e,
              start: "top center",
              containerAnimation: horizontalScroll,
            },
          });
        }
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section className={`w-full overflow-hidden`}>
      <div
        ref={sectionRef}
        className="min-w-fit w-full flex h-screen flex-nowrap">
        <FirstCategoryCard />
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            image={category.image}
            title={category.title}
            description={category.description}
            isLast={category.isLast}
          />
        ))}
      </div>
    </section>
  );
}
