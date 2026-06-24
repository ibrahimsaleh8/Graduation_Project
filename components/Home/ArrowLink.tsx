import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
type Props = {
  link: string;
  label: string;
};
export default function ArrowLink({ label, link }: Props) {
  return (
    <Link href={link} className="flex items-center group">
      <span className="md:px-8 px-10 py-2.5 bg-main-color text-white rounded-xl group-hover:bg-main-color/80">
        {label}
      </span>
      <span className="px-2 py-2.5 bg-main-color group-hover:bg-main-color/80 text-white rounded-xl relative size-10.5 overflow-hidden">
        <ArrowUpRight className="size-5.5 absolute left-1/2 top-1/2 -translate-y-1/2 group-hover:-top-full duration-500 group-hover:left-[190%] -translate-x-1/2" />
        <ArrowUpRight className="size-5.5 absolute -left-full top-[190%] group-hover:left-1/2 group-hover:top-1/2 -translate-y-1/2 duration-500 -translate-x-1/2" />
      </span>
    </Link>
  );
}
