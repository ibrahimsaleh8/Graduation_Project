import { NuqsAdapter } from "nuqs/adapters/next/app";
import Footer from "@/components/Home/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NuqsAdapter>{children}</NuqsAdapter>
      <Footer />
    </>
  );
}
