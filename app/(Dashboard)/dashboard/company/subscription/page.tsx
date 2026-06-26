import { redirect } from "next/navigation";
import PaymentMessage from "./_components/PaymentMessage";

export default async function SubscriptionPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  if (!params.isSuccess) {
    redirect("/dashboard/company");
  }
  return <PaymentMessage />;
}
