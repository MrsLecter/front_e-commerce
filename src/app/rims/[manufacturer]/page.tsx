"use client";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import About from "@/components/pages/about/About";

export default function Page({ params }: { params: { manufacturer: string } }) {
  return (
    <MainWrapper>
      <Header />
      <div>{params.manufacturer}</div>
      <Footer />
    </MainWrapper>
  );
}
