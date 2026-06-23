import {
  DiscountCouponFormType,
  discountCouponSchema,
} from "@/validations/DiscountCouponSchema";
import { DiscountCodeDataType } from "../ShowCupons";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";

type Props = {
  operation: "create" | "update";
  token: string;
  couponData?: DiscountCodeDataType;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function CouponOperationAPIS(
  token: string,
  operation: "create" | "update",
  couponData: DiscountCouponFormType,
  id?: string,
) {
  const data = {
    code: couponData.couponCode,
    percentage: couponData.discountValue,
    totalUsageLimit: couponData.totalUsageLimit,
    isActive: couponData.isActive,
    SubscriptionPlanIds: couponData.applicablePlans,
  };

  if (operation == "create") {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Coupon`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  }
  if (!id) return;

  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Coupon/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export const useCouponForm = ({
  operation,
  token,
  couponData,
  setOpen,
}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<DiscountCouponFormType>({
    resolver: zodResolver(discountCouponSchema),
    mode: "onSubmit",
    defaultValues: {
      applicablePlans: couponData?.applicablePlans ?? [],
      isActive: couponData?.isActive ?? true,
      totalUsageLimit: couponData?.totalUsageLimit ?? 0,
      discountValue: couponData?.percentage ?? 0,
      couponCode: couponData?.code ?? "",
    },
  });

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: DiscountCouponFormType) =>
      CouponOperationAPIS(token, operation, data, couponData?.id),

    onSuccess: () => {
      if (operation == "update") {
        queryClient.setQueryData(
          ["coupons"],
          (oldData: DiscountCodeDataType[] | undefined) => {
            if (!oldData) return;
            const newData: DiscountCodeDataType[] = oldData.map((code) => {
              if (code.id == couponData?.id) {
                return {
                  ...code,
                  applicablePlans: getValues("applicablePlans"),
                  code: getValues("couponCode"),
                  isActive: getValues("isActive"),
                  percentage: getValues("discountValue"),
                  totalUsageLimit: getValues("totalUsageLimit"),
                };
              }
              return code;
            });
            return newData;
          },
        );
      } else {
        queryClient.refetchQueries({ queryKey: ["coupons"] });
      }

      if (setOpen) setOpen(false);
      sileo.success({
        title: `Coupon ${operation == "create" ? "created" : "updated"} successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to ${operation} coupon`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const onSubmit: SubmitHandler<DiscountCouponFormType> = (data) => {
    mutate(data);
    console.log(data);
  };

  const HandleAddPlan = (id: string, name: string) => {
    if (getValues("applicablePlans").findIndex((pl) => pl.id == id) == -1) {
      setValue("applicablePlans", [
        ...getValues("applicablePlans"),
        { id, name },
      ]);
    } else {
      setValue("applicablePlans", [
        ...getValues("applicablePlans").filter((p) => p.id != id),
      ]);
    }
  };

  const generateCouponCode = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let coupon = "";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      coupon += chars[randomIndex];
    }

    setValue("couponCode", coupon);
  };
  return {
    register,
    handleSubmit,
    watch,
    generateCouponCode,
    HandleAddPlan,
    onSubmit,
    isPending,
    errors,
    setValue,
    getValues,
  };
};
