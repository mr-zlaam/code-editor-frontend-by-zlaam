import Header from "@/pagecomponents/homePageComponents/header";
import React from "react";

export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
