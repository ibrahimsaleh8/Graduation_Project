import AboutHero from "@/components/About/AboutHero";
import OurMission from "@/components/About/OurMission";
import StartCareerToday from "@/components/Home/StartCareerToday";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
};
export default function AboutPage() {
  return (
    <div className="w-full flex items-center flex-col overflow-x-hidden">
      <AboutHero />
      <OurMission />
      <StartCareerToday />
    </div>
  );
}
