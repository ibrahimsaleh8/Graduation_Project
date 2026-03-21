type Props = {
  title: string;
};
export default function SkillCard({ title }: Props) {
  return (
    <div className="py-2 px-4 bg-white border text-black rounded-sm w-fit flex items-center gap-3">
      <p className="text-sm">{title}</p>
    </div>
  );
}
