/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import userImage from "@images/dashboard-user-image.png";
import UsersFilter from "./UsersFilter";
import ShowUserDetails from "./ShowUserDetails";
import { ApplicantsDataType } from "./DisplayUsersForAdmin";
import UserStatusBadge from "./UserStatusBadge";
import { formatDate } from "@/lib/FormatDate";
import { useMemo, useState } from "react";
import Pagination from "@/components/ui/pagination";

type Props = {
  users: ApplicantsDataType[];
  token: string;
};

export default function ShowAllUsers({ users, token }: Props) {
  const [searchTxt, setSearchTxt] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "blocked" | "active"
  >("all");

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const usersData = useMemo(() => {
    let filteredUsers = users;

    if (statusFilter !== "all") {
      filteredUsers = filteredUsers.filter((user) =>
        statusFilter == "active" ? !user.isBlocked : user.isBlocked,
      );
    }

    if (searchTxt.trim() !== "") {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.fullName.toLowerCase().includes(searchTxt.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTxt.toLowerCase()),
      );
    }
    return filteredUsers;
  }, [searchTxt, statusFilter, users]);

  const updateSearchTxt = (value: string) => {
    setSearchTxt(value);
    setCurrentPage(1);
  };
  const updateStatus = (value: "all" | "blocked" | "active") => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(usersData.length / ITEMS_PER_PAGE);
  const paginatedUsers = usersData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="space-y-3">
      <UsersFilter
        updateSearchTxt={updateSearchTxt}
        updateStatus={updateStatus}
      />

      {/* Data */}
      <Table className="bg-white rounded-xl overflow-hidden inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark">
            <TableHead className="pl-4 py-4">User</TableHead>
            <TableHead className="py-4">Email Address</TableHead>
            <TableHead className="py-4">Job Title</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Location</TableHead>
            <TableHead className="py-4">Joined Date</TableHead>
            <TableHead className="py-4 w-40">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedUsers.length > 0 ? (
            paginatedUsers.map((user) => (
              <TableRow
                key={user.applicantId}
                className="hover:bg-black/5 transition-colors">
                {/* User */}
                <TableCell className="pl-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-input-bg flex items-center justify-center overflow-hidden">
                      {user.profilePic ? (
                        <img
                          src={user.profilePic}
                          alt={user.fullName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={userImage.src}
                          alt={user.fullName}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div>
                      <p className="font-medium text-sm">{user.fullName}</p>
                    </div>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell>
                  <p className="text-sm text-black/70 max-w-50 overflow-hidden text-ellipsis">
                    {user.email}
                  </p>
                </TableCell>
                {/* Job Title */}
                <TableCell>
                  <p
                    title={user.jobTitle ?? "Not Specified Yet"}
                    className="text-sm text-black/70 max-w-50 overflow-hidden text-ellipsis">
                    {user.jobTitle ?? "Not Specified Yet"}
                  </p>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <UserStatusBadge isBlocked={user.isBlocked} />
                </TableCell>

                {/* Location */}
                <TableCell>
                  <p className="text-sm">{user.location}</p>
                </TableCell>

                {/* Joined Date */}
                <TableCell>
                  <p className="text-sm text-black/70">
                    {formatDate(user.joinedDate)}
                  </p>
                </TableCell>

                {/* Action */}
                <TableCell>
                  <ShowUserDetails token={token} userId={user.applicantId} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="p-5 text-center text-black/70 font-medium">
                No users found..
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={usersData.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
}
