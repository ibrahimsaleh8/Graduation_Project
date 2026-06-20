import axios, { AxiosError } from "axios";
import DeleteBtnWithVerfication from "../../_components/DeleteBtnWithVerfication";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { Dispatch, SetStateAction } from "react";
type Props = {
  userId: string;
  token: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

async function deleteUser({
  token,
  userId,
}: {
  userId: string;
  token: string;
}) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res.data;
}

export default function DeleteUser({ token, userId, setOpen }: Props) {
  const queryClinet = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteUser({ token, userId }),
    onSuccess: () => {
      queryClinet.refetchQueries({
        queryKey: ["all-users-admin-dashboard"],
      });
      queryClinet.refetchQueries({
        queryKey: ["admin-dashboard-overview"],
      });
      setOpen(false);
      sileo.success({
        title: `user deleted successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to delete user`,
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
