"use client";

import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import ContactFAQ from "@/components/Contact/ContactFAQ";

export default function ContactPage() {
  return (
    <div className="w-full flex items-center flex-col overflow-x-hidden">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
    </div>
  );
}
