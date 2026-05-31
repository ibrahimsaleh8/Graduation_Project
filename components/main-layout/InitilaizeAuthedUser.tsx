"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUserStore } from "@/lib/UserStore";
import { useEffect } from "react";

type fetchingResponse = {
  message: string;
  data: {
    isSuccess: boolean;
    userData: InitialUserDetailsDataType | null;
  };
};

export type InitialUserDetailsDataType = {
  userId: string;
  email: string;
  roles: string[];
  photoUrl: string;
};

async function getInitializeUser(): Promise<fetchingResponse> {
  const res = await axios.get(`/api/user-details`);
  return res.data;
}

export default function InitilaizeAuthedUser() {
  const { data, error } = useQuery({
    queryKey: ["initial-user"],
    queryFn: getInitializeUser,
  });
  const { setUserData, clearUserData } = useUserStore();
  useEffect(() => {
    if (data && data?.data.userData) {
      setUserData({
        email: data.data.userData.email,
        role: data.data.userData.roles[0],
        userId: data.data.userData.userId,
        photoUrl: data.data.userData.photoUrl,
      });
    }
    if (error) {
      clearUserData();
    }
  }, [clearUserData, data, error, setUserData]);

  return null;
}
