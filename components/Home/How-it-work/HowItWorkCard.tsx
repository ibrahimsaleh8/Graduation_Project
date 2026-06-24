import { ReactNode } from "react";

type Props = {
  index: number;
  title: string;
  description: string;
  component: ReactNode;
};
export default function HowItWorkCard({
  description,
  index,
  title,
  component,
}: Props) {
  return (
    <div
      className={`bg-main-dark rounded-2xl text-white md:p-5 p-3 w-full overflow-hidden justify-between ${
        index == 0 || index == 3 ? "xl:col-span-1" : "xl:col-span-2"
      } flex flex-col gap-10 xl:h-120`}>
      <div className="space-y-3 md:p-0 p-2">
        <p className="text-2xl">{`0${index + 1}`}</p>
        <h2 className="text-2xl font-medium">{title}</h2>
        <p>{description}</p>
      </div>

      {component}
    </div>
  );
}
