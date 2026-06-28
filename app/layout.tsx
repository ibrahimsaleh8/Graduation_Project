import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sileo";
import QueryClientHandler from "@/components/QueryClientHandler";
import InitilaizeAuthedUser from "@/components/main-layout/InitilaizeAuthedUser";

const font = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "300", "800", "100", "200", "900"],
});

export const metadata: Metadata = {
  title: "Jobify Project",
  description: "Job Finder Webstite",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <NextTopLoader color="#2563eb" />
        <div className="fixed top-0 z-10000000">
          <Toaster
            position="top-center"
            theme="light"
            options={{
              styles: {
                description: "text-white/75!",
              },
              roundness: 12,
            }}
          />
        </div>

        <QueryClientHandler>
          <InitilaizeAuthedUser />
          {children}
        </QueryClientHandler>
      </body>
    </html>
  );
}
