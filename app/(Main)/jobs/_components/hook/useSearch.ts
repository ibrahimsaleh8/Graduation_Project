import {
  jobSearchQueryDataType,
  JobsFilteration,
} from "../DisplayJobsForSearch";
import { JobsResponse } from "../../page";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState, useEffect, useEffectEvent } from "react";

type Props = {
  token: string;
  params: jobSearchQueryDataType;
  initialJobs: JobsResponse;
};
export const useSearch = ({ params, initialJobs }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const [currentPage, setCurrentPage] = useState(
    Number(params.page) > 0 ? Number(params.page) : 1,
  );

  const updateCurrentPage = useEffectEvent((value: number) => {
    setCurrentPage(value);
  });

  useEffect(() => {
    const pageFromParams = Number(params.page) > 0 ? Number(params.page) : 1;
    updateCurrentPage(pageFromParams);
  }, [params.page, params.title, params.location, params.industry]);

  const [filteration, setFilteration] = useState<JobsFilteration>({
    jobTypes: [],
    workType: [],
    minExperience: null,
    maxExperience: null,
  });

  const updarteCurrentPage = (page: number) => {
    setCurrentPage(page);
    const searchParams = new URLSearchParams({
      title: params.title ?? "",
      location: params.location ?? "",
      industry: params.industry ?? "",
      page: String(page),
    });
    router.push(`${pathName}?${searchParams.toString()}`);
  };

  const jobs = useMemo(() => {
    if (!initialJobs) return undefined;
    let filteredJobs = [...initialJobs.items];

    if (filteration.jobTypes.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        filteration.jobTypes.some((type) => job.jobTypes.includes(type)),
      );
    }

    if (filteration.workType.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        filteration.workType.some((type) => job.workApproaches.includes(type)),
      );
    }
    if (filteration.workType.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        filteration.workType.some((type) => job.workApproaches.includes(type)),
      );
    }
    if (filteration.minExperience != null) {
      filteredJobs = filteredJobs.filter(
        (job) => job.minExperience == filteration.minExperience,
      );
    }
    if (filteration.maxExperience != null) {
      filteredJobs = filteredJobs.filter(
        (job) => job.maxExperience == filteration.maxExperience,
      );
    }

    return filteredJobs;
  }, [
    filteration.jobTypes,
    filteration.maxExperience,
    filteration.minExperience,
    filteration.workType,
    initialJobs,
  ]);

  const resetFilteration = () => {
    setFilteration({
      jobTypes: [],
      workType: [],
      minExperience: null,
      maxExperience: null,
    });
  };

  return {
    setFilteration,
    resetFilteration,
    updarteCurrentPage,
    jobs,
    currentPage,
    filteration,
    jobsResponse: initialJobs,
  };
};
