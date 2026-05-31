"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CloudUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { sileo } from "sileo";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  token: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function uploadCv(
  file: File,
  token: string,
  onProgress: (percent: number) => void,
) {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("ResumeName", file.name);

  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Settings/update-resume`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const percent = Math.round(
          (progressEvent.loaded * 100) / (progressEvent.total ?? 1),
        );
        onProgress(percent);
      },
    },
  );
  return res.data;
}

export default function UpdateMyCv({ token, setOpen }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (file: File) => uploadCv(file, token, setProgress),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({ title: "CV Added successfully!" });
      setProgress(0);
      if (setOpen) {
        setOpen(false);
      }
    },
    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      sileo.error({
        title: "Failed to Add CV",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
      setProgress(0);
    },
  });

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

  const handleSubmit = () => {
    if (!file) {
      sileo.error({
        title: "Something went wrong",
        description: "Please upload your CV",
        duration: 3000,
        autopilot: true,
      });
      return;
    }
    mutate(file);
  };

  return (
    <div className="space-y-5">
      <Label
        htmlFor="new-cv"
        className={`relative w-full h-40 bg-input-bg border-2 border-dashed border-black/10 rounded-2xl flex flex-col gap-2 items-center justify-center overflow-hidden duration-300 ${isPending ? "pointer-events-none cursor-default" : "cursor-pointer hover:bg-input-bg/40"}`}>
        {/* Upload progress overlay */}
        {isPending && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-10 rounded-2xl px-6">
            {/* Circular progress */}
            <div className="relative size-16">
              <svg className="size-16 -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="5"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                  className="text-main-color transition-all duration-300 ease-out"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-main-color">
                {progress}%
              </span>
            </div>

            {/* Linear progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-main-color h-1.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-xs text-gray-500 font-medium">
              {progress < 100 ? "Uploading your CV..." : "Processing..."}
            </span>
          </div>
        )}

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
          disabled={isPending}
        />
      </Label>

      {file && !isPending && (
        <p className="text-sm text-green-600 text-center">
          Selected: {file.name}
        </p>
      )}

      <Button
        onClick={handleSubmit}
        disabled={isPending}
        className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
        {isPending ? `Uploading ${progress}%` : "Upload"}
      </Button>
    </div>
  );
}
