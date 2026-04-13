import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function JobDescription() {
  return (
    <div>
      {/* Job Description */}
      <div className="space-y-1">
        <Label htmlFor="job-description">Job Description</Label>
        <Textarea
          placeholder="Job Description"
          className="w-full bg-white border-border-color h-45"
          required
          id="job-description"
        />
      </div>
    </div>
  );
}
