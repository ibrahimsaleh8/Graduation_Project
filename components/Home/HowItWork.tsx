"use client";

import UpFromDownText from "../AnimatedComponents/UpFromDownText";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";
import { PanelVisual } from "./PanelVisual";
import { motion } from "motion/react";

const ITEMS = [
  {
    title: "Discover Job Opportunities",
    content:
      "Browse a curated list of verified job openings across multiple industries. Find roles that match your skills, experience, and career goals.",
  },
  {
    title: "Connect with Employers",
    content:
      "Communicate directly with hiring companies, share your profile, and discuss job details to ensure the right fit before applying.",
  },
  {
    title: "Apply & Get Hired",
    content:
      "Submit applications, track their status in real time, and move smoothly through the hiring process until you land your next job.",
  },
  {
    title: "Share Your Experience",
    content:
      "Leave feedback on the hiring process to help improve transparency and build trust within the Jobify community.",
  },
];

export default function HowItWork() {
  return (
    <div className="py-30 w-full flex flex-col gap-15">
      <div className="flex flex-col gap-3 items-center justify-center text-center">
        <UpFromDownText
          text="How it's Work"
          classes="md:text-6xl text-3xl font-medium"
        />
        <p className="capitalize text-low-color">
          connecting you with the best employees in three simple steps
        </p>
      </div>
      <div className="flex gap-7 justify-between">
        {/* Image */}
        <PanelVisual />

        <div className="w-full">
          <Accordion
            defaultValue="item-0"
            type={"single"}
            collapsible={true}
            className="w-full gap-10 pt-5 flex flex-col h-full">
            {ITEMS.map((item, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                viewport={{ once: true }}
                key={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-input-bg data-[state=open]:bg-black data-[state=open]:text-white p-5 font-medium rounded-2xl pr-10 border-b-0">
                  <AccordionTrigger className="xl:text-3xl lg:text-2xl text-xl">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="xl:text-xl text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
