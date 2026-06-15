"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Camera02Icon,
  Cancel01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { Spinner } from "@/components/ui/spinner";

import {
  ImageCrop,
  ImageCropApply,
  ImageCropContent,
  ImageCropReset,
} from "@/components/kibo-ui/image-crop";

import { XIcon } from "lucide-react";

type Props = {
  operation: "profile" | "cover";
  token: string;
  currentImageUrl?: string;
  role: "employee" | "company";
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function uploadImage(
  file: File,
  token: string,
  operation: "profile" | "cover",
  role: "employee" | "company",
  onProgress?: (percent: number) => void,
) {
  const formData = new FormData();

  if (role == "employee") {
    if (operation === "profile") {
      formData.append("photo", file);
    } else {
      formData.append("coverPhoto", file);
    }

    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Settings/${
        operation === "profile" ? "update-photo" : "update-cover-photo"
      }`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          if (e.total) {
            onProgress?.(Math.round((e.loaded * 100) / e.total));
          }
        },
      },
    );

    return res.data;
  } else {
    if (operation === "profile") {
      formData.append("logo", file);
    } else {
      formData.append("cover", file);
    }

    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/CompanySettings/${
        operation === "profile" ? "logo" : "cover-image"
      }`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          if (e.total) {
            onProgress?.(Math.round((e.loaded * 100) / e.total));
          }
        },
      },
    );

    return res.data;
  }
}

