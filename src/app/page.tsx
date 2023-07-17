"use client";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import Banner from "@/components/pages/home/banner/Banner";
import Manufacturers from "@/components/pages/home/manufacturers/Manufacturers";
import Popular from "@/components/pages/home/popular/Popular";
import Questions from "@/components/common/questions/Questions";
import Selecting from "@/components/pages/home/selecting/Selecting";

export default function Home() {
  return (
    <MainWrapper>
      <Header color={"none"} />
      <Selecting />
      <Manufacturers />
      <Banner />
      <Questions />
      <Popular />
      <Footer />
    </MainWrapper>
  );
}
