import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

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
    <html lang="en">
      <body className={"${intern.variable} {spaceGrotesk.variable}"}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-gradienthover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
          <h1 className="h1-bold">This is Textsssss</h1>
        </ClerkProvider>
      </body>
    </html>
  );
}
