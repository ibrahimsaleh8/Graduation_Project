"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

gsap.registerPlugin(ScrollTrigger);

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const container = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  useGSAP(() => {
    gsap.fromTo(
      ".form-panel",
      { y: 50, opacity: 0 },
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
      ".form-side",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      }
    );
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1800);
  }

  return (
    <div
      ref={container}
      className="w-full py-32 px-4 bg-main-dark text-white"
    >
      <div className="container mx-auto flex lg:flex-row flex-col gap-16 items-start">
        {/* Left Side Info */}
        <div className="form-side opacity-0 flex flex-col gap-8 lg:max-w-sm w-full">
          <div className="flex flex-col gap-3">
            <span className="text-main-color font-semibold text-sm uppercase tracking-widest">
              Send a Message
            </span>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.15]">
              Let&apos;s start a
              <br />
              <span className="text-white/40">conversation</span>
            </h2>
          </div>

          <p className="text-white/60 leading-relaxed">
            Whether you&apos;re a job seeker looking for help, an employer wanting
            to post roles, or just curious about Jobify — we&apos;re always happy
            to hear from you.
          </p>

          {/* Response time badge */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 w-fit">
            <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white/70 font-medium">
              Average response time: &lt; 24h
            </span>
          </div>

          {/* Topic chips */}
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
              Popular Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Job Listings",
                "Account Help",
                "Employer Plans",
                "Partnerships",
                "Feedback",
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="form-panel opacity-0 flex-1 w-full">
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-6 text-center py-24 px-8 rounded-2xl border border-white/10 bg-white/5">
              <span className="text-6xl">🎉</span>
              <h3 className="text-3xl font-semibold">Message Sent!</h3>
              <p className="text-white/60 max-w-sm">
                Thanks for reaching out. Our team will get back to you within
                24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-8 py-3 bg-main-color text-white rounded-xl hover:bg-main-color/80 duration-300 font-medium"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm text-white/60 font-medium"
                  >
                    Full Name <span className="text-main-color">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-main-color/60 transition-colors duration-200 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm text-white/60 font-medium"
                  >
                    Email Address <span className="text-main-color">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-main-color/60 transition-colors duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-subject"
                  className="text-sm text-white/60 font-medium"
                >
                  Subject <span className="text-main-color">*</span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-main-color/60 transition-colors duration-200 text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-main-dark">
                    Select a topic…
                  </option>
                  <option value="Job Listings" className="bg-main-dark">
                    Job Listings
                  </option>
                  <option value="Account Help" className="bg-main-dark">
                    Account Help
                  </option>
                  <option value="Employer Plans" className="bg-main-dark">
                    Employer Plans
                  </option>
                  <option value="Partnerships" className="bg-main-dark">
                    Partnerships
                  </option>
                  <option value="Feedback" className="bg-main-dark">
                    Feedback
                  </option>
                  <option value="Other" className="bg-main-dark">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm text-white/60 font-medium"
                >
                  Message <span className="text-main-color">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you…"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-main-color/60 transition-colors duration-200 text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-main-color text-white rounded-xl hover:bg-main-color/80 duration-300 font-medium disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {status === "sending" ? (
                  <>
                    <span className="size-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      className="size-5"
                      strokeWidth={2}
                    />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
