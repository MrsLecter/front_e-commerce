"use client";

import Footer from "@/components/common/footer/Footer";
import HeadComponent from "@/components/common/head/Head";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import NewsFeed from "@/components/pages/news/NewsFeed";
import { useModal } from "@/hooks/use-modal";
import dynamic from "next/dynamic";

const ContactModal = dynamic(
  () => import("@/components/common/modals/contactModal/ContactModal")
);

export default function News() {
  const { managementObj } = useModal();

  return (
    <>
      <HeadComponent />
      <MainWrapper topGap={64} preventScroll={managementObj.isAppearing}>
        <Header modalHandler={managementObj.activateHandler} />
        <NewsFeed />
        <Footer />
        <ContactModal managementObject={managementObj} />
      </MainWrapper>
    </>
  );
}
