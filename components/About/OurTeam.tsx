"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Ibrahim Saleh",
    role: "Co-founder & CEO",
    initials: "IS",
    color: "bg-blue-600",
    bio: "Passionate about connecting great talent with the right opportunities.",
  },
  {
    name: "Sara Ahmed",
    role: "Head of Product",
    initials: "SA",
    color: "bg-purple-600",
    bio: "Driven to create seamless experiences that empower every job seeker.",
  },
  {
    name: "Omar Hassan",
    role: "Lead Engineer",
    initials: "OH",
    color: "bg-emerald-600",
    bio: "Building the technology infrastructure that makes Jobify fast and reliable.",
  },
  {
    name: "Layla Mohamed",
    role: "Head of Partnerships",
    initials: "LM",
    color: "bg-orange-600",
    bio: "Cultivating relationships with top employers to bring you the best roles.",
  },
];

export default function OurTeam() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".team-header",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".team-card",
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div
      ref={container}
      className="py-32 w-full px-4 bg-white"
    >
      <div className="container mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="team-header opacity-0 flex flex-col gap-4 items-center text-center">
          <span className="text-main-color font-semibold text-sm uppercase tracking-widest">
            Meet The Team
          </span>
          <h2 className="text-4xl md:text-6xl font-medium leading-[1.15] max-w-2xl">
            The people behind Jobify
          </h2>
          <p className="text-black/50 max-w-lg text-lg">
            A passionate team on a mission to reimagine the future of work.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="team-card opacity-0 flex flex-col gap-4 p-6 rounded-2xl bg-card-bg border border-border-color hover:border-main-color/30 hover:shadow-xl hover:shadow-main-color/5 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div
                className={`${member.color} size-14 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {member.initials}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-main-dark text-lg">
                  {member.name}
                </h3>
                <span className="text-main-color text-sm font-medium">
                  {member.role}
                </span>
              </div>

              {/* Bio */}
              <p className="text-black/50 text-sm leading-relaxed">{member.bio}</p>

              {/* Divider accent */}
              <div className="w-12 h-0.5 bg-main-color/30 group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
