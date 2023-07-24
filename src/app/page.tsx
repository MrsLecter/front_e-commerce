"use client";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import Banner from "@/components/pages/home/banner/Banner";
import Manufacturers from "@/components/pages/home/manufacturers/Manufacturers";
import Popular from "@/components/pages/home/popular/Popular";
import Questions from "@/components/common/questions/Questions";
import Selecting from "@/components/pages/home/selecting/Selecting";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";
import { QuestionWrapper } from "@/components/pages/home/QuestionWrapper.stytles";
import { useModal } from "@/hooks/use-modal";
import OrderCallModal from "@/components/common/modals/orderCallModal/OrderCallModal";
import QuestionModal from "@/components/common/modals/questionModal/QuestionModal";
import SearchModal from "@/components/pages/home/selecting/elements/searchModal/SearchModal";

export default function Home() {
  const { managementObj } = useModal();

  return (
    <MainWrapper>
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
  );
}
