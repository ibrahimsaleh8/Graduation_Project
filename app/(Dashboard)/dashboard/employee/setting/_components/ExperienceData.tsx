import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ExperienceCardWithOperations from "./ExperienceCardWithOperations";
import { ExperienceType } from "@/hooks/useGetEmployeeProfile";
import ExperienceForm from "./Add_Components/ExperienceForm";
import { HugeiconsIcon } from "@hugeicons/react";
import { WorkHistoryIcon } from "@hugeicons/core-free-icons";
type Props = {
  experiences?: ExperienceType[];
  token: string;
};
export default function ExperienceData({ experiences, token }: Props) {
  return (
    <div className="w-full px-4 py-4 md:py-0">
      <div className="w-full flex justify-end pb-3">
        <AlertModel
          title="Add Experience"
          trigger={
            <Button className="text-sm h-9.5 min-w-40 bg-main-color text-white hover:bg-main-color/90 gap-1 ml-3">
              <Plus className="size-4.5" /> Add Experience
            </Button>
          }
          content={<ExperienceForm opeartion="add" token={token} />}
          contentClassname="md:min-w-150"
        />
      </div>
      {experiences && experiences.length > 0 ? (
        <div className="space-y-4">
          {experiences.map((experience) => (
            <ExperienceCardWithOperations
              key={experience.experienceID}
              experience={experience}
              token={token}
            />
          ))}
        </div>
      ) : (
        <div className="p-2 flex flex-col items-center gap-2 justify-center text-black/80 font-medium">
          <HugeiconsIcon icon={WorkHistoryIcon} className="size-6" />
          <p>No experiences found.</p>
        </div>
      )}
    </div>
  );
}
