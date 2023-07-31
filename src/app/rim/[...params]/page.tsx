"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import rimsService from "@/api/rims-service";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";
import OrderCallModal from "@/components/common/modals/orderCallModal/OrderCallModal";
import OrderModal from "@/components/common/modals/orderModal/OrderModal";
import QuestionModal from "@/components/common/modals/questionModal/QuestionModal";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import RimOrder from "@/components/pages/rim/RimOrder";
import { rim } from "@/constants/helpers";
import { useModal } from "@/hooks/use-modal";
import { IRimDetailedInfo, IRimParams } from "@/types/common.types";
import { getDimentionOptionsArray } from "@/utils/functions";

export default function Rim() {
  const { managementObj } = useModal();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [rimObject, setRimObject] = useState<IRimDetailedInfo>();
  const [rimVariation, setRimVariation] = useState<IRimParams>();
  const [optionArray, setOptionArray] = useState<string[]>();
  const [vary, setVary] = useState<number>(0);

  const setVariation = (option: string) => {
    if (optionArray && rimObject) {
      let index = optionArray.indexOf(option);

      if (index === vary && optionArray.length !== 1) {
        index = optionArray.indexOf(option, vary + 1);
      }

      setVary((prev) => index);
      setRimVariation((prev) => rimObject.rimVariations[index]);
    }
  };

  useEffect(() => {
    const getDetailedRimsInfo = async () => {
      const response = await rimsService.getRimData({
        id: params!.params as string,
      });
      setRimObject((prev) => response.data.message);
      setRimVariation((prev) => response.data.message.rimVariations[0]);
      setOptionArray((prev) => getDimentionOptionsArray(response.data.message));
      setLoading(false);
    };
    getDetailedRimsInfo();
  }, []);
  return (
    <MainWrapper>
      <Header modalHandler={managementObj.activateHandler} />
      {loading && (
        <RimOrder
          rimData={rim}
          optionArray={getDimentionOptionsArray(rim)}
          setVariation={setVariation}
          rimVariation={rim.rimVariations[0]}
          managementObject={managementObj}
          loading={loading}
        />
      )}
      {!loading && (
        <RimOrder
          rimData={rimObject!}
          optionArray={optionArray!}
          setVariation={setVariation}
          rimVariation={rimVariation!}
          managementObject={managementObj}
          loading={loading}
        />
      )}
      <Footer />
      <ContactModal managementObject={managementObj} />
      <OrderCallModal managementObject={managementObj} />
      <QuestionModal managementObject={managementObj} />
      {loading && (
        <OrderModal
          managementObject={managementObj}
          rimData={rim}
          rimVariation={rim.rimVariations[0]}
          rimId={params!.params as string}
        />
      )}
      {!loading && (
        <OrderModal
          managementObject={managementObj}
          rimData={rimObject!}
          rimVariation={rimVariation!}
          rimId={params!.params as string}
        />
      )}
    </MainWrapper>
  );
}
