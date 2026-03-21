import AlertModel from "@/components/main-layout/AlertModel";
import MyExperienceCard from "../../profile/_components/MyExperienceCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddExperienceForm from "./Add_Components/AddExperienceForm";

export default function ExperienceData() {
  return (
    <div className="w-full px-4 py-4 md:py-0">
      <div className="w-full flex justify-end pb-3">
        <AlertModel
          title="Add Experience"
          trigger={
            <Button className="text-sm h-9.5 bg-main-color text-white hover:bg-main-color/90 gap-1 ml-3">
              <Plus className="size-4.5" /> Add Experience
            </Button>
          }
          content={<AddExperienceForm />}
          contentClassname="md:min-w-150"
        />
      </div>
      <MyExperienceCard />
    </div>
  );
}
