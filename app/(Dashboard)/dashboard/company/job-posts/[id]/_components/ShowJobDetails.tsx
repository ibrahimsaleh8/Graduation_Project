type Props = {
  description: string;
  responsibility: string;
  requiredSkill: string[];
};
export default function ShowJobDetails({
  description,
  responsibility,
  requiredSkill,
}: Props) {
  return (
    <div className="space-y-7 w-full">
      {/* Description */}
      <div className="space-y-3 border-b pb-8">
        <p className="text-xl font-medium text-black/60">Description</p>
        <div
          className="text-sm  ProseMirror"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>

      {/* Responsibilities */}
      <div className="space-y-3 border-b pb-8">
        <p className="text-xl font-medium text-black/60">Responsibilities</p>
        <div
          className="text-sm  ProseMirror"
          dangerouslySetInnerHTML={{
            __html: responsibility,
          }}
        />
      </div>

      {/* Skills */}
      <div className="space-y-3 ">
        <p className="text-xl font-medium text-black/60">Required Skills</p>
        <div className="flex items-center gap-3 flex-wrap">
          {requiredSkill.map((skill) => (
            <p
              key={skill}
              className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
