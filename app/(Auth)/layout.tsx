import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="overflow-x-hidden">{children}</div>;
}
