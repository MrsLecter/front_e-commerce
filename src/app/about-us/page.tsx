"use client";

import Footer from "@/components/common/footer/Footer";
import HeadComponent from "@/components/common/head/Head";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import About from "@/components/pages/about/About";
import { useModal } from "@/hooks/use-modal";
import dynamic from "next/dynamic";

const ContactModal = dynamic(
  () => import("@/components/common/modals/contactModal/ContactModal")
);
const OrderCallModal = dynamic(
  () => import("@/components/common/modals/orderCallModal/OrderCallModal")
);
const QuestionModal = dynamic(
  () => import("@/components/common/modals/questionModal/QuestionModal")
);

export default function AboutUs() {
  const { managementObj } = useModal();

  return (
    <>
      <HeadComponent />
      <MainWrapper topGap={64} preventScroll={managementObj.isAppearing}>
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
