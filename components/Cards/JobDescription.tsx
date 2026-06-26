type Props = {
  jobdesc: string;
  responsibility: string;
  skills: string[];
};
export default function JobDescription({
  jobdesc,
  responsibility,
  skills,
}: Props) {
  return (
    <div className="space-y-9">
      {/* About */}
      <div className="flex flex-col gap-2">
        <p className="font-medium text-lg">About this role</p>
        <div
          className="text-sm  ProseMirror"
          dangerouslySetInnerHTML={{
            __html: jobdesc,
          }}
        />
      </div>

      {/* Responsibility */}
      <div className="flex flex-col gap-2">
        <p className="font-medium text-lg">Responsibility</p>
        <div
          className="text-sm  ProseMirror"
          dangerouslySetInnerHTML={{
            __html: responsibility,
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-medium text-lg">Required Skills</p>
        <div className="flex items-center gap-2 flex-wrap">
          {skills.map((skill) => (
            <p
              className="px-2 py-1 bg-input-bg text-black text-sm border rounded-md w-fit"
              key={skill}>
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
