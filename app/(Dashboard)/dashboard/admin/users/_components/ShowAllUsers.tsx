"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableReSortData from "@/components/buttons/TableReSortData";

import companyImage from "@images/HR.png";
import UsersFilter from "./UsersFilter";
import ShowUserDetails from "./ShowUserDetails";

const initialUsersData = [
  {
    id: 1,
    name: "Ibrahim Saleh",
    email: "ibrahim@gmail.com",
    location: "Cairo, Egypt",
    joinedDate: "May 3, 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    email: "ahmed@gmail.com",
    location: "Giza, Egypt",
    joinedDate: "Apr 28, 2026",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sarah Ali",
    email: "sarah@gmail.com",
    location: "Alexandria, Egypt",
    joinedDate: "Apr 22, 2026",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Mohamed Tarek",
    email: "mohamed@gmail.com",
    location: "Mansoura, Egypt",
    joinedDate: "Apr 18, 2026",
    status: "Active",
  },
  {
    id: 5,
    name: "Mariam Adel",
    email: "mariam@gmail.com",
    location: "Remote",
    joinedDate: "Apr 12, 2026",
    status: "Pending",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Blocked: "bg-red-100 text-red-700",
};

export default function ShowAllUsers() {
  const [users, setUsers] = useState(initialUsersData);
  const [isAsc, setIsAsc] = useState(true);

  const sortBy = (method: "name" | "location" | "joined_date") => {
    const sorted = [...users].sort((a, b) => {
      if (method === "name") {
        return isAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      if (method === "location") {
        return isAsc
          ? a.location.localeCompare(b.location)
          : b.location.localeCompare(a.location);
      }

      if (method === "joined_date") {
        return isAsc
          ? new Date(a.joinedDate).getTime() - new Date(b.joinedDate).getTime()
          : new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime();
      }

      return 0;
    });

    setUsers(sorted);
    setIsAsc(!isAsc);
  };

  return (
    <div className="space-y-3">
      <UsersFilter />

      {/* Data */}
      <Table className="bg-white rounded-xl overflow-hidden inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark">
            <TableHead className="pl-4 py-4">
              <TableReSortData label="User" sortFn={() => sortBy("name")} />
            </TableHead>

            <TableHead className="py-4">Email Address</TableHead>
            <TableHead className="py-4">Job Title</TableHead>

            <TableHead className="py-4">Status</TableHead>

            <TableHead className="py-4">
              <TableReSortData
                label="Location"
                sortFn={() => sortBy("location")}
              />
            </TableHead>

            <TableHead className="py-4">
              <TableReSortData
                label="Joined Date"
                sortFn={() => sortBy("joined_date")}
              />
            </TableHead>

            <TableHead className="py-4 w-40">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className="hover:bg-black/5 transition-colors">
              {/* User */}
              <TableCell className="pl-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-input-bg flex items-center justify-center overflow-hidden">
                    <Image
                      src={companyImage}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-medium text-sm">{user.name}</p>
                  </div>
                </div>
              </TableCell>

              {/* Email */}
              <TableCell>
                <p className="text-sm text-black/70 max-w-50 overflow-hidden text-ellipsis">
                  {user.email}asdasdasdasdasdasd
                </p>
              </TableCell>
              {/* Job Title */}
              <TableCell>
                <p className="text-sm text-black/70 max-w-50 overflow-hidden text-ellipsis">
                  Frontend Developer
                </p>
              </TableCell>

              {/* Status */}
              <TableCell>
                <div
                  className={`px-4 py-2 rounded-lg text-xs font-medium w-fit flex items-center gap-2 ${
                    statusStyles[user.status]
                  }`}>
                  <span
                    className={`size-1.5 rounded-full ${
                      user.status === "Active"
                        ? "bg-green-600"
                        : user.status === "Pending"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                    }`}
                  />

                  {user.status}
                </div>
              </TableCell>

              {/* Location */}
              <TableCell>
                <p className="text-sm">{user.location}</p>
              </TableCell>

              {/* Joined Date */}
              <TableCell>
                <p className="text-sm text-black/70">{user.joinedDate}</p>
              </TableCell>

              {/* Action */}
              <TableCell>
                <ShowUserDetails />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
