"use client";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import Banner from "@/components/pages/home/banner/Banner";
import Manufacturers from "@/components/pages/home/manufacturers/Manufacturers";
import Popular from "@/components/pages/home/popular/Popular";
import Questions from "@/components/common/questions/Questions";
import Selecting from "@/components/pages/home/selecting/Selecting";
import { useState } from "react";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";

export default function Home() {
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
      <Header color={"none"} showContact={toggleContactModal} />
      <Selecting />
      <Manufacturers />
      <Banner />
      {/* <Questions /> */}
      <Popular />
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
