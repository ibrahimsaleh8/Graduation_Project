"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How do I post a job on Jobify?",
    a: "Simply create an employer account, complete your company profile, and click 'Post a Job'. Our guided form makes it easy to craft a compelling listing in under 5 minutes.",
  },
  {
    q: "Is Jobify free for job seekers?",
    a: "Yes — creating a profile, browsing jobs, and applying is completely free for all job seekers. We believe everyone deserves access to great opportunities.",
  },
  {
    q: "How long does it take to get a response?",
    a: "Our support team typically responds within 24 hours on business days. For urgent matters, we recommend reaching out via phone during business hours.",
  },
  {
    q: "Can I delete my account?",
    a: "Absolutely. You can delete your account at any time from your profile settings. We'll remove all your data permanently within 30 days of the request.",
  },
  {
    q: "Do you offer employer subscription plans?",
    a: "Yes! We offer flexible plans for businesses of all sizes — from startups posting their first role to enterprises managing large-scale recruiting. Contact us to find the right fit.",
  },
];

export default function ContactFAQ() {
  const container = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".faq-header",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      }
    );
    gsap.fromTo(
      ".faq-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
        },
      }
    );
  });

  return (
    <div ref={container} className="w-full py-32 px-4 bg-white">
      <div className="container mx-auto flex flex-col gap-14 max-w-3xl">
        {/* Header */}
        <div className="faq-header opacity-0 flex flex-col gap-4 text-center items-center">
          <span className="text-main-color font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl md:text-6xl font-medium leading-[1.15]">
            Frequently Asked
            <br />
            <span className="text-black/30">Questions</span>
          </h2>
          <p className="text-black/50 max-w-md">
            Can&apos;t find what you&apos;re looking for? Reach out directly and
            we&apos;ll get back to you fast.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-list flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item opacity-0 border border-border-color rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                id={`faq-btn-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-medium text-main-dark hover:text-main-color transition-colors duration-200 cursor-pointer"
              >
                <span>{faq.q}</span>
                <span
                  className={`text-2xl text-main-color/60 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-black/60 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
