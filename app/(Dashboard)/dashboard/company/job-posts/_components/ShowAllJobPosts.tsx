import { HugeiconsIcon } from "@hugeicons/react";
import JobPostsFilteration from "./JobPostsFilteration";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Delete02Icon,
  Eye,
  Location01Icon,
  PencilEdit02Icon,
} from "@hugeicons/core-free-icons";
import { Settings2 } from "lucide-react";
import AlertModel from "@/components/main-layout/AlertModel";
const jobPostsData = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Cairo, Egypt",
    type: "Full-time",
    postedAgo: "2 days ago",
    applicants: 15,
    status: "Active",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Giza, Egypt",
    type: "Part-time",
    postedAgo: "5 days ago",
    applicants: 8,
    status: "Active",
  },
];

export default function ShowAllJobPosts() {
  return (
    <div className="space-y-3">
      {/* Search and filter options */}
      <JobPostsFilteration />

      {/* Show All Job Posts */}
      <Table className="bg-white border">
        <TableHeader className="px-2">
          <TableRow className="hover:bg-black/4">
            <TableHead className="text-black py-4 pl-4">Job Title</TableHead>
            <TableHead className="text-black py-4">Details</TableHead>
            <TableHead className="text-black py-4">Applications</TableHead>
            <TableHead className="text-black py-4">Status</TableHead>
            <TableHead className="text-black py-4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobPostsData.map((job) => (
            <TableRow key={job.id} className="hover:bg-black/4">
              <TableCell className="pl-4">
                <div>
                  <p className="font-medium">{job.title}</p>
                  <p className="flex items-center gap-1 text-sm mt-2">
                    <HugeiconsIcon icon={Location01Icon} className="size-4" />
                    {job.location}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p className="text-xs px-4 py-2 bg-blue-100 text-blue-500 w-fit rounded-md font-medium">
                    {job.type}
                  </p>
                  <p className="text-[0.78rem] mt-2 text-black/70">
                    Posted {job.postedAgo}
                  </p>
                </div>
              </TableCell>
              <TableCell className="font-medium">{job.applicants}</TableCell>
              <TableCell>
                <p className="text-xs px-4 py-2 bg-green-100 text-green-600 w-fit rounded-md font-medium">
                  {job.status}
                </p>
              </TableCell>

              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="h-8 w-13 bg-white text-black border hover:bg-white/40 ml-auto">
                      <Settings2 />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white text-black flex flex-col gap-1 mr-6!">
                    <AlertModel
                      title="View Applicants"
                      trigger={
                        <Button className="text-[0.77rem] h-9 w-full bg-blue-500 text-white justify-start hover:bg-blue-600 gap-1.5">
                          <HugeiconsIcon
                            icon={Eye}
                            className="size-4.5"
                            strokeWidth={2}
                          />
                          Applicants
                        </Button>
                      }
                      content={<></>}
                      contentClassname="md:min-w-150"
                    />
                    <AlertModel
                      title="Edit Project"
                      trigger={
                        <Button className="text-[0.77rem] h-9 w-full bg-green-600 text-white justify-start hover:bg-green-700 gap-1.5">
                          <HugeiconsIcon
                            icon={PencilEdit02Icon}
                            className="size-4.5"
                            strokeWidth={2}
                          />
                          Edit
                        </Button>
                      }
                      content={<></>}
                      contentClassname="md:min-w-150"
                    />

                    <AlertModel
                      title="Delete Project"
                      trigger={
                        <Button className="text-[0.77rem] h-9 w-full bg-red-600 text-white justify-start hover:bg-red-700 gap-1.5">
                          <HugeiconsIcon
                            icon={Delete02Icon}
                            className="size-4.5"
                            strokeWidth={2}
                          />
                          Delete
                        </Button>
                      }
                      content={<></>}
                      contentClassname="md:min-w-150 pb-3"
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
