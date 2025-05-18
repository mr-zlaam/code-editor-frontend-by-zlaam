import Header from "@/pagecomponents/homePageComponents/header";
import React from "react";

import { ENV, loadEnv } from "@/config/env.config";
export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  loadEnv(ENV);
  return (
    <>
      <Header />
      {children}
    </>
  );
}
