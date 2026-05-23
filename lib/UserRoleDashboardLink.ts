export const UserRoleDashboardLink = (role: string) => {
  if (role == "APPLICANT") {
    return "/dashboard/employee";
  } else if (role == "COMPANY") {
    return "/dashboard/company";
  } else if (role == "ADMIN") {
    return "/dashboard/admin";
  }
};
