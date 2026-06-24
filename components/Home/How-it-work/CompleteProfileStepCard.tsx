import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
type Props = {
  image: StaticImport;
  title: string;
};
export default function CompleteProfileStepCard({ image, title }: Props) {
  return (
    <div className="flex items-center gap-3 flex-wrap justify-between w-full">
      <div className="flex items-center gap-2">
        <div className="size-13 bg-white rounded-xl flex items-center justify-center">
          <Image src={image} alt={title} className="md:w-8 w-4" />
        </div>
        <p className="md:text-base text-sm">{title}</p>
      </div>

      <HugeiconsIcon
        icon={CheckmarkCircle02Icon}
        className="md:size-10 size-5 fill-green-700 text-white"
      />
    </div>
  );
}
