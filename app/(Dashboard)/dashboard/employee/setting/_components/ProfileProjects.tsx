import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddProjectForm from "./Add_Components/AddProjectForm";
import ProjectCardWithOperations from "./ProjectCardWithOperations";

export default function ProfileProjects() {
  return (
    <div className="w-full px-4 py-4 md:py-0">
      <div className="w-full flex justify-end pb-4">
        <AlertModel
          title="Add Project"
          trigger={
            <Button className="text-sm h-9.5 min-w-40 bg-main-color text-white hover:bg-main-color/90 gap-1 ml-3">
              <Plus className="size-4.5" /> Add Project
            </Button>
          }
          content={<AddProjectForm />}
          contentClassname="md:min-w-150"
        />
      </div>
      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-10">
        <ProjectCardWithOperations />
        <ProjectCardWithOperations />
        <ProjectCardWithOperations />
        <ProjectCardWithOperations />
      </div>{" "}
    </div>
  );
}
