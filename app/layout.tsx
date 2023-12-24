import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOverFlow",
  description:
    "DevOverFlow is a question-and-answer platform for professional and enthusiast programmers",

  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <h1 className="h1-bold">This is Text!dddd!!!sss!!</h1>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
