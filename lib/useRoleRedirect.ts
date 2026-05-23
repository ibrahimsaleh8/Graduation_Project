import { useRouter } from "next/navigation";

export const useRoleRedirect = () => {
  const route = useRouter();
  const redirectRole = (role: string) => {
    if (role == "APPLICANT") {
      route.replace(`/dashboard/employee`);
    } else if (role == "COMPANY") {
      route.replace(`/dashboard/company`);
    } else if (role == "ADMIN") {
      route.replace(`/dashboard/admin`);
    }
  };

  return { redirectRole };
};
