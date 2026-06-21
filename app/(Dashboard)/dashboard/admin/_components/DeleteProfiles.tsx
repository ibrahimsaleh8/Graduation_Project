import axios, { AxiosError } from "axios";
import DeleteBtnWithVerfication from "./DeleteBtnWithVerfication";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { Dispatch, SetStateAction } from "react";
type Props = {
  id: string;
  token: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  profile: "user" | "company";
};

async function deleteApi({
  token,
  id,
  profile,
}: {
  id: string;
  token: string;
  profile: "user" | "company";
}) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/${profile == "user" ? "user" : "companies"}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res.data;
}

export default function DeleteProfiles({ token, id, setOpen, profile }: Props) {
  const queryClinet = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteApi({ token, id, profile }),
    onSuccess: () => {
      if (profile == "user") {
        queryClinet.refetchQueries({
          queryKey: ["all-users-admin-dashboard"],
        });
      } else {
        queryClinet.refetchQueries({
          queryKey: ["all-companies-admin-dashboard"],
        });
      }
      queryClinet.refetchQueries({
        queryKey: ["admin-dashboard-overview"],
      });
      setOpen(false);
      sileo.success({
        title: `${profile} deleted successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to delete ${profile}`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  return (
    <DeleteBtnWithVerfication
      isPending={isPending}
      deleteFn={() => {
        mutate();
      }}
    />
  );
}
