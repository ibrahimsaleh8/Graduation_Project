"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobCategories } from "@/lib/JobCategories";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { countries } from "@/lib/Countries";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CompanyProfileDataType,
  CompanyProfileSettingsSchema,
} from "@/validations/CompanyProfileSettings";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CompanyProfileSettings() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CompanyProfileDataType>({
    resolver: zodResolver(CompanyProfileSettingsSchema),
  });
  const onSubmit: SubmitHandler<CompanyProfileDataType> = (data) =>
    console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:px-4 py-4 md:py-0 space-y-5">
      {/* Image */}
      <div className="flex flex-col w-full">
        <div className="w-full h-40 bg-amber-400 rounded-2xl flex items-center justify-center">
          <HugeiconsIcon
            icon={CloudUploadIcon}
            className="size-10 text-black"
          />
        </div>
        <div className="size-25 rounded-full bg-main-color -mt-10 flex items-center justify-center">
          <HugeiconsIcon
            icon={CloudUploadIcon}
            className="size-10 text-white"
          />
        </div>
      </div>

      {/* Inputs */}
      <div className="space-y-5 w-full mt-5 px-3">
        {/* Company Name & Location */}
        <div className="flex items-center gap-5 flex-col md:flex-row w-full">
          {/* Company Name */}
          <div className="space-y-1 w-full">
            <Label htmlFor="company-name">Company Name</Label>
            <Input
              {...register("companyName")}
              type="text"
              id="company-name"
              placeholder="Company Name"
              className="bg-white border border-border-color"
            />
          </div>

          {/* Location */}
          <div className="space-y-1 w-full">
            <Label htmlFor="job-location">Location</Label>
            <Select onValueChange={(e) => setValue("location", e)}>
              <SelectTrigger
                id="job-location"
                className="w-full bg-white h-11! border border-border-color">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black border border-border-color">
                <SelectGroup>
                  {countries.map((country) => (
                    <SelectItem
                      className="hover:bg-input-bg! hover:text-black!"
                      key={country}
                      value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {(errors.companyName || errors.location) && (
          <div className="flex items-center flex-wrap gap-5">
            {errors.companyName && (
              <p className="text-sm text-red-500">
                * {errors.companyName.message}
              </p>
            )}
            {errors.location && (
              <p className="text-sm text-red-500">
                * {errors.location.message}
              </p>
            )}
          </div>
        )}

        {/* Indusrty & Company Size */}
        <div className="flex items-center gap-5 flex-col md:flex-row w-full">
          {/* Indusrty */}
          <div className="space-y-1 w-full">
            <Label htmlFor="indusrty">Indusrty</Label>
            <Select onValueChange={(e) => setValue("industry", e)}>
              <SelectTrigger
                id="indusrty"
                className="w-full bg-white h-11! border border-border-color">
                <SelectValue placeholder="Indusrty" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black border border-border-color">
                <SelectGroup>
                  {jobCategories.map((cat) => (
                    <SelectItem
                      className="hover:bg-input-bg! hover:text-black!"
                      key={cat}
                      value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Company Size */}
          <div className="space-y-1 w-full">
            <Label htmlFor="company-size">Company Size</Label>
            <Select onValueChange={(e) => setValue("companySize", e)}>
              <SelectTrigger
                id="company-size"
                className="w-full bg-white h-11! border border-border-color">
                <SelectValue placeholder="Company Size" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black border border-border-color">
                <SelectGroup>
                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="1-5">
                    1–5 employees (Startup / Early stage)
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="6-10">
                    6–10 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="11-20">
                    11–20 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="21-50">
                    21–50 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="51-100">
                    51–100 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="101-200">
                    101–200 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="201-500">
                    201–500 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="501-1000">
                    501–1,000 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="1001-5000">
                    1,001–5,000 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="5001-10000">
                    5,001–10,000 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="10000+">
                    10,000+ employees (Enterprise)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {(errors.industry || errors.companySize) && (
          <div className="flex items-center flex-wrap gap-5">
            {errors.industry && (
              <p className="text-sm text-red-500">
                {" "}
                *{errors.industry.message}
              </p>
            )}
            {errors.companySize && (
              <p className="text-sm text-red-500">
                * {errors.companySize.message}
              </p>
            )}
          </div>
        )}

        {/* Company Website */}
        <div className="space-y-1 w-full">
          <Label htmlFor="website-url">Website URL</Label>
          <Input
            {...register("websiteUrl")}
            type="text"
            id="website-url"
            placeholder="https://www.example.com"
            className="bg-white border border-border-color"
          />
        </div>
        {errors.websiteUrl && (
          <p className="text-sm text-red-500">{errors.websiteUrl.message}</p>
        )}

        {/* Company Description */}
        <div className="space-y-1 w-full">
          <Label htmlFor="company-description">Company Description</Label>
          <Textarea
            {...register("companyDescription")}
            id="company-description"
            placeholder="Company Description"
            className="bg-white border border-border-color h-40"
          />
        </div>

        {errors.companyDescription && (
          <p className="text-sm text-red-500">
            {errors.companyDescription.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm ml-3">
        Save
      </Button>
    </form>
  );
}
