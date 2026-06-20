import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { UserBlock02Icon, UserCheck01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { ApplicantProfileResponseDataType } from "./ShowUserDetailsById";

type Props = {
  userId: string;
  token: string;
  isBlocked: boolean;
};

async function updateUserStatus({ userId, isBlocked, token }: Props) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/users/${userId}/${isBlocked ? "unblock" : "block"}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function BlockAndUnBlockUser({
  isBlocked,
  token,
  userId,
}: Props) {
  const buttonStyles = isBlocked
    ? "bg-green-600 hover:bg-green-700 text-white"
    : "bg-yellow-400 hover:bg-yellow-500 text-black";

  const queryClinet = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => updateUserStatus({ isBlocked, token, userId }),
    onSuccess: () => {
      queryClinet.setQueryData(
        ["user-details", userId],
        (oldData: ApplicantProfileResponseDataType | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            isBlocked: !isBlocked,
          };
        },
      );

      queryClinet.refetchQueries({
        queryKey: ["all-users-admin-dashboard"],
      });

      sileo.success({
        title: `user ${isBlocked ? "unblocked" : "blocked"} successfully`,
        description: `${isBlocked ? "Now user can't login to his account" : "Now user can login & use his account"}`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to ${isBlocked ? "unblocked" : "blocked"} user`,
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
            icon={isBlocked ? UserCheck01Icon : UserBlock02Icon}
            className="size-5!"
          />{" "}
          {isBlocked ? "Unblock User" : "Block User"}
        </>
      )}
    </Button>
  );
}
