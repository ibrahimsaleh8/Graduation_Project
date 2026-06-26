import { useCandidatePageStore } from "@/lib/canSeeCandidatesPage";
import {
  TaskDone01Icon,
  UserCircleIcon,
  Settings02Icon,
  Calendar03Icon,
  Home03Icon,
  Briefcase01Icon,
  RoboticIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { useEffect, useEffectEvent, useState } from "react";

export const useCompanyLinks = () => {
  const { canSeeCandidatesPage } = useCandidatePageStore();

  const [allLinks, setAllLinks] = useState({
    companyLinks: [
      {
        link: "/dashboard/company",
        label: "Dashboard",
        icon: Home03Icon,
      },
      {
        link: "/dashboard/company/job-posts",
        label: "Jobs",
        icon: TaskDone01Icon,
      },
      {
        link: "/dashboard/company/create-job",
        label: "Create Job",
        icon: Briefcase01Icon,
      },
      {
        link: "/dashboard/company/interviews",
        label: "Interviews",
        icon: Calendar03Icon,
      },
    ],
    smallCompanyLinks: [
      {
        link: "/dashboard/company",
        label: "Dashboard",
        icon: Home03Icon,
      },
      {
        link: "/dashboard/company/job-posts",
        label: "Job Posts",
        icon: TaskDone01Icon,
      },
      {
        link: "/dashboard/company/interviews",
        label: "Interviews",
        icon: Calendar03Icon,
      },
      {
        link: "/dashboard/company/profile",
        label: "Public Profile",
        icon: UserCircleIcon,
      },
      {
        link: "/dashboard/company/ai-chat",
        label: "Ai chatbot",
        icon: RoboticIcon,
      },
      {
        link: "/dashboard/company/setting",
        label: "Settings",
        icon: Settings02Icon,
      },
    ],
  });

  const updateLinks = useEffectEvent(() => {
    setAllLinks((pre) => {
      return {
        ...pre,
        smallCompanyLinks: [
          {
            link: "/dashboard/company",
            label: "Dashboard",
            icon: Home03Icon,
          },
          {
            link: "/dashboard/company/job-posts",
            label: "Job Posts",
            icon: TaskDone01Icon,
          },
          {
            link: "/dashboard/company/interviews",
            label: "Interviews",
            icon: Calendar03Icon,
          },
          {
            link: "/dashboard/company/profile",
            label: "Public Profile",
            icon: UserCircleIcon,
          },
          {
            link: "/dashboard/company/candidates",
            label: "Search For Candidates",
            icon: UserGroupIcon,
          },
          {
            link: "/dashboard/company/ai-chat",
            label: "Ai chatbot",
            icon: RoboticIcon,
          },
          {
            link: "/dashboard/company/setting",
            label: "Settings",
            icon: Settings02Icon,
          },
        ],
      };
    });
  });

  useEffect(() => {
    if (canSeeCandidatesPage) {
      updateLinks();
    }
  }, [canSeeCandidatesPage]);

  return {
    smallCompanyLinks: allLinks.smallCompanyLinks,
    companyLinks: allLinks.companyLinks,
    canSeeCandidatesPage,
  };
};
