import Categoires from "@/components/Home/Categoires";
import EleveateYourJourny from "@/components/Home/EleveateYourJourny";
import Hero from "@/components/Home/Hero";
import HowItWork from "@/components/Home/HowItWork";
import Intro from "@/components/Home/Intro";
import ShowAllJobsCategories from "@/components/Home/Jobs_Categories/ShowAllJobsCategories";
import Testimonials from "@/components/Home/Testimonials";
import NewHeroSection from "@/components/Home/NewHeroSection";
import ShowJobsCats from "@/components/Home/New_Jobs_Categories/ShowJobsCats";
import NewHowItWork from "@/components/Home/NewHowItWork";
import FrequentQuestions from "@/components/Home/FrequentQuestions";
import CourageCard from "@/components/Home/CourageCard";
import TestHeroSection from "@/components/Home/TestHeroSection";

export default function Home() {
  return (
    <div className={`w-full`}>
      {/* className="bg-[radial-gradient(circle_at_top_center,rgba(196,219,255,0.5)_0%,transparent_80%),radial-gradient(circle_at_bottom_center,rgba(255,209,209,0.45)_0%,transparent_45%),linear-gradient(180deg,#f8f8fa_0%,#ffffff_50%,#fafafa_100%)] md:mx-10 rounded-t-2xl bg-fixed" */}
      <div>
        {/* <Hero /> */}
        <NewHeroSection />
        {/* <TestHeroSection /> */}
        <NewHowItWork />
        <ShowJobsCats />
        <CourageCard />
        <FrequentQuestions />
      </div>
    </div>
  );
}
