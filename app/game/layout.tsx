import React from "react";

import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header height="h-[60px]" />
      {children}
      {/* <main className="relative min-h-[calc(100svh-60px)] bg-[#252c34] px-4">
        {children}
      </main> */}
    </>
  );
}
