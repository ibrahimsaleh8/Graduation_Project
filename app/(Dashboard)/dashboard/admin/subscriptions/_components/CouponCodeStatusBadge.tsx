type Props = {
  isActive: boolean;
};
export default function CouponCodeStatusBadge({ isActive }: Props) {
  return (
    <p
      className={`px-2 py-1.5 text-xs ${isActive ? "bg-green-700" : "bg-red-700"}  text-white rounded-sm`}>
      {isActive ? "Active" : "Not Active"}
    </p>
  );
}
