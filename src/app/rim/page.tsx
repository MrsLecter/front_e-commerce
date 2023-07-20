"use client";

import { usePathname } from "next/navigation";
import { FC, useState } from "react";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import RimOrder from "@/components/pages/rim/RimOrder";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";
import OrderCallModal from "@/components/common/modals/orderCallModal/OrderCallModal";
import QuestionModal from "@/components/common/modals/questionModal/QuestionModal";
import OrderModal from "@/components/common/modals/orderModal/OrderModal";

export default function Rim() {
  const pathname = usePathname();
  console.log(pathname);
  const [isActiveContactModal, setContactModal] = useState<boolean>(false);
  const [isActiveCallModal, setCallModal] = useState<boolean>(false);
  const [isActiveQuestionModal, setQuestionModal] = useState<boolean>(false);
  const [isActiveOrderModal, setOrderModal] = useState<boolean>(false);
  const [isAppearing, setIsAppearing] = useState<boolean>(false);

  const toggleContactModal = () => {
    setTimeout(() => {
      setIsAppearing(!isAppearing);
    }, 100);
    setTimeout(() => {
      setContactModal(!isActiveContactModal);
    }, 300);
  };

  const toggleCallModal = () => {
    setTimeout(() => {
      setIsAppearing(!isAppearing);
    }, 100);
    setTimeout(() => {
      setCallModal(!isActiveCallModal);
    }, 300);
  };
  const toggleQuestionModal = () => {
    setTimeout(() => {
      setIsAppearing(!isAppearing);
    }, 100);
    setTimeout(() => {
      setQuestionModal(!isActiveQuestionModal);
    }, 300);
  };

  const toggleOrderModal = () => {
    setTimeout(() => {
      setIsAppearing(!isAppearing);
    }, 100);
    setTimeout(() => {
      setOrderModal(!isActiveOrderModal);
    }, 300);
  };

  return (
    <MainWrapper>
      <Header showContact={toggleContactModal} />
      <RimOrder
        placeOrderHandler={toggleOrderModal}
        orderCallHandler={toggleCallModal}
        askQuestionHandler={toggleQuestionModal}
      />
      <Footer />
      {isActiveContactModal && (
        <ContactModal
          closeModalHandler={toggleContactModal}
          isAppearing={isAppearing}
        />
      )}
      {isActiveCallModal && (
        <OrderCallModal
          isAppearing={isAppearing}
          closeModalHandler={toggleCallModal}
        />
      )}
      {isActiveQuestionModal && (
        <QuestionModal
          isAppearing={isAppearing}
          closeModalHandler={toggleQuestionModal}
        />
      )}
      {isActiveOrderModal && (
        <OrderModal
          isAppearing={isAppearing}
          closeModalHandler={toggleOrderModal}
        />
      )}
    </MainWrapper>
  );
}
