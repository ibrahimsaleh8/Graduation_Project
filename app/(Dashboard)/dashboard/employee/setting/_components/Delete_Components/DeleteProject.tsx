import { Button } from "@/components/ui/button";

export default function DeleteProject() {
  return (
    <div className="space-y-2 flex flex-col gap-4">
      <p>This will permanently delete this Project conversation</p>
      <Button variant={"destructive"} className="ml-auto min-w-32">
        Delete
      </Button>
    </div>
  );
}