export default function UpdateProfileImage({
  operation,
  token,
  currentImageUrl,
  role,
  setOpen,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (file: File) =>
      uploadImage(file, token, operation, role, setUploadProgress),
    onSuccess: () => {
      sileo.success({ title: "Image updated successfully!" });

      if (role == "employee") {
        queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      } else {
        queryClient.refetchQueries({ queryKey: ["company-profile-settings"] });
        queryClient.refetchQueries({ queryKey: ["company-profile"] });
      }

      setUploadProgress(0);
      removeImage();
      if (setOpen) {
        setOpen(false);
      }
    },
    onError: (err: AxiosError<{ errors: string[] }>) => {
      sileo.error({
        title: "Error Happened",
        description: err.response?.data.errors[0] ?? "Something went wrong",
      });
      setUploadProgress(0);
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setCroppedImage(null);
    if (operation === "cover") {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setCroppedImage(previewUrl);
    } else {
      setImageFile(null);
    }
  };

  const removeImage = () => {
    setSelectedFile(null);
    setCroppedImage(null);
    setImageFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const base64ToFile = async (
    base64: string,
    filename: string,
  ): Promise<File> => {
    const res = await fetch(base64);
    const blob = await res.blob();
    return new File([blob], filename, { type: blob.type });
  };

  const handleSaveImage = () => {
    if (!imageFile) {
      sileo.error({
        title: "No Image Selected",
        description: "Please select and crop an image",
      });
      return;
    }
    mutate(imageFile);
  };

  if (operation === "cover") {
    return (
      <div className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Cover Image</label>

          {!croppedImage && (
            <label
              htmlFor="new-image"
              className="relative flex h-56 w-full cursor-pointer flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-dashed border-black/10 bg-input-bg p-5 text-center transition-all duration-300 hover:border-main-color/40 hover:bg-input-bg/60">
              <div className="flex size-16 items-center justify-center rounded-full bg-main-color/10">
                <HugeiconsIcon
                  icon={Camera02Icon}
                  className="size-8 text-main-color"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-black">
                  Upload Your New Cover
                </p>
                <p className="text-xs text-black/60">
                  JPG or PNG • Max size 5MB
                </p>
              </div>
              <input
                ref={inputRef}
                id="new-image"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}

          {croppedImage && (
            <div className="relative h-56 overflow-hidden rounded-2xl border">
              <Image
                src={croppedImage}
                alt="Preview"
                fill
                className="object-cover"
                unoptimized
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute right-3 top-3 z-20 flex size-8 items-center justify-center rounded-full bg-white text-black shadow-sm transition-colors hover:bg-red-50 hover:text-red-500">
                <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
              </button>
            </div>
          )}
        </div>

        <Button
          onClick={handleSaveImage}
          type="button"
          disabled={isPending || !imageFile}
          className="h-11 w-full rounded-md bg-main-color text-sm font-medium text-white transition-all hover:bg-main-color/90">
          {isPending ? <Spinner /> : "Save Changes"}
        </Button>

        {isPending && (
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-black/50">
              <span>Uploading…</span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-main-color transition-all duration-300 ease-out"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  /* ── Profile photo layout (new circular design) ── */
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Step 1 – idle: circular avatar with camera overlay */}
      {!selectedFile && !croppedImage && (
        <div className="flex flex-col items-center gap-4">
          <label
            htmlFor="new-image"
            className="group relative size-36 cursor-pointer"
            title="Change profile photo">
            {/* Avatar ring */}
            <span className="absolute inset-0 rounded-full ring-4 ring-main-color/20 ring-offset-2 transition-all duration-300 group-hover:ring-main-color/50" />

            {/* Avatar image or placeholder */}
            <div className="relative size-36 overflow-hidden rounded-full bg-linear-to-br from-main-color/20 to-main-color/5">
              {currentImageUrl ? (
                <Image
                  src={currentImageUrl}
                  alt="Profile"
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <svg
                    className="size-16 text-main-color/30"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
              )}

              {/* Dark hover overlay with camera icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-full bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                <HugeiconsIcon
                  icon={Camera02Icon}
                  className="size-7 text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Change
                </span>
              </div>
            </div>

            <input
              ref={inputRef}
              id="new-image"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          <div className="text-center">
            <p className="text-sm font-semibold text-black">Profile Photo</p>
            <p className="text-xs text-black/50">JPG or PNG • Max 5 MB</p>
          </div>
        </div>
      )}

      {/* Step 2 – crop */}
      {selectedFile && !croppedImage && (
        <div className="w-full space-y-4">
          <p className="text-center text-sm font-semibold text-black">
            Crop your photo
          </p>

          <div className="flex justify-center">
            <div className="w-full max-w-xs overflow-hidden rounded-2xl border bg-input-bg p-4">
              <ImageCrop
                aspect={1}
                circularCrop
                className="w-full"
                file={selectedFile}
                maxImageSize={5 * 1024 * 1024}
                onCrop={async (image) => {
                  setCroppedImage(image);
                  const file = await base64ToFile(image, selectedFile.name);
                  setImageFile(file);
                }}>
                <ImageCropContent className="mx-auto" />

                <div className="mt-4 flex items-center justify-center gap-2">
                  <ImageCropApply asChild>
                    <Button
                      type="button"
                      size="sm"
                      className="bg-main-color text-white hover:bg-main-color/90">
                      Apply
                    </Button>
                  </ImageCropApply>

                  <ImageCropReset asChild>
                    <Button type="button" size="sm">
                      Reset
                    </Button>
                  </ImageCropReset>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={removeImage}
                    className="bg-red-500 text-white hover:bg-red-600">
                    <XIcon className="size-4" />
                  </Button>
                </div>
              </ImageCrop>
            </div>
          </div>
        </div>
      )}

      {/* Step 3 – preview cropped circle + confirm / discard */}
      {croppedImage && (
        <div className="flex flex-col items-center gap-4">
          {/* Cropped preview in circle */}
          <div className="relative size-36 overflow-hidden rounded-full border-4 border-main-color/30 shadow-md">
            <Image
              src={croppedImage}
              alt="Preview"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <p className="text-sm font-semibold text-black">Looks good?</p>

          <div className="flex gap-3">
            {/* Discard */}
            <button
              type="button"
              onClick={removeImage}
              className="flex size-10 items-center cursor-pointer justify-center rounded-full border border-black/10 bg-white text-black/50 shadow-sm transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-500">
              <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
            </button>

            {/* Confirm / save */}
            <button
              type="button"
              onClick={handleSaveImage}
              disabled={isPending}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-main-color text-white shadow-sm transition-all hover:bg-main-color/90 disabled:opacity-60">
              {isPending ? (
                <Spinner className="size-4" />
              ) : (
                <HugeiconsIcon icon={Tick02Icon} className="size-4" />
              )}
            </button>
          </div>

          <p className="text-xs text-black/40">
            {isPending ? "Saving…" : "Tap ✓ to save or ✕ to discard"}
          </p>

          {isPending && (
            <div className="w-full space-y-1.5">
              <div className="flex justify-between text-xs text-black/50">
                <span>Uploading…</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10">
                <div
                  className="h-full rounded-full bg-main-color transition-all duration-300 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
