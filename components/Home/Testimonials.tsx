import UpFromDownText from "../AnimatedComponents/UpFromDownText";
import TestimonialsImage1 from "@images/Testimonials/TestimonialsImage4.webp";
import TestimonialsImage2 from "@images/Testimonials/TestimonialsImage2.webp";
import TestimonialsImage3 from "@images/Testimonials/TestimonialsImage3.webp";
import TestimonialsImage4 from "@images/Testimonials/TestimonialsImage1.webp";
import TestimonialsCard, { TestimonialsCardDataType } from "./TestimonialsCard";

const TestimonialsRates: TestimonialsCardDataType[] = [
  {
    name: "Bondan Sungkar",
    rate: "Jobify helped me land my first UI/UX role in less than two weeks. The process was incredibly smooth.",
    job: "UI/UX Designer",
    image: TestimonialsImage1,
    status: "new member",
    index: 1,
  },
  {
    name: "Michael Thompson",
    rate: "I was struggling to find a frontend position until I joined Jobify. The platform connected me with the right companies fast.",
    job: "Frontend Developer",
    image: TestimonialsImage2,
    status: "Pro member",
    index: 2,
  },
  {
    name: "Ahmed Hassan",
    rate: "Thanks to Jobify, I received multiple offers within days. The experience felt tailored to my skills and career goals.",
    job: "Product Manager",
    image: TestimonialsImage3,
    status: "new member",
    index: 3,
  },
  {
    name: "Daniel Carter",
    rate: "Jobify made job hunting stress-free. I found a role that truly fits me, and the support throughout the process was excellent.",
    job: "HR Specialist",
    image: TestimonialsImage4,
    status: "Pro member",
    index: 4,
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 pb-30 flex flex-col gap-30">
      <div className="flex flex-col gap-3 items-center justify-center text-center">
        <UpFromDownText
          text="Testimonials"
          classes="md:text-6xl text-3xl font-medium"
        />
        <p className="capitalize text-low-color">
          users transformed their careers with our platform! Hear their
          inspiring success stories and join the community!{" "}
        </p>
      </div>
      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-10">
        {TestimonialsRates.map((test) => (
          <TestimonialsCard {...test} key={test.name} />
        ))}
      </div>
    </div>
  );
}
