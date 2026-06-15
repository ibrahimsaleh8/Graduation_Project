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
import { jobCategories } from "@/lib/JobCategories";
import { Button } from "@/components/ui/button";
import { countries } from "@/lib/Countries";
import { CompanySettingsProfileDataType } from "./ShowCompanySettings";
import TextEditor from "@/app/(Dashboard)/_components/TextEditor";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";

import { Spinner } from "@/components/ui/spinner";
import { useUpdateCompanyProfileData } from "./hooks/useUpdateCompanyProfileData";
type Props = {
  profileData: CompanySettingsProfileDataType;
  token: string;
};

export default function CompanyProfileSettingsInput({
  profileData,
  token,
}: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    onSubmit,
    isPending,
    errors,
    getValues,
  } = useUpdateCompanyProfileData({
    profileData,
    token,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:px-4 py-4 md:py-0 space-y-5">
      {/* Inputs */}
      <div className="space-y-5 w-full mt-5 px-3">
        {/* Company Name & Location */}
        <div className="flex items-center gap-5 flex-col md:flex-row w-full">
          {/* Company Name */}
          <div className="space-y-1 w-full">
            <Label htmlFor="company-name">Company Name</Label>
            <Input
              aria-invalid={errors.companyName ? "true" : "false"}
              {...register("companyName")}
              type="text"
              id="company-name"
              placeholder="Company Name"
              className="bg-white border border-border-color"
            />
          </div>

          {/* Location */}
          <div className="space-y-1 w-full">
            <Label htmlFor="company-country">Country</Label>
            <Select
              defaultValue={getValues("country")}
              onValueChange={(e) => setValue("country", e)}>
              <SelectTrigger
                aria-invalid={errors.country ? "true" : "false"}
                id="company-country"
                className="w-full bg-white h-11! border border-border-color">
                <SelectValue placeholder="Country" />
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

        {(errors.companyName || errors.country) && (
          <div className="flex items-center flex-wrap gap-5">
            {errors.companyName && (
              <ErrorValidationMessage
                message={errors.companyName.message ?? ""}
              />
            )}
            {errors.country && (
              <ErrorValidationMessage message={errors.country.message ?? ""} />
            )}
          </div>
        )}

        {/* Indusrty & Company Size */}
        <div className="flex items-center gap-5 flex-col md:flex-row w-full">
          {/* Indusrty */}
          <div className="space-y-1 w-full">
            <Label htmlFor="indusrty">Indusrty</Label>
            <Select
              defaultValue={getValues("industry")}
              onValueChange={(e) => setValue("industry", e)}>
              <SelectTrigger
                aria-invalid={errors.industry ? "true" : "false"}
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
            <Select
              defaultValue={getValues("companySize") ?? ""}
              onValueChange={(e) => setValue("companySize", e)}>
              <SelectTrigger
                aria-invalid={errors.companySize ? "true" : "false"}
                id="company-size"
                className="w-full bg-white h-11! border border-border-color">
                <SelectValue placeholder="Company Size" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black border border-border-color">
                <SelectGroup>
                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="1–5 employees">
                    1–5 employees (Startup / Early stage)
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="6-10 employees">
                    6–10 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="11-20 employees">
                    11–20 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="21-50 employees">
                    21–50 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="51-100 employees">
                    51–100 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="101-200 employees">
                    101–200 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="201-500 employees">
                    201–500 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="501-1000 employees">
                    501–1,000 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="1001-5000 employees">
                    1,001–5,000 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="5001-10000 employees">
                    5,001–10,000 employees
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    value="10000+ employees">
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
              <ErrorValidationMessage message={errors.industry.message ?? ""} />
            )}
            {errors.companySize && (
              <ErrorValidationMessage
                message={errors.companySize.message ?? ""}
              />
            )}
          </div>
        )}

        {/* Founded Yeaer & Profile Bio */}
        <div className="flex items-center gap-5 flex-col md:flex-row w-full">
          <div className="space-y-1 w-full">
            <Label htmlFor="profile-bio">Profile Bio</Label>
            <Input
              aria-invalid={errors.bio ? "true" : "false"}
              {...register("bio", {
                setValueAs: (value) => (value === "" ? null : value),
              })}
              type="text"
              id="profile-bio"
              placeholder="Enter your profile bio"
              className="bg-white border border-border-color"
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="founded-year">Founded Year</Label>
            <Input
              aria-invalid={errors.founded_year ? "true" : "false"}
              {...register("founded_year", {
                setValueAs: (value) => (value === "" ? null : Number(value)),
              })}
              type="number"
              id="founded-year"
              placeholder="2020"
              className="bg-white border border-border-color"
            />
          </div>
        </div>
        {(errors.bio || errors.founded_year) && (
          <div className="flex items-center flex-wrap gap-5">
            {errors.bio && (
              <ErrorValidationMessage message={errors.bio.message ?? ""} />
            )}
            {errors.founded_year && (
              <ErrorValidationMessage
                message={errors.founded_year.message ?? ""}
              />
            )}
          </div>
        )}

        {/* Company Description */}
        <div className="space-y-1">
          <TextEditor
            deafultValue={getValues("companyDescription") ?? ""}
            label="Company Description"
            updateFn={(value: string) => {
              setValue("companyDescription", value);
            }}
          />

          {errors.companyDescription && (
            <ErrorValidationMessage
              message={errors.companyDescription.message ?? ""}
            />
          )}
        </div>
      </div>

      <Button
        disabled={isPending}
        type="submit"
        className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm ml-3">
        {isPending ? <Spinner /> : "Save"}
      </Button>
    </form>
  );
}
