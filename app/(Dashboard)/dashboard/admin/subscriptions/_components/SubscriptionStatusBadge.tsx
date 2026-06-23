type Props = {
  isActive: boolean;
};
export default function SubscriptionStatusBadge({ isActive }: Props) {
  const statusClasses = !isActive ? "bg-red-700" : "bg-green-700";
  return (
    <p
      className={`font-medium px-2 py-1.5 ${statusClasses} text-white text-xs rounded-md w-fit`}>
      {!isActive ? "Expired" : "Active"}
    </p>
  );
}
