import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import ContactFAQ from "@/components/Contact/ContactFAQ";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
};
export default function ContactPage() {
  return (
    <div className="w-full flex items-center flex-col overflow-x-hidden mt-3">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
    </div>
  );
}
