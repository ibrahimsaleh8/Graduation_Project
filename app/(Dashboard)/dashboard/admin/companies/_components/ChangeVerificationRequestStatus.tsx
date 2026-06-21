import { Button } from "@/components/ui/button";
import {
  Cancel01Icon,
  CheckmarkCircle03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { VerificationRequestStatusDataType } from "./hooks/useVerificationRequest";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { CompanyVerificationDetails } from "./ShowVerificationRequestDetails";
import { Spinner } from "@/components/ui/spinner";
type Props = {
  token: string;
  id: string;
  status: VerificationRequestStatusDataType;
  operation: "approve" | "reject";
};

async function ChangeStatusVerificationReqAPI(
  token: string,
  id: string,
  operation: "approve" | "reject",
) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/verification-requests/${id}/${operation}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ChangeVerificationRequestStatus({
  id,
  status,
  token,
  operation,
}: Props) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => ChangeStatusVerificationReqAPI(token, id, operation),
    onSuccess: () => {
      queryClient.setQueryData(
        ["verification-request-details", id],
        (oldData: CompanyVerificationDetails | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            status: operation == "approve" ? "Approved" : "Rejected",
          };
        },
      );

      queryClient.refetchQueries({
        queryKey: ["all-verification-requests"],
      });

      sileo.success({
        title: `Verification request has been ${operation == "approve" ? "approved" : "rejected"}`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to ${operation} verification request`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  return (
    <Button
      onClick={() => {
        mutate();
      }}
      disabled={
        (operation == "approve"
          ? status == "Approved"
          : status == "Rejected") || isPending
      }
      className={`text-[0.83rem] h-10 flex-1 capitalize ${operation == "approve" ? "bg-green-600 hover:bg-green-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}>
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <HugeiconsIcon
            icon={operation == "approve" ? CheckmarkCircle03Icon : Cancel01Icon}
            strokeWidth={2}
          />
          {`${operation} Verification`}
        </>
      )}
    </Button>
  );
}
