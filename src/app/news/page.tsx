"use client";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import NewsFeed from "@/components/pages/news/NewsFeed";
import { useState } from "react";

export default function News() {
  const [isActiveContactModal, setContactModal] = useState<boolean>(false);
  const [isAppearing, setIsAppearing] = useState<boolean>(false);

  const toggleContactModal = () => {
    setTimeout(() => {
      setIsAppearing(!isAppearing);
    }, 100);
    setTimeout(() => {
      setContactModal(!isActiveContactModal);
    }, 300);
  };

  return (
    <MainWrapper>
      <Header showContact={toggleContactModal} />
      <NewsFeed />
      <Footer />
      {isActiveContactModal && (
        <ContactModal
          closeModalHandler={toggleContactModal}
          isAppearing={isAppearing}
        />
      )}
    </MainWrapper>
  );
}
