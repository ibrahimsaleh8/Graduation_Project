import Footer from "@/components/Home/Footer";
import SmoothScrolling from "@/components/Home/SmoothScrolling";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SmoothScrolling>
        {children}
        <Footer />
      </SmoothScrolling>
    </>
  );
}
