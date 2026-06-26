"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { sileo } from "sileo";
import { useUserStore } from "@/lib/UserStore";

async function saveJob(token: string, jobId: string) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/SavedJobs/${jobId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return res.data;
}

async function unSaveJob(token: string, jobId: string) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/SavedJobs/${jobId}`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return res.data;
}

type JobsContextType = {
  isSaved: (jobId: string) => boolean | undefined;
  toggleSaveJob: (jobId: string, currentlySaved: boolean) => void;
  isPending: (jobId: string) => boolean;
};

const JobsContext = createContext<JobsContextType | null>(null);

type Props = {
  token: string;
  children: React.ReactNode;
};

export function JobsProvider({ token, children }: Props) {
  const user = useUserStore((s) => s.userData);
  const [savedMap, setSavedMap] = useState<Record<string, boolean>>({});
  const [pendingMap, setPendingMap] = useState<Record<string, boolean>>({});

  const { mutate } = useMutation({
    mutationFn: ({
      jobId,
      operation,
    }: {
      jobId: string;
      operation: "save" | "unSave";
    }) =>
      operation === "save" ? saveJob(token, jobId) : unSaveJob(token, jobId),

    onSuccess: (_data, { jobId, operation }) => {
      setPendingMap((prev) => ({ ...prev, [jobId]: false }));
      sileo.success({
        title:
          operation === "save"
            ? "Job saved to your collection"
            : "Job removed from your collection",
      });
    },

    onError: (
      error: AxiosError<{ errors: string[]; status: number }>,
      { jobId, operation },
    ) => {
      setSavedMap((prev) => ({
        ...prev,
        [jobId]: operation === "save" ? false : true,
      }));
      setPendingMap((prev) => ({ ...prev, [jobId]: false }));
      sileo.error({
        title: "Failed to update saved job",
        description:
          error.response?.data?.errors?.[0] ??
          "An error occurred. Please try again.",
      });
    },
  });

  const toggleSaveJob = useCallback(
    (jobId: string, currentlySaved: boolean) => {
      if (!token) {
        sileo.warning({
          title: "Login First",
          description:
            "Login to your account to save jobs into your collection",
        });
        return;
      }

      if (user?.role !== "APPLICANT") {
        sileo.warning({
          title: "Applicants Only",
          description: "Only applicants can save jobs to their collections.",
        });
        return;
      }

      const nextSaved = !currentlySaved;
      const operation: "save" | "unSave" = nextSaved ? "save" : "unSave";

      setSavedMap((prev) => ({ ...prev, [jobId]: nextSaved }));
      setPendingMap((prev) => ({ ...prev, [jobId]: true }));

      mutate({ jobId, operation });
    },
    [token, user, mutate],
  );

  const isSaved = useCallback((jobId: string) => savedMap[jobId], [savedMap]);

  const isPending = useCallback(
    (jobId: string) => pendingMap[jobId] ?? false,
    [pendingMap],
  );

  const value = useMemo(
    () => ({ isSaved, toggleSaveJob, isPending }),
    [isSaved, toggleSaveJob, isPending],
  );

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
}

export function useJobsContext() {
  const ctx = useContext(JobsContext);
  if (!ctx) {
    throw new Error("useJobsContext must be used within a <JobsProvider>");
  }
  return ctx;
}
