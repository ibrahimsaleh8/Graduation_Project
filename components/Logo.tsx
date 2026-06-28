import Image from "next/image";
import Link from "next/link";
import logo from "@images/Logo.png";
type Props = {
  size: "small" | "large";
  classes?: string;
};
export default function Logo({ size, classes }: Props) {
  return (
    <Link href={"/"} className="w-fit">
      <Image
        src={logo}
        alt="logo"
        className={`${size == "small" ? "md:w-15 w-10" : "md:w-40 w-30"} ${classes ? classes : ""}`}
      />
    </Link>
  );
}
