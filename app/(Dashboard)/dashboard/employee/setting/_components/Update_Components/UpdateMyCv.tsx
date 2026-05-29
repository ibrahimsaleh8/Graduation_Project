"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CloudUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { sileo } from "sileo";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
type Props = {
  token: string;
};

async function uploadCv(file: File, token: string) {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("resume_name", file.name);

  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Settings/update-resume`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return res.data;
}
export default function UpdateMyCv({ token }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (file: File) => uploadCv(file, token),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: "CV updated successfully!",
      });
    },
    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: "Failed to update CV",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
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

      <Button
        onClick={handleSubmit}
        disabled={isPending}
        className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
        {isPending ? <Spinner /> : "Save Changes"}
      </Button>
    </div>
  );
}
