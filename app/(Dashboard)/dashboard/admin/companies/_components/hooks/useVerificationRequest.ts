import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useMemo, useState } from "react";

type Props = {
  token: string;
};

export type VerificationRequestStatusDataType =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "NeedsMoreInformation";

export type CompanyVerificationRequest = {
  id: string;
  companyName: string;
  location: string;
  email: string;
  logo: string;
  industry: string;
  status: VerificationRequestStatusDataType;
  documentsLenght: number;
  createdAt: string;
};

async function getVerificationRequestsApi(token: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/verification-requests`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export const useVerificationRequest = ({ token }: Props) => {
  const { error, isLoading, data } = useQuery<
    CompanyVerificationRequest[],
    AxiosError<{ message: string }>
  >({
    queryKey: ["all-verification-requests"],
    queryFn: () => getVerificationRequestsApi(token),
  });
  const [searchTxt, setSearchTxt] = useState("");
  const [verificationStatus, setVerificationStatus] = useState<
    "All" | VerificationRequestStatusDataType
  >("All");

  const verificationRequests = useMemo(() => {
    if (!data) return undefined;
    let filteredRequests = data;

    if (verificationStatus !== "All") {
      filteredRequests = filteredRequests.filter(
        (request) => request.status == verificationStatus,
      );
    }

    if (searchTxt.trim() !== "") {
      filteredRequests = filteredRequests.filter(
        (request) =>
          request.companyName.toLowerCase().includes(searchTxt.toLowerCase()) ||
          request.email.toLowerCase().includes(searchTxt.toLowerCase()),
      );
    }
    return filteredRequests;
  }, [data, searchTxt, verificationStatus]);

  const updateSearchTxt = (value: string) => {
    setSearchTxt(value);
  };
  const updateStatus = (value: "All" | VerificationRequestStatusDataType) => {
    setVerificationStatus(value);
  };

  return {
    error,
    isLoading,
    verificationRequests,
    updateSearchTxt,
    updateStatus,
  };
};
