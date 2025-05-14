import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/custom.css";
import "./globals.css";
import React from "react";

const fontVariable = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"]
});

const fontStyle = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: {
    template: "%s | PLogic",
    default: "PLogic - Cloud and DevOps Solutions"
  },
  description: "Professional cloud and DevOps services for businesses of all sizes.",
  keywords: ["DevOps", "Cloud", "CI/CD", "Infrastructure", "Cloud Migration"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body className={`${fontVariable.variable} ${fontStyle.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
