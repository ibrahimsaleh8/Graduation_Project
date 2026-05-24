"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How does Jobify work?",
    answer:
      "Jobify connects companies with talented candidates through an easy-to-use platform where employers can post jobs and applicants can apply in minutes.",
  },
  {
    question: "Is creating an account free?",
    answer:
      "Yes, creating an account on Jobify is completely free for job seekers.",
  },
  {
    question: "How can I apply for a job?",
    answer:
      "Simply create your profile, upload your resume, and click the apply button on any job listing that matches your skills.",
  },
  {
    question: "Can companies manage applications from the dashboard?",
    answer:
      "Yes, companies can manage job posts, review applications, track candidates, and update hiring statuses directly from the dashboard.",
  },
  {
    question: "Can I upload my resume?",
    answer:
      "Yes, Jobify allows candidates to upload resumes and showcase their skills, experience, and portfolio links.",
  },
  {
    question: "How do I track my job applications?",
    answer:
      "You can track all submitted applications and their statuses from your personal dashboard.",
  },
  {
    question: "Can employers edit or remove job posts?",
    answer:
      "Yes, employers can update, pause, or delete job listings anytime from the company dashboard.",
  },
  {
    question: "Does Jobify support remote jobs?",
    answer:
      "Yes, companies can post remote, hybrid, or onsite opportunities based on their hiring needs.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact the Jobify support team through the contact page or support email for any technical or account-related issues.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, Jobify uses secure authentication and modern security practices to protect user data and privacy.",
  },
];
export default function FrequentQuestions() {
  const container = useRef(null);

  useGSAP(() => {
    const defaultScrollTrigger = {
      trigger: container.current,
      start: "top 80%",
      end: "top 30%",
    };
    gsap.from(".questions-header", {
      y: 100,
      ease: "power3.out",
      duration: 0.8,
      scrollTrigger: defaultScrollTrigger,
    });
    gsap.from(".questions-desc", {
      y: 100,
      ease: "power3.out",
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: defaultScrollTrigger,
    });
  });
  return (
    <div
      ref={container}
      className="w-full py-32 md:px-10 px-3 space-y-8 bg-white bg-linear-to-b from-[#ffffff] to-[#eaf3fc]">
      <div className="space-y-3">
        <div className="overflow-y-hidden">
          <p className="md:text-5xl text-3xl font-medium capitalize questions-header">
            frequently <br /> asked questions
          </p>
        </div>
        <div className="overflow-y-hidden">
          <p className="text-black/70 max-w-2xl questions-desc">
            Onboard your own talent pool to Quitey, invite them to projects,
            sign contracts and kick off the projects simpler than ever.
          </p>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue={faqs[0].question}
        className="w-full max-w-4xl relative ml-auto">
        {faqs.map((quest) => (
          <AccordionItem
            className="w-full"
            key={quest.question}
            value={quest.question}>
            <AccordionTrigger className="w-full md:text-2xl cursor-pointer">
              {quest.question}
            </AccordionTrigger>
            <AccordionContent className="md:text-base">
              {quest.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
