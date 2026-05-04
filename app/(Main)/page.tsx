import Categoires from "@/components/Home/Categoires";
import EleveateYourJourny from "@/components/Home/EleveateYourJourny";
import Hero from "@/components/Home/Hero";
import HowItWork from "@/components/Home/HowItWork";
import Intro from "@/components/Home/Intro";
import ShowAllJobsCategories from "@/components/Home/Jobs_Categories/ShowAllJobsCategories";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div className={`w-full`}>
      {/* <Intro /> */}

      <div>
        <Hero />

        {/* <ShowAllJobsCategories /> */}

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
