"use client";

import Footer from "@/components/common/footer/Footer";
import HeadComponent from "@/components/common/head/Head";
import Header from "@/components/common/header/Header";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";
import OrderCallModal from "@/components/common/modals/orderCallModal/OrderCallModal";
import QuestionModal from "@/components/common/modals/questionModal/QuestionModal";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import About from "@/components/pages/about/About";
import { useModal } from "@/hooks/use-modal";

export default function AboutUs() {
  const { managementObj } = useModal();

  return (
    <>
      <HeadComponent />
      <MainWrapper>
        <Header modalHandler={managementObj.activateHandler} />
        <About modalHandler={managementObj.activateHandler} />
        <Footer />
        <ContactModal managementObject={managementObj} />
        <OrderCallModal managementObject={managementObj} />
        <QuestionModal managementObject={managementObj} />
      </MainWrapper>
    </>
  );
}
