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

export default function Home() {
  return (
    <div className={`w-full`}>
      <div>
        <Hero />
        <NewHowItWork />
        <ShowJobsCats />
        <CourageCard />
        <FrequentQuestions />
      </div>
    </div>
  );
}
