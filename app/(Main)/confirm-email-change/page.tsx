import { Suspense } from "react";
import ShowConfirmEmailChangesForm from "./_components/ShowConfirmEmailChangesForm";
import { Metadata } from "next";
import { Spinner } from "@/components/ui/spinner";
export const metadata: Metadata = {
  title: "Confirm Change Email",
};
export default function ConfirmEmailChange() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen flex items-center justify-center">
          <Spinner />
        </div>
      }>
      <ShowConfirmEmailChangesForm />;
    </Suspense>
  );
}
