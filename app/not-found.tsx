import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-3 items-center justify-center">
      <p className="text-9xl font-medium">404</p>
      <h2 className="text-4xl">Page Not Found</h2>
      <p>Could not find requested page</p>
      <Link
        href="/"
        className="px-6 py-2 bg-main-color text-white w-fit rounded-md text-sm">
        Return Home
      </Link>
    </div>
  );
}
