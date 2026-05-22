import Footer from "@/components/Home/Footer";
import Header from "@/components/main-layout/Header";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Intro from "@/components/Home/Intro";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Intro />
      <Header />
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
