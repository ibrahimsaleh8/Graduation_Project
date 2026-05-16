import React from "react";
import UpdateAdminPassword from "./UpdateAdminPassword";
import UpdateAdminEmailSettings from "./UpdateAdminEmailSettings";

export default function ManageAdminSecurtiyProfile() {
  return (
    <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
      <UpdateAdminPassword />
      <UpdateAdminEmailSettings />
    </div>
  );
}
