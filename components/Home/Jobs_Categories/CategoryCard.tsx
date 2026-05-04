"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  isLast: boolean;
};

export default function CategoryCard({
  image,
  title,
  description,
  isLast,
}: Props) {
  return (
    <div className="category-card w-screen h-screen bg-white px-30 overflow-hidden flex items-center justify-between gap-10">
      {/* Texts */}
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-bold">{title}</h2>
        <p className="text-xl">{description}</p>
        {isLast && (
          <Link
            href={"/jobs"}
            className="px-10 hover:bg-black/80 py-4 mt-8 flex w-fit mx-auto bg-black text-white font-medium text-sm rounded-md">
            Search Jobs
          </Link>
        )}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className={`w-full`}
        />
      </div>
    </div>
  );
}
