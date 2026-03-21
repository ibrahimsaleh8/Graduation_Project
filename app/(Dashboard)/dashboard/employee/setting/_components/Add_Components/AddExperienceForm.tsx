"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SelectExperienceDate from "../SelectDate";

export default function AddExperienceForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      {/* Job Title */}
      <div className="space-y-1.5">
        <Label htmlFor="job-title">Job Title</Label>
        <Input
          id="job-title"
          type="text"
          placeholder="e.g Software Engineer"
          className="border-border-color"
        />
      </div>

      {/* Company Name */}
      <div className="space-y-1.5">
        <Label htmlFor="company-name">Company Name</Label>
        <Input
          id="company-name"
          type="text"
          placeholder="e.g Google"
          className="border-border-color"
        />
      </div>

      {/* Location */}
      <div className="space-y-1.5">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          type="text"
          placeholder="e.g Egypt,Cairo"
          className="border-border-color"
        />
      </div>

      {/* Location Type */}
      <div className="space-y-1.5">
        <Label htmlFor="location-type">Location Type</Label>
        <Select>
          <SelectTrigger
            id="location-type"
            className="w-full bg-input-bg h-11! border-border-color">
            <SelectValue placeholder="Location Type" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black">
            <SelectGroup>
              <SelectItem value="onsite">Onsite</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="hybride">Hybride</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Start Date */}
      <div className="space-y-1.5">
        <Label htmlFor="start-date">Start Date</Label>
        <SelectExperienceDate id="start-date" />
      </div>

      {/* End Date */}
      <div className="space-y-1.5">
        <Label htmlFor="end-date">End Date</Label>
        <SelectExperienceDate id="end-date" />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Description"
          className="bg-input-bg h-20 border-border-color"
        />
      </div>

      <Button className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
        Save
      </Button>
    </form>
  );
}
