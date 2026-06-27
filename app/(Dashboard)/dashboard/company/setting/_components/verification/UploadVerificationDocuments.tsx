"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CloudUploadIcon,
  Delete02Icon,
  File02Icon,
  CheckmarkBadge02Icon,
} from "@hugeicons/core-free-icons";
import axios, { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { VerificationRequestResponseDataType } from "./CompanyVerificationRequest";

const ACCEPTED_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
];
const MAX_FILE_SIZE_MB = 10;
const MAX_FILES = 5;

type Props = {
  token: string;
};

export default function UploadVerificationDocuments({ token }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Upload state
  const [isPending, setIsPending] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0); // 0–100

  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  // ─── Helpers ────────────────────────────────────────────────────────────────

  const formatSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // ─── File Validation ─────────────────────────────────────────────────────────

  const validateAndAddFiles = (incoming: FileList | File[]) => {
    setValidationError(null);
    const arr = Array.from(incoming);

    const invalid = arr.find((f) => !ACCEPTED_TYPES.includes(f.type));
    if (invalid) {
      setValidationError(
        `"${invalid.name}" is not allowed. Only PDF, PNG, or JPG files are accepted.`,
      );
      return;
    }

    const oversized = arr.find((f) => f.size > MAX_FILE_SIZE_MB * 1024 * 1024);
    if (oversized) {
      setValidationError(
        `"${oversized.name}" exceeds the ${MAX_FILE_SIZE_MB}MB size limit.`,
      );
      return;
    }

    setFiles((prev) => {
      const merged = [
        ...prev,
        ...arr.filter(
          (f) => !prev.some((p) => p.name === f.name && p.size === f.size),
        ),
      ].slice(0, MAX_FILES);

      if (prev.length + arr.length > MAX_FILES) {
        setValidationError(`You can upload a maximum of ${MAX_FILES} files.`);
      }
      return merged;
    });
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setValidationError(null);
  };

  // ─── Drag & Drop ─────────────────────────────────────────────────────────────

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length) validateAndAddFiles(e.dataTransfer.files);
  };

  // ─── Submit ───────────────────────────────────────────────────────────────────

  const handleSubmit = async () => {
    if (files.length === 0) {
      setValidationError(
        "Please upload at least one document before submitting.",
      );
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("documents", file));

    setIsPending(true);
    setUploadProgress(0);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Company/verification-request`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const total = progressEvent.total ?? 0;
            if (total > 0) {
              const percent = Math.round(
                (progressEvent.loaded / total) * 100,
              );
              setUploadProgress(percent);
            }
          },
        },
      );

      // Optimistically update cache → switch to Pending banner
      queryClient.setQueryData(
        ["verification-req-status"],
        (old: VerificationRequestResponseDataType | undefined) => ({
          ...(old ?? {}),
          status: "Pending" as const,
          adminNotes: old?.adminNotes ?? null,
        }),
      );

      sileo.success({
        title: "Documents submitted successfully",
        description:
          "Your verification request is now under review. We'll notify you once it's processed.",
      });

      setFiles([]);
      setUploadProgress(0);
    } catch (err) {
      const error = err as AxiosError<{ errors: string[]; message: string }>;
      sileo.error({
        title: "Failed to submit documents",
        description:
          error.response?.data?.errors?.[0] ??
          error.response?.data?.message ??
          "An error occurred. Please try again.",
      });
      setUploadProgress(0);
    } finally {
      setIsPending(false);
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <HugeiconsIcon
            icon={CheckmarkBadge02Icon}
            className="size-6 text-main-color"
            strokeWidth={2}
          />
          <h2 className="text-lg font-semibold">Company Verification</h2>
        </div>
        <p className="text-sm text-black/60">
          Upload official documents to verify your company account. Accepted
          formats: PDF, PNG, JPG — max {MAX_FILE_SIZE_MB}MB each, up to{" "}
          {MAX_FILES} files.
        </p>
      </div>

      {/* Drop Zone */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Upload verification documents"
        onClick={() => !isPending && inputRef.current?.click()}
        onKeyDown={(e) =>
          !isPending && e.key === "Enter" && inputRef.current?.click()
        }
        onDragOver={(e) => {
          e.preventDefault();
          if (!isPending) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => !isPending && handleDrop(e)}
        className={`w-full border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-3 py-12 px-6 transition-all duration-300 select-none ${
          isPending
            ? "cursor-not-allowed opacity-60 border-border-color bg-card-bg"
            : dragOver
              ? "cursor-pointer border-main-color bg-blue-50 scale-[1.01]"
              : "cursor-pointer border-border-color bg-card-bg hover:border-main-color hover:bg-blue-50/50"
        }`}
      >
        <div
          className={`size-14 rounded-full flex items-center justify-center transition-colors duration-300 ${
            dragOver ? "bg-main-color/15" : "bg-input-bg"
          }`}
        >
          <HugeiconsIcon
            icon={CloudUploadIcon}
            className={`size-7 transition-colors duration-300 ${
              dragOver ? "text-main-color" : "text-black/40"
            }`}
            strokeWidth={1.5}
          />
        </div>
        <div className="text-center">
          <p className="font-medium text-sm">
            {dragOver
              ? "Drop your files here"
              : "Drag & drop files here, or click to browse"}
          </p>
          <p className="text-xs text-black/50 mt-1">
            PDF, PNG, JPG · max {MAX_FILE_SIZE_MB}MB · up to {MAX_FILES} files
          </p>
        </div>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg"
          className="hidden"
          onChange={(e) => {
            if (e.target.files) validateAndAddFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {/* Validation Error */}
      {validationError && (
        <p className="text-xs text-red-500 font-medium">{validationError}</p>
      )}

      {/* Selected Files List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">
            Selected Files ({files.length}/{MAX_FILES})
          </p>
          <ul className="space-y-2">
            {files.map((file, i) => (
              <li
                key={`${file.name}-${file.size}`}
                className="flex items-center justify-between gap-3 bg-card-bg border border-border-color rounded-xl px-4 py-3 text-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-9 rounded-lg bg-main-color/10 flex items-center justify-center flex-shrink-0">
                    <HugeiconsIcon
                      icon={File02Icon}
                      className="size-4 text-main-color"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium truncate">{file.name}</p>
                    <p className="text-xs text-black/50">
                      {formatSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  disabled={isPending}
                  aria-label={`Remove ${file.name}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(i);
                  }}
                  className="flex-shrink-0 size-8 rounded-lg flex items-center justify-center hover:bg-red-50 hover:text-red-500 text-black/40 transition-colors duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <HugeiconsIcon
                    icon={Delete02Icon}
                    className="size-4"
                    strokeWidth={2}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Upload Progress Bar */}
      {isPending && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <p className="font-medium text-main-color">
              {uploadProgress < 100 ? "Uploading…" : "Processing…"}
            </p>
            <p className="font-semibold tabular-nums">{uploadProgress}%</p>
          </div>
          <div className="w-full h-2.5 bg-input-bg rounded-full overflow-hidden">
            <div
              className="h-full bg-main-color rounded-full transition-all duration-300 ease-out"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Submit Button */}
      <Button
        disabled={isPending || files.length === 0}
        onClick={handleSubmit}
        className="w-full h-11 bg-main-color hover:bg-main-color/90 text-white text-sm font-medium rounded-xl transition-all duration-200 disabled:opacity-60"
      >
        {isPending ? (
          <span className="flex items-center gap-2">
            <span className="size-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
            {uploadProgress < 100 ? `Uploading ${uploadProgress}%` : "Processing…"}
          </span>
        ) : (
          <>
            <HugeiconsIcon
              icon={CheckmarkBadge02Icon}
              className="size-4"
              strokeWidth={2}
            />
            Submit for Verification
          </>
        )}
      </Button>
    </div>
  );
}
