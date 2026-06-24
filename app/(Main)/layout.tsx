import Header from "@/components/main-layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between">{children}</div>
    </>
  );
}
