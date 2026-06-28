"use client";

import Link from "next/link";
import { useEffect } from "react";
import errorImage from "@images/Error-happend-image.png";
import Image from "next/image";
export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="w-full min-h-screen flex flex-col gap-3 items-center justify-center text-3xl font-medium">
      <Image
        src={errorImage}
        alt="Error Image"
        width={1000}
        height={1000}
        className="sm:w-100"
      />
      <h2>Something went wrong!</h2>
      {error.message && <p>{error.message}</p>}
      <div className="flex items-center gap-4 flex-wrap justify-center mt-4">
        <Link
          href="/"
          className="px-6 py-2 bg-main-color text-white w-fit rounded-md text-sm">
          Return Home
        </Link>
        <button
          className="px-6 py-2 text-sm bg-main-dark text-white rounded-md cursor-pointer hover:bg-main-dark/80"
          onClick={() => unstable_retry()}>
          Try again
        </button>
      </div>
    </div>
  );
}
