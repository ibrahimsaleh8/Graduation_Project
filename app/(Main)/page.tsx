import Categoires from "@/components/Home/Categoires";
import EleveateYourJourny from "@/components/Home/EleveateYourJourny";
import Hero from "@/components/Home/Hero";
import HowItWork from "@/components/Home/HowItWork";
import Testimonials from "@/components/Home/Testimonials";
export default function Home() {
  return (
    <div className="w-full">
      <div className="md:p-3 p-2 md:px-10 overflow-x-hidden">
        <Hero />
        <div className="container mx-auto">
          <Categoires />
          <HowItWork />
          <Testimonials />
          <EleveateYourJourny />
        </div>
      </div>
    </div>
  );
}
