"use client";

import Footer from "@/components/common/footer/Footer";
import HeadComponent from "@/components/common/head/Head";
import Header from "@/components/common/header/Header";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import NewsFeed from "@/components/pages/news/NewsFeed";
import { useModal } from "@/hooks/use-modal";

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
