import Footer from "@/components/Home/Footer";
import Header from "@/components/main-layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
