import AlertModel from "@/components/main-layout/AlertModel";
import JobApplicantsFilter from "./JobApplicantsFilter";
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
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import ApplicantsDetails from "./ApplicantsDetails";

export default function JobApplicants() {
  return (
    <div className="w-full space-y-5">
      <JobApplicantsFilter />

      <Table className="bg-white rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader>
          <TableRow className="bg-black/10 rounded-t-md">
            <TableHead className="text-black py-4 pl-4">
              Candidate Name
            </TableHead>
            <TableHead className="text-black py-4">Match</TableHead>
            <TableHead className="text-black py-4">Applied At</TableHead>
            <TableHead className="text-black py-4">Status</TableHead>
            <TableHead className="text-black py-4 w-40">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 4 }).map((_e, i) => (
            <TableRow key={i} className="border-b">
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
              <TableCell>
                <p className="px-3 py-1.5 text-xs font-medium bg-[#E8F5E9] w-fit rounded-sm text-[#236426] border border-[#d8eed9] ">
                  90%
                </p>
              </TableCell>
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
                <AlertModel
                  title="Ibrahim Saleh Application"
                  trigger={
                    <Button className="text-xs h-9.5 bg-main-color text-white justify-start hover:bg-main-color/80 hover:text-white gap-1.5">
                      <Eye className="sie-5" /> View Details
                    </Button>
                  }
                  content={<ApplicantsDetails />}
                  contentClassname="md:min-w-150 pb-3"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
