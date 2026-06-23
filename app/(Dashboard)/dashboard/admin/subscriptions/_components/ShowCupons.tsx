import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import DiscountCuponCard from "./DiscountCuponCard";
import DiscountCouponForm from "./DiscountCouponForm";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import ShowCuponsSkeleton from "./ShowCuponsSkeleton";

type Props = {
  token: string;
  plans: {
    name: string;
    id: string;
  }[];
};

export type DiscountCodeDataType = {
  id: string;
  code: string;
  percentage: number;
  totalUsageLimit: number;
  usedCount: number;
  isActive: boolean;
  applicablePlans: { id: string; name: string }[];
};

async function getCouponsApi(token: string): Promise<DiscountCodeDataType[]> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Coupon`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowCupons({ token, plans }: Props) {
  const { error, isLoading, data } = useQuery<
    DiscountCodeDataType[],
    AxiosError<{ message: string }>
  >({
    queryKey: ["coupons"],
    queryFn: () => getCouponsApi(token),
  });
  if (error) {
    console.log("error", error.response);
    const errorMessage =
      error.response?.data.message ?? error.response?.statusText;
    return (
      <ErrorDashboardMessage
        statusCode={error.response?.status}
        errorMessage={errorMessage ?? "Something Went Wrong"}
      />
    );
  }

  return isLoading ? (
    <ShowCuponsSkeleton />
  ) : (
    data && (
      <div>
        {/* Top */}
        <div className="flex items-center justify-between gap-4 flex-wrap px-5">
          <p className="font-medium">Coupons & Discounts</p>
          <AlertModel
            title="Create New Code"
            trigger={
              <Button className="text-xs h-9.5 w-full md:w-fit bg-main-color text-white justify-center md:justify-start hover:bg-main-color/80 hover:text-white gap-1.5">
                <HugeiconsIcon
                  icon={Add01Icon}
                  className="size-4.5"
                  strokeWidth={2}
                />
                Create New Code
              </Button>
            }
            content={
              <DiscountCouponForm
                operation="create"
                plans={plans}
                token={token}
              />
            }
            contentClassname="md:min-w-150 pb-3"
          />
        </div>

        {/* Coupons */}
        {data.length > 0 ? (
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-6 gap-4">
            {data.map((code) => (
              <DiscountCuponCard
                key={code.id}
                plans={plans}
                token={token}
                codeData={code}
              />
            ))}
          </div>
        ) : (
          <>No Coupons Codes Found</>
        )}
      </div>
    )
  );
}
