export default function UserStatusBadge({ isBlocked }: { isBlocked: boolean }) {
  const statusClasses = isBlocked
    ? "bg-yellow-600 text-white"
    : "bg-green-700 text-white";
  return (
    <p className={`${statusClasses} px-2 py-1.5 w-fit rounded-sm text-xs`}>
      {isBlocked ? "Blocked" : "Active"}
    </p>
  );
}
