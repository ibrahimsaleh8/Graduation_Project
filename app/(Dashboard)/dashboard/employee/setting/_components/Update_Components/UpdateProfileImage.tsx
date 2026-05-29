"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CloudUploadIcon,
  Image02Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";

type Props = {
  operation: "profile" | "cover";
};
export default function UpdateProfileImage({ operation }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  const removeImage = () => {
    setPreview(null);
    setFileName("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label className="text-sm font-medium text-black">
          {operation === "profile" ? "Profile" : "Cover"} Image
        </Label>

        <Label
          htmlFor="new-image"
          className="
            relative
            flex
            h-56
            w-full
            cursor-pointer
            flex-col
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-2xl
            border-2
            border-dashed
            border-black/10
            bg-input-bg
            p-5
            text-center
            transition-all
            duration-300
            hover:border-main-color/40
            hover:bg-input-bg/60
          ">
          {preview ? (
            <>
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 flex flex-col items-center gap-2 text-white">
                <HugeiconsIcon icon={Image02Icon} className="size-10" />

                <div>
                  <p className="text-sm font-medium">{fileName}</p>
                  <p className="text-xs text-white/80">Click to change image</p>
                </div>
              </div>

              <button
                type="button"
                onClick={removeImage}
                className="
                  absolute
                  right-3
                  top-3
                  z-20
                  flex
                  size-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  shadow-sm
                  transition-colors
                  hover:bg-red-50
                  hover:text-red-500
                ">
                <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
              </button>
            </>
          ) : (
            <>
              <div
                className="
                  flex
                  size-16
                  items-center
                  justify-center
                  rounded-full
                  bg-main-color/10
                ">
                <HugeiconsIcon
                  icon={CloudUploadIcon}
                  className="size-8 text-main-color"
                />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-black">
                  Upload Your New Image
                </p>

                <p className="text-xs text-black/60">
                  JPG or PNG • Max size 5MB
                </p>
              </div>
            </>
          )}

          <input
            ref={inputRef}
            id="new-image"
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleImageChange}
          />
        </Label>
      </div>

      <Button
        type="submit"
        className="
          h-11
          w-full
          rounded-md
          bg-main-color
          text-sm
          font-medium
          text-white
          transition-all
          hover:bg-main-color/90
        ">
        Save Changes
      </Button>
    </div>
  );
}
