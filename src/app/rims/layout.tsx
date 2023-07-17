"use client";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";

export default function RimsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainWrapper>
      <Header />
      <div>{"param panel"}</div>
      {children}
      <Footer />
    </MainWrapper>
  );
}
