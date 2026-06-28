import { cookies } from "next/headers";
import DisplaySubscriptionPage from "./_components/DisplaySubscriptionPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Subscriptions",
};
export default async function SubscriptionsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <DisplaySubscriptionPage token={token?.value ?? ""} />;
}
