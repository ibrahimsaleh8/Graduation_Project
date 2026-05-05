import { ChevronsLeftRight } from "lucide-react";
type Props = {
  sortFn: () => void;
  label: string;
};

export default function TableReSortData({ sortFn, label }: Props) {
  return (
    <button
      onClick={sortFn}
      className="flex items-center gap-3 justify-between w-full cursor-pointer">
      {label}
      <span>
        <ChevronsLeftRight className="size-4 rotate-90" />
      </span>
    </button>
  );
}
