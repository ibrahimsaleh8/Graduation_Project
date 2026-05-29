"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProjectFormData } from "@/validations/EmployeeProjectSchema";
import { CloudUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";

import { Spinner } from "@/components/ui/spinner";
import { useProjectForm } from "../useProjectForm";
import { Dispatch, SetStateAction } from "react";

const fields = [
  {
    id: "project-title",
    label: "Project Title",
    name: "projectTitle" as const,
    placeholder: "Project Title",
  },
  {
    id: "project-description",
    label: "Project Description",
    name: "description" as const,
    placeholder: "Project Description",
  },
  {
    id: "project-url",
    label: "Project URL",
    name: "projectUrl" as const,
    placeholder: "https://example.com",
  },
];
type Props = {
  token: string;
  opearation: "add" | "edit";
  deafaultValues?: ProjectFormData & {
    projectCard?: string;
    projectId: string;
  };
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function ProjectForm({
  opearation,
  deafaultValues,
  token,
  setOpen,
}: Props) {
  const {
    isCreatingProject,
    isUpdatingProject,
    register,
    handleSubmit,
    errors,
    onSubmit,
    onFileChange,
    preview,
    errorCard,
    projectCard,
  } = useProjectForm({ token, opearation, deafaultValues, setOpen });
  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Upload */}
      <div className="space-y-2">
        <Label
          htmlFor="project-card"
          className={`w-full h-50 bg-input-bg border-2 border-dashed ${errorCard ? "border-red-500" : "border-black/10"} rounded-2xl flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-input-bg/60 transition`}>
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt="Project preview"
              className="h-full w-full object-cover rounded-2xl"
            />
          ) : (
            <>
              <HugeiconsIcon
                icon={CloudUploadIcon}
                className="size-12 text-black/40"
              />
              <span className="text-sm text-black/60">
                {projectCard?.name || "Upload Project Card"}
              </span>
            </>
          )}

          <input
            id="project-card"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onFileChange(e.target.files?.[0])}
          />
        </Label>
        {errorCard && <ErrorValidationMessage message={errorCard} />}
      </div>

      {/* Dynamic Inputs */}
      {fields.map((field) =>
        field.id == "project-description" ? (
          <div key="project-description" className="space-y-1.5">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              placeholder="Project Description"
              className="bg-input-bg h-24 border-border-color"
              aria-invalid={!!errors.description}
              {...register("description")}
            />

            {errors.description && (
              <ErrorValidationMessage
                message={errors.description.message || ""}
              />
            )}
          </div>
        ) : (
          <div key={field.id} className="space-y-1.5">
            <Label htmlFor={field.id}>{field.label}</Label>

            <Input
              id={field.id}
              placeholder={field.placeholder}
              className="border-border-color"
              aria-invalid={!!errors[field.name]}
              {...register(field.name)}
            />

            {errors[field.name] && (
              <ErrorValidationMessage
                message={errors[field.name]?.message || ""}
              />
            )}
          </div>
        ),
      )}

      {/* Submit */}
      <Button
        disabled={isCreatingProject || isUpdatingProject}
        type="submit"
        className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
        {isCreatingProject || isUpdatingProject ? (
          <Spinner />
        ) : opearation === "add" ? (
          "Add Project"
        ) : (
          "Save Changes"
        )}
      </Button>
    </form>
  );
}
