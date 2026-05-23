import errorImage from "@images/Error-happend-image.png";
import Image from "next/image";
type Props = {
  errorMessage: string;
  statusCode?: number;
};
export default function ErrorDashboardMessage({
  errorMessage,
  statusCode,
}: Props) {
  return (
    <div className="flex items-center text-center gap-10 flex-col">
      <Image
        src={errorImage}
        alt="Error Message"
        className="md:max-w-100 w-full"
      />
      <div className="font-medium space-y-3 md:text-4xl text-2xl">
        <p>Error {statusCode ?? ""}</p>
        <p className="text-red-600 capitalize">{errorMessage}</p>
      </div>
    </div>
  );
}
