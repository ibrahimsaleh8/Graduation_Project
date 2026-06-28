import registerImage from "@images/landing-page-images/Register.webp";
import Image from "next/image";

export default function RegisterCard() {
  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <Image
        src={registerImage}
        width={1000}
        height={1000}
        alt="register image"
        className="w-full object-cover md:h-100 object-bottom-right"
      />
    </div>
  );
}
