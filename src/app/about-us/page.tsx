"use client";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import About from "@/components/pages/about/About";

export default function AboutUs() {
  return (
    <MainWrapper>
      <Header />
      <About />
      <Footer />
    </MainWrapper>
  );
}
