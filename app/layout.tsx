import React from "react";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import { Noto_Sans as NotoSans } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

const notoSans = NotoSans({
  variable: "--font-noto-sans",
  display: "swap",
});
const greatVibes = localFont({
  src: "./fonts/GreatVibes.woff",
  variable: "--font-great-vibes",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Blackjack",
  description: "Play Blackjack against the computer online for free.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider signInForceRedirectUrl="/" signUpForceRedirectUrl="/">
      <html lang="en">
        <body
          className={`${notoSans.variable} ${greatVibes.variable} bg-[#252c34] antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
