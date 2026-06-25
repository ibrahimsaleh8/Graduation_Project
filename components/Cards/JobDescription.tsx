type Props = {
  jobdesc: string;
  responsibility: string;
};
export default function JobDescription({ jobdesc, responsibility }: Props) {
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
    </div>
  );
}
