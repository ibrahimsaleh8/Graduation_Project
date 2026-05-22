import Intro from "@/components/Home/Intro";
import React from "react";

export default function IntroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Intro />
      {children}
    </>
  );
}
