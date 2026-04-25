import InterviewsFilteration from "./InterviewsFilteration";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import userImage from "@images/user-image.png";
import Image from "next/image";
import InterviewDetails from "./InterviewDetails";

export default function ShowAllInterviews() {
  return (
    <div className="space-y-2">
      <InterviewsFilteration />
      <Table className="bg-white rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
            <TableHead className="text-white py-4 pl-4">
              Candidate Name
            </TableHead>
            <TableHead className="text-white py-4">Job Position</TableHead>
            <TableHead className="text-white py-4">Date & Time</TableHead>
            <TableHead className="text-white py-4">Status</TableHead>
            <TableHead className="text-white py-4 w-30">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-start gap-3">
                {/* User Image */}
                <div className="size-12 rounded-full bg-amber-300">
                  <Image
                    src={userImage}
                    alt="User Image"
                    className="rounded-full w-full object-cover"
                  />
                </div>
                {/* User Info */}
                <div className="text-sm space-y-0.5">
                  <p className="font-medium">Ibrahim Saleh</p>
                  <p className="text-black/70 text-xs">ebrihm576@gmail.com</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium">Frontend Developer</TableCell>
            <TableCell>
              <div>
                <p>24 May 2026</p>
                <p>10:30 AM - 11:30 AM</p>
              </div>
            </TableCell>
            <TableCell>
              <p className="px-4 py-2 text-xs font-medium bg-[#FCF4C3] w-fit rounded-sm text-[#a26f19] border border-[#FCF4C3]">
                Pending
              </p>
            </TableCell>
            <TableCell>
              <InterviewDetails />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
