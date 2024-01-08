import Header from "@/components/Header";
import React from "react";

export default function InternalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-8">
      <Header />
      <div className="mt-8">{children}</div>
    </div>
  );
}
