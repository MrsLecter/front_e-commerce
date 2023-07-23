"use client";

import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import RimOrder from "@/components/pages/rim/RimOrder";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";
import OrderCallModal from "@/components/common/modals/orderCallModal/OrderCallModal";
import QuestionModal from "@/components/common/modals/questionModal/QuestionModal";
import OrderModal from "@/components/common/modals/orderModal/OrderModal";
import { useModal } from "@/hooks/use-modal";
import rimsService from "@/api/rims-service";

const rim = {
  name: "MKW - WO 04",
  width: ["8.5"],
  diameter: ["19"],
  mountingHoles: ["5x112"],
  price: 5520,
  images: ["https://4ad3-87-244-131-197.ngrok-free.app/WO-040AMB.JPG"],
};

export default function Rim() {
  const { managementObj } = useModal();
  const pathname = usePathname();
  const rimId = pathname.split("/")[1];
  console.log(pathname);

  useEffect(() => {
    const getDetailedRimInfo = async () => {
      const response = await rimsService.getRimDetailedData({ rimId });
      console.log("rim by od response", response);
    };
  }, []);
  return (
    <MainWrapper>
      <Header modalHandler={managementObj.activateHandler} />
      <RimOrder managementObject={managementObj} rimData={rim} />
      <Footer />
      <ContactModal managementObject={managementObj} />
      <OrderCallModal managementObject={managementObj} />
      <QuestionModal managementObject={managementObj} />
      <OrderModal managementObject={managementObj} rimData={rim} />
    </MainWrapper>
  );
}
