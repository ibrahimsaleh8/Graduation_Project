import { DashboardAuthGuard } from "@/lib/DashboardAuthGuard";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import UpdateCanSeeCandidatesPage from "./_components/UpdateCanSeeCandidatesPage";

export default async function Layout({ children }: { children: ReactNode }) {
  const { role, token } = await DashboardAuthGuard();
  if (role != "COMPANY") {
    if (role == "ADMIN") {
      redirect(`/dashboard/admin`);
    } else if (role == "APPLICANT") {
      redirect(`/dashboard/employee`);
    }
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Company/has-candidate-search`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const canShowCandidatePage: {
    hasCandidatesSearch: boolean;
  } = await res.json();

  return (
    <UpdateCanSeeCandidatesPage
      hasCandidatesSearch={canShowCandidatePage.hasCandidatesSearch}>
      {children}
    </UpdateCanSeeCandidatesPage>
  );
}
