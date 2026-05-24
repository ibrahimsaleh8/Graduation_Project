import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import googleImage from "@images/Icons/google.svg";
import Image from "next/image";
import { formatDate } from "@/lib/FormatDate";
import { HugeiconsIcon } from "@hugeicons/react";
import { WorkHistoryIcon } from "@hugeicons/core-free-icons";
// const recentJobs = [
//   {
//     id: 1,
//     company: "Google",
//     jobTitle: "Frontend Developer",
//     appliedAt: "13 May, 2026",
//   },
//   {
//     id: 2,
//     company: "Google",
//     jobTitle: "Frontend Developer",
//     appliedAt: "13 May, 2026",
//   },
//   {
//     id: 3,
//     company: "Google",
//     jobTitle: "Frontend Developer",
//     appliedAt: "13 May, 2026",
//   },
//   {
//     id: 4,
//     company: "Google",
//     jobTitle: "Frontend Developer",
//     appliedAt: "13 May, 2026",
//   },
// ];

type Props = {
  recentApplications: {
    id: string;
    companyName: string;
    companyLogoUrl: string;
    jobTitle: string;
    appliedAt: Date;
  }[];
};

export default function RecentlyAppliedJobs({ recentApplications }: Props) {
  return (
    <div className="space-y-5 lg:w-1/2 w-full mt-10 lg:mt-0">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between md:gap-4 flex-wrap md:items-center pr-3">
        <p className="text-lg font-medium">Recently Applied Jobs</p>
        <Link
          className="flex items-center gap-1 font-medium mt-3 ml-auto underline"
          href={"/dashboard/employee/applied-jobs"}>
          See All
          <span className="w-5 flex items-center duration-300 group-hover:bg-main-color/80 justify-center text-main-color bg-main-dark rounded-full">
            <svg
              id="uuid-ef17ad8d-6f20-44a3-8a22-5c0ca330cf8e"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 77.85 77.85">
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".uuid-2d3ad023-e644-408e-9446-777fdb053c0a{fill:none;stroke:none;stroke-miterlimit:8.01;stroke-width:1.6px;}",
                  }}
                />
              </defs>

              <g id="uuid-76f663d7-c443-4f89-b5ff-f74fac38013d">
                <g>
                  <path
                    fill="#ffff"
                    d="M44.45,29.47c-.88,.08-1.36,.08-1.76,.24-4.57,.96-8.65-.24-12.49-2.64-1.44-.88-1.44-1.2-.48-2.64,.4-.64,.8-1.36,1.28-2,.96-1.44,1.36-1.6,2.72-.48,3.36,2.72,7.21,3.92,11.53,3.2,2.24-.32,4.33-1.2,6.09-2.64,.88-.72,1.6-.64,2.4,.16,.08,.08,.16,.16,.16,.24,2.8,2.8,2.24,2.16,.64,4.89-2.8,4.73-2.96,9.53,0,14.26,.56,.88,1.12,1.84,1.76,2.64,.64,.8,.48,1.44-.32,1.92-.64,.4-1.2,.8-1.84,1.2-2.16,1.36-2.72,1.2-3.92-1.04-1.84-3.6-2.64-7.37-2.08-11.37,.08-.48,.08-.96,.08-1.52-.16-.08-.24-.16-.4-.16-1.04,1.04-2.16,2.08-3.28,3.2-2.48,2.48-4.89,4.97-7.37,7.45-3.68,3.68-7.29,7.37-10.97,11.05-.64,.64-1.84,1.44-2.16,1.28-1.12-.72-2.08-1.84-2.88-2.96-.16-.16,.4-1.12,.8-1.52,5.77-5.77,11.53-11.53,17.3-17.3,1.36-1.36,2.72-2.64,4-4,.4-.4,.64-.72,1.2-1.44h0Z"
                  />

                  <path
                    className="uuid-2d3ad023-e644-408e-9446-777fdb053c0a"
                    d="M77.05,38.93C77.05,17.86,59.99,.8,38.93,.8S.8,17.86,.8,38.93s17.06,38.12,38.12,38.12,38.12-17.06,38.12-38.12Z"
                  />
                </g>
              </g>
            </svg>
            {/* <Image src={flesher} alt="Flesher" className="size-full" /> */}
          </span>
        </Link>
      </div>

      {/* Jobs */}
      <Table className=" rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
            <TableHead className="text-white py-4">#</TableHead>
            <TableHead className="text-white py-4">Company Name</TableHead>
            <TableHead className="text-white py-4">Job Title</TableHead>
            <TableHead className="text-white py-4">Applied At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentApplications.length > 0 ? (
            recentApplications.map((job, i) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium py-4">{`${i + 1}`}</TableCell>
                <TableCell className="flex items-center gap-2 font-medium py-4">
                  <Image
                    src={googleImage}
                    alt="Google"
                    width={1000}
                    height={1000}
                    className="size-5 object-cover object-center"
                  />
                  {job.companyName}
                </TableCell>
                <TableCell className="font-medium py-4">
                  {job.jobTitle}
                </TableCell>
                <TableCell className="font-medium py-4">
                  {formatDate(job.appliedAt.toString())}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="py-9">
                <p className="flex flex-col items-center gap-1 justify-center  text-center text-black/70 font-medium ">
                  <HugeiconsIcon icon={WorkHistoryIcon} className="size-8" />
                  You Haven’t Applied to Any Jobs Yet ...
                </p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
