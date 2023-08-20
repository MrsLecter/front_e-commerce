"use client";

import Footer from "@/components/common/footer/Footer";
import HeadComponent from "@/components/common/head/Head";
import Header from "@/components/common/header/Header";
import Questions from "@/components/common/questions/Questions";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import Banner from "@/components/pages/home/banner/Banner";
import Manufacturers from "@/components/pages/home/manufacturers/Manufacturers";
import Popular from "@/components/pages/home/popular/Popular";
import { QuestionWrapper } from "@/components/pages/home/QuestionWrapper.stytles";
import Selecting from "@/components/pages/home/selecting/Selecting";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { useModal } from "@/hooks/use-modal";
import { deleteCarProps } from "@/store/reducers/carSlice";
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
const SearchModal = dynamic(
  () =>
    import("@/components/pages/home/selecting/elements/searchModal/SearchModal")
);

export default function Home() {
  const { managementObj } = useModal();
  const dispatch = useAppDispatch();
  const { makerName } = useAppSelector((store) => store.carReducer);

  if (makerName) {
    dispatch(deleteCarProps());
  }

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
