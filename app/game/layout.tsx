import React from "react";

import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="after:bg-[#334048] after:-z-10 relative after:top-0 after:h-[60px] after:w-screen after:content-[''] after:absolute">
      <Header height="h-[60px]" />
      {children}
    </div>
  );
}
