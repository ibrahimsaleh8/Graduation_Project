import { Metadata } from "next";
import ResetPassword from "./_components/ResetPassword";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Reset Password",
};
export default function ResetPassworPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen flex items-center justify-center">
          <Spinner />
        </div>
      }>
      <ResetPassword />
    </Suspense>
  );
}
