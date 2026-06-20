export default function SubscriptionBadge({
  subscription,
}: {
  subscription: string;
}) {
  return (
    <p
      className={`text-xs px-3 bg-input-bg text-black py-1 w-fit rounded-md font-medium border border-black/10`}>
      {subscription}
    </p>
  );
}
