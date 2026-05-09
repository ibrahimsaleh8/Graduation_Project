type Props = {
  value: string;
  label: string;
};
export default function UserProfileStatistics({ label, value }: Props) {
  return (
    <div className="bg-input-bg border rounded-md p-3 text-center">
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-xs text-black/60">{label}</p>
    </div>
  );
}
