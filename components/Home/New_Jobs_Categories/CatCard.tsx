import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
};
export default function CatCard({ description, image, title }: Props) {
  return (
    <div className="card absolute  bg-linear-to-b from-[#f7fafd] to-[#ffffff] w-full border p-10 flex flex-col gap-10 items-center justify-between rounded-2xl md:h-170 h-100 overflow-hidden">
      <div className="text-center space-y-2">
        <p className="md:text-5xl text-3xl font-medium">{title}</p>
        <p>{description}</p>
      </div>
      <Image
        src={image}
        alt={title}
        className="w-full max-w-2xl md:max-h-100 max-h-40"
      />
    </div>
  );
}
