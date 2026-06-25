import {
  jobSearchQueryDataType,
  JobsFilteration,
} from "../DisplayJobsForSearch";
import { JobsResponse } from "../../page";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

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

  // Sync currentPage with URL params — resets when user does a new search
  useEffect(() => {
    const pageFromParams = Number(params.page) > 0 ? Number(params.page) : 1;
    setCurrentPage(pageFromParams);
  }, [params.page, params.title, params.location, params.industry]);

  const [filteration, setFilteration] = useState<JobsFilteration>({
    jobTypes: [],
    workType: [],
    minExperience: "",
    maxExperience: "",
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

    return filteredJobs;
  }, [filteration.jobTypes, filteration.workType, initialJobs]);

  return {
    setFilteration,
    updarteCurrentPage,
    jobs,
    currentPage,
    filteration,
    jobsResponse: initialJobs,
  };
};
