import { Location01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const popularSearch = ["designer", "web developer", "software engineer"];
export default function HeroSearchForJobBar() {
  return (
    <div className="flex gap-6 flex-col items-center xl:max-w-5xl max-w-4xl w-full mx-auto">
      <div className="flex items-center flex-col md:flex-row md:gap-3 px-3 w-full bg-white mx-auto rounded-lg border overflow-hidden">
        <div className="flex items-center p-2 w-full">
          <HugeiconsIcon
            icon={Search01Icon}
            className="size-5.5 text-black/50"
            strokeWidth={2}
          />
          <Input
            type="text"
            placeholder="Job Title"
            className="bg-white w-full md:h-12 h-10 border-0 focus-visible:ring-0 shadow-none focus-visible:border-0"
          />
        </div>

        <div className="md:w-px md:h-8 w-full h-px bg-black/10"></div>

        <div className="flex items-center p-2 w-full">
          <HugeiconsIcon
            icon={Location01Icon}
            className="size-5.5 text-black/50"
            strokeWidth={2}
          />
          <Input
            type="text"
            placeholder="Location , Country"
            className="bg-white md:h-12 h-10 w-full border-0 focus-visible:ring-0 shadow-none focus-visible:border-0"
          />
        </div>

        <div className="md:w-px md:h-8 w-full h-px bg-black/10"></div>

        <Button className="px-8 h-12 w-full md:w-32 hover:opacity-80 duration-300 text-sm font-medium mb-3 md:mb-0 mt-2 md:mt-0">
          Search Job
        </Button>
      </div>

      <div className="flex items-center md:gap-3 gap-2 flex-wrap pl-5">
        <p>Popular Jobs:</p>

        <div className="flex items-center md:gap-4 gap-2 flex-wrap">
          {popularSearch.map((keyword) => (
            <p
              className="text-sm capitalize px-3 py-1.5 bg-white border rounded-2xl"
              key={keyword}>
              {keyword}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
