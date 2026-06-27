"use server";

import { InitialUserDetailsDataType } from "@/hooks/useInitializeUserData";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const DashboardAuthGuard = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    redirect("/");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Auth/user-details`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    },
  );

  if (!res.ok) {
    redirect("/");
  }

  const userData: InitialUserDetailsDataType | null = await res.json();
  if (!userData) {
    redirect("/");
  }
  return {
    role: userData.roles[0],
    token: token.value,
  };
};
