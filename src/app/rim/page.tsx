"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import RimOrder from "@/components/pages/rim/RimOrder";

export default function Rim() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <MainWrapper>
      <Header />
      <RimOrder />
      <Footer />
    </MainWrapper>
  );
}
