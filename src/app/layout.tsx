import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Poppins } from "next/font/google";
import "../styles/custom.css";
import "./globals.css";
import React from "react";
import { ENV, loadEnv } from "@/config/env.config";
import { Toaster } from "sonner";

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
    template: "%s | Oline Code Editor",
    default: "Online Code Editor - Cloud and DevOps Solutions"
  },
  description: "Professional Online code editor for developers",
  keywords: ["DevOps", "Cloud", "CI/CD", "Infrastructure", "Cloud Migration"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  loadEnv(ENV);
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body className={`${fontVariable.variable} ${fontStyle.variable} antialiased`}>
        <NextTopLoader
          showSpinner={false}
          color="#8d8dff"
          height={4}
          crawl
          zIndex={999}
        />
        <main>
          <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}
