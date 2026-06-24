import { Input } from "../ui/input";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, File02Icon } from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import { useState } from "react";
const cvs = ["My CV", "My CV2"];
export default function ApplicationForm() {
  const [selectedCV, setSelectedCV] = useState("");

  return (
    <form
      className="flex flex-col gap-3 max-w-3xl"
      onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name:</label>
        <Input type="text" placeholder="Your Name" id="name" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email:</label>
        <Input type="email" placeholder="Your Email" id="email" />
      </div>

      {/* CV */}
      <div className="flex flex-col gap-2">
        <p>Choose Your CV</p>
        <div className="flex items-center gap-3 flex-wrap">
          {cvs.map((cv) => (
            <div
              key={cv}
              onClick={() => setSelectedCV(cv)}
              className="bg-input-bg relative w-fit flex flex-col gap-2 items-center p-4 pb-2 rounded-md cursor-pointer">
              {selectedCV == cv && (
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  className="size-6 fill-green-600 text-white absolute -top-2 -right-1"
                />
              )}

              <HugeiconsIcon icon={File02Icon} className="size-6" />
              <p className="text-sm">{cv}</p>
            </div>
          ))}
        </div>
      </div>

      <Button className="w-32 mt-6 text-sm bg-main-color hover:bg-main-color/90 duration-300 ">
        Submit
      </Button>
    </form>
  );
}
