"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CloudUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { sileo } from "sileo";

export default function UpdateMyCv() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      sileo.error({
        title: "Something went wrong",
        description: "Only PDF files are allowed",
      });
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      sileo.error({
        title: "Something went wrong",
        description: "File must be less than 5MB",
      });
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      sileo.error({
        title: "Something went wrong",
        description: "Please upload your CV",
        duration: 3000,
        autopilot: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("cv", file);

    console.log("Uploading...", file);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Label
        htmlFor="new-cv"
        className="w-full h-40 bg-input-bg border-2 border-dashed border-black/10 rounded-2xl flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-input-bg/40 duration-300">
        <HugeiconsIcon
          icon={CloudUploadIcon}
          className="size-14 text-black/40"
        />

        <span>Upload Your New CV</span>
        <span className="text-xs">Only PDF files (Max Size 5MB)</span>

        <input
          type="file"
          className="hidden"
          id="new-cv"
          accept="application/pdf"
          onChange={handleFileChange}
        />
      </Label>

      {file && (
        <p className="text-sm text-green-600 text-center">
          Selected: {file.name}
        </p>
      )}

      <Button className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
        Save
      </Button>
    </form>
  );
}
