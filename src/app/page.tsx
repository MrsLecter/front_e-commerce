"use client";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import Banner from "@/components/pages/home/banner/Banner";
import Manufacturers from "@/components/pages/home/manufacturers/Manufacturers";
import Popular from "@/components/pages/home/popular/Popular";
import Questions from "@/components/pages/home/questions/Questions";
import Selecting from "@/components/pages/home/selecting/Selecting";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledMain>
      <Header color={"none"} />
      <Selecting />
      <Manufacturers />
      <Banner />
      <Questions />
      <Popular />
      <Footer />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  height: 100%;
  min-height: 100%;
  background-color: #f0f1f1;
`;
