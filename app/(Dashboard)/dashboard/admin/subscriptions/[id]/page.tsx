import { cookies } from "next/headers";
import DisplaySubscriptionDetails from "./_components/DisplaySubscriptionDetails";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Subscription Details",
};

export default async function SubscriptionDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <DisplaySubscriptionDetails id={id} token={token?.value ?? ""} />;
}
