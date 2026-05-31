type Props = {
  aboutMe: string;
};
export default function ProfileAbout({ aboutMe }: Props) {
  return (
    <div className="w-full p-5 rounded-md border border-border-color bg-white space-y-4">
      <p className="font-medium pb-2 border-b">About</p>

      <div
        className="text-sm ProseMirror"
        dangerouslySetInnerHTML={{
          __html: aboutMe,
        }}
      />
    </div>
  );
}
