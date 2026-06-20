import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  CheckmarkCircle02Icon,
  UnavailableIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { CompanyStatusDataType } from "./ShowAllCompaniesForAdmin";
import { CompanyDetailsDataType } from "./ShowCompanyDetails";

type Props = {
  companyId: string;
  token: string;
  status: CompanyStatusDataType;
};
async function updateCompanyStatus({ token, companyId, status }: Props) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/companies/${companyId}/${status == "Blocked" ? "unblock" : "block"}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function BlockCompany({ companyId, status, token }: Props) {
  const buttonStyles =
    status == "Blocked"
      ? "bg-green-600 hover:bg-green-700 text-white"
      : "bg-yellow-400 hover:bg-yellow-500 text-black";

  const queryClinet = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => updateCompanyStatus({ companyId, status, token }),
    onSuccess: () => {
      queryClinet.setQueryData(
        ["company-details-for-admin", companyId],
        (oldData: CompanyDetailsDataType | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            status: status == "Blocked" ? "Active" : "Blocked",
          };
        },
      );

      queryClinet.refetchQueries({
        queryKey: ["all-companies-admin-dashboard"],
      });

      sileo.success({
        title: `Company ${status == "Blocked" ? "unblocked" : "blocked"} successfully`,
        description: `${status == "Blocked" ? "Now company can't login to his account" : "Now company can login & use his account"}`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to ${status == "Blocked" ? "unblocked" : "blocked"} company`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  return (
    <Button
      onClick={() => mutate()}
      disabled={isPending}
      className={`text-sm h-10 flex-1 ${buttonStyles}`}>
      {isPending ? (
        <Spinner />
      ) : (
        <>
          <HugeiconsIcon
            icon={status == "Blocked" ? CheckmarkCircle02Icon : UnavailableIcon}
            className="size-5!"
            strokeWidth={2}
          />{" "}
          {status == "Blocked" ? "Unblock Company" : "Block Company"}
        </>
      )}
    </Button>
  );
}
