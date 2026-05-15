"use client";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  editAllowedFeaturesSchema,
  editAllowedFeaturesSchemaType,
} from "@/validations/EditAllowedFeaturesSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function EditAllowedFeatures() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<editAllowedFeaturesSchemaType>({
    resolver: zodResolver(editAllowedFeaturesSchema),
    defaultValues: {
      aiToolsAccess: false,
      candidateSearch: false,
      featuredJobPosts: 12,
      maxJobPosts: 0,
      prioritySupport: true,
    },
  });
  const onSubmit: SubmitHandler<editAllowedFeaturesSchemaType> = (data) =>
    console.log(data);

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Max & Featured Job Posts */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-7">
        {/*Max Job Posts */}
        <div className="space-y-1">
          <Label htmlFor="max-jobs">Max Job Posts</Label>
          <InputGroup>
            <InputGroupInput
              id="max-jobs"
              min={0}
              defaultValue={0}
              placeholder="0"
              type="number"
              onChange={(e) => setValue("maxJobPosts", +e.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>/ Month</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/*Featured Job Posts */}
        <div className="space-y-1">
          <Label htmlFor="featured-jobs">Featured Job Posts</Label>
          <InputGroup>
            <InputGroupInput
              min={0}
              defaultValue={0}
              id="featured-jobs"
              placeholder="0"
              type="number"
              onChange={(e) => setValue("featuredJobPosts", +e.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>/ Month</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      {(errors.maxJobPosts || errors.featuredJobPosts) && (
        <div className="flex items-center gap-6 flex-wrap">
          {errors.maxJobPosts && (
            <ErrorValidationMessage
              message={errors.maxJobPosts.message as string}
            />
          )}
          {errors.featuredJobPosts && (
            <ErrorValidationMessage
              message={errors.featuredJobPosts.message as string}
            />
          )}
        </div>
      )}

      {/* AI Tools Access */}
      <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b">
        <Label htmlFor="ai-tools" className="flex flex-col gap-1 items-start">
          <span className="font-medium">AI Tools Access</span>
          <span className="sm:text-sm text-xs text-black/70">
            Smart matching and auto-shortlisting
          </span>
        </Label>

        <Switch
          onCheckedChange={(e) => setValue("aiToolsAccess", e)}
          id="ai-tools"
          className="bg-border-color! border border-border-color data-[state=checked]:bg-main-color! cursor-pointer"
        />
      </div>

      {/* Candidate Search */}
      <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b">
        <Label
          htmlFor="candidate-search"
          className="flex flex-col gap-1 items-start">
          <span className="font-medium">Candidate Search</span>
          <span className="sm:text-sm text-xs text-black/70">
            Full access to the global talent database
          </span>
        </Label>

        <Switch
          onCheckedChange={(e) => setValue("candidateSearch", e)}
          id="candidate-search"
          className="bg-border-color! border border-border-color data-[state=checked]:bg-main-color! cursor-pointer"
        />
      </div>

      {/* Candidate Search */}
      <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b">
        <Label
          htmlFor="priority-support"
          className="flex flex-col gap-1 items-start">
          <span className="font-medium">Priority Support</span>
          <span className="sm:text-sm text-xs text-black/70">
            24/7 direct access to dedicated account managers
          </span>
        </Label>

        <Switch
          onCheckedChange={(e) => setValue("prioritySupport", e)}
          id="priority-support"
          className="bg-border-color! border border-border-color data-[state=checked]:bg-main-color! cursor-pointer"
        />
      </div>

      {(errors.aiToolsAccess || errors.candidateSearch) && (
        <div className="flex items-center gap-6 flex-wrap">
          {errors.aiToolsAccess && (
            <ErrorValidationMessage
              message={errors.aiToolsAccess.message as string}
            />
          )}
          {errors.candidateSearch && (
            <ErrorValidationMessage
              message={errors.candidateSearch.message as string}
            />
          )}
        </div>
      )}

      <Button
        type="submit"
        className="text-sm bg-main-color hover:bg-main-color/70 h-10 w-32">
        Update
      </Button>
    </form>
  );
}
