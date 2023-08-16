"use client";

import Footer from "@/components/common/footer/Footer";
import HeadComponent from "@/components/common/head/Head";
import Header from "@/components/common/header/Header";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";
import OrderCallModal from "@/components/common/modals/orderCallModal/OrderCallModal";
import QuestionModal from "@/components/common/modals/questionModal/QuestionModal";
import Questions from "@/components/common/questions/Questions";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import Banner from "@/components/pages/home/banner/Banner";
import Manufacturers from "@/components/pages/home/manufacturers/Manufacturers";
import Popular from "@/components/pages/home/popular/Popular";
import { QuestionWrapper } from "@/components/pages/home/QuestionWrapper.stytles";
import SearchModal from "@/components/pages/home/selecting/elements/searchModal/SearchModal";
import Selecting from "@/components/pages/home/selecting/Selecting";
import { useModal } from "@/hooks/use-modal";

export default function Home() {
  const { managementObj } = useModal();

  return (
    <>
      <HeadComponent />
      <MainWrapper preventScroll={managementObj.isAppearing}>
        <Header color={"none"} modalHandler={managementObj.activateHandler} />
        <Selecting
          openSearchModal={(modalId: number) =>
            managementObj.activateHandler(modalId)
          }
        />
        <Manufacturers />
        <Banner />
        <QuestionWrapper>
          <Questions modalHandler={managementObj.activateHandler} />
        </QuestionWrapper>
        <Popular />
        <Footer />
        <ContactModal managementObject={managementObj} />
        <OrderCallModal managementObject={managementObj} />
        <QuestionModal managementObject={managementObj} />
        <SearchModal managementObject={managementObj} />
      </MainWrapper>
    </>
  );
}
