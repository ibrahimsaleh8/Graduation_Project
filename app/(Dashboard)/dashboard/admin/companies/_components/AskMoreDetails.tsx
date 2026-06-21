import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { sileo } from "sileo";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import { CompanyVerificationDetails } from "./ShowVerificationRequestDetails";
type Props = {
  setAskMoreDetails: Dispatch<SetStateAction<boolean>>;
  token: string;
  id: string;
};

async function AskMoreDocumentsApi(token: string, id: string, notes: string) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/verification-requests/${id}/request-more-information`,
    { notes },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function AskMoreDetails({
  id,
  setAskMoreDetails,
  token,
}: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [showMessage, setShowMessage] = useState(false);

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (notes: string) => AskMoreDocumentsApi(token, id, notes),
    onSuccess: () => {
      queryClient.setQueryData(
        ["verification-request-details", id],
        (oldData: CompanyVerificationDetails | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            status: "NeedsMoreInformation",
            notes: textAreaRef.current?.value,
          };
        },
      );

      queryClient.refetchQueries({
        queryKey: ["all-verification-requests"],
      });

      sileo.success({
        title: "Details has been submitted",
        description: "Your requested details has been sent to company",
      });
      setAskMoreDetails(false);
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to ask more details `,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const HandleSendForMoreDetails = () => {
    if (!textAreaRef.current) return;
    if (textAreaRef.current.value.trim().length < 5) {
      setShowMessage(true);
      textAreaRef.current.classList.add("border-red-500");
    } else {
      textAreaRef.current.classList.remove("border-red-500");
      mutate(textAreaRef.current.value);
      setShowMessage(false);
    }
  };
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor="needed-documents">Write Needed Documents</Label>
        <Textarea
          ref={textAreaRef}
          id="needed-documents"
          className="h-30 bg-input-bg border border-border-color"
          placeholder="Needed Documents Descriptions"
        />
      </div>
      {showMessage && (
        <p className="text-xs text-red-500">
          *Please Write Detials more than 5 chars
        </p>
      )}
      <Button
        disabled={isPending}
        onClick={HandleSendForMoreDetails}
        className="text-[0.83rem] w-32 h-10 mt-3 bg-main-color hover:bg-main-color/90 text-white">
        {isPending ? <Spinner /> : "Send"}
      </Button>
    </div>
  );
}
