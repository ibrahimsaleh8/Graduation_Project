import { X } from "lucide-react";

type Props = {
  title: string;
  DeleteSkill: (title: string) => void;
};
export default function SkillCardWithOperations({ title, DeleteSkill }: Props) {
  return (
    <div className="py-1.5 px-4 bg-white border text-black rounded-sm w-fit flex items-center gap-3">
      <p className="text-sm">{title}</p>
      <button
        onClick={() => DeleteSkill(title)}
        className="cursor-pointer hover:text-red-500"
        title="Delete">
        <X className="size-3.5" />
      </button>
    </div>
  );
}
