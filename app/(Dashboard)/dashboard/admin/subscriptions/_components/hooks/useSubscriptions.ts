import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useMemo, useState } from "react";

type Props = {
  token: string;
};
export type SubscriptionsDataType = {
  id: string;
  companyName: string;
  planName: string;
  logoUrl: string;
  billingCycle: "Monthly" | "Yearly";
  paidAmount: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
};

async function getSubscriptions(
  token: string,
): Promise<SubscriptionsDataType[]> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Subscription`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export const useSubscriptions = ({ token }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [planFilter, setPlanFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "expired"
  >("all");

  const UpdateSerchTxt = (value: string) => {
    setSearchText(value);
  };
  const UpdatePlanFilter = (value: string) => {
    setPlanFilter(value);
  };
  const UpdateStatusFilter = (value: "all" | "active" | "expired") => {
    setStatusFilter(value);
  };

  const { error, isLoading, data } = useQuery<
    SubscriptionsDataType[],
    AxiosError<{ message: string }>
  >({
    queryKey: ["subscriptions"],
    queryFn: () => getSubscriptions(token),
  });

  const subscriptions = useMemo(() => {
    if (data == undefined) return undefined;
    if (data.length == 0) return [];
    let filteredSubscriptions = data;

    if (statusFilter !== "all") {
      filteredSubscriptions = filteredSubscriptions.filter((subscription) =>
        statusFilter == "active"
          ? subscription.isActive == true
          : subscription.isActive == false,
      );
    }
    if (planFilter !== "all") {
      filteredSubscriptions = filteredSubscriptions.filter(
        (subscription) => subscription.planName == planFilter,
      );
    }

    if (searchText.trim() !== "") {
      filteredSubscriptions = filteredSubscriptions.filter((subscription) =>
        subscription.companyName
          .toLowerCase()
          .includes(searchText.toLowerCase()),
      );
    }
    return filteredSubscriptions;
  }, [data, planFilter, searchText, statusFilter]);

  return {
    subscriptions,
    error,
    isLoading,
    UpdateStatusFilter,
    UpdatePlanFilter,
    UpdateSerchTxt,
  };
};
