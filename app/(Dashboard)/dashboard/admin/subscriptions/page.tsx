import { cookies } from "next/headers";
import DisplaySubscriptionPage from "./_components/DisplaySubscriptionPage";

export default async function SubscriptionsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <DisplaySubscriptionPage token={token?.value ?? ""} />;
}
