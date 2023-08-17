"use client";

import { useParams, useSearchParams } from "next/navigation";
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
import { useModal } from "@/hooks/use-modal";
import { IRimDetailedInfo } from "@/types/common.types";
import { getRimConfigObject } from "@/utils/functions";
import HeadComponent from "@/components/common/head/Head";
import { rimConfigStub, rimStub } from "@/constants/helpers";

export default function Rim() {
  const { managementObj } = useModal();
  const searchParams = useSearchParams();
  const rimId = searchParams!.get("rim_id");

  const [loading, setLoading] = useState<boolean>(true);
  const [rimObject, setRimObject] = useState<IRimDetailedInfo>(rimStub);
  const [rimConfigObject, setRimConfigObject] = useState<{
    [id: number]: string;
  }>(rimConfigStub);
  const [rimType, setRimType] = useState<number>(0);
  // const [optionArray, setOptionArray] = useState<string[]>();
  // const [vary, setVary] = useState<number>(0);

  const setRimTypeHandler = (id: number) => {
    setRimType(id);
  };

  useEffect(() => {
    const getDetailedRimsInfo = async () => {
      const response = await rimsService.getRimData({
        id: rimId as string,
      });
      setRimObject((prev) => response.data.message);
      setRimConfigObject((prev) => getRimConfigObject(response.data.message));
      setLoading(false);
    };
    getDetailedRimsInfo();
  }, []);
  return (
    <>
      <HeadComponent />
      <MainWrapper topGap={64} preventScroll={managementObj.isAppearing}>
        <Header modalHandler={managementObj.activateHandler} />
        {loading && (
          <RimOrder
            rimData={rimObject}
            rimConfigObject={rimConfigObject}
            setRimTypeHandler={setRimTypeHandler}
            rimType={rimType}
            managementObject={managementObj}
            loading={loading}
          />
        )}
        {!loading && (
          <RimOrder
            rimData={rimObject}
            rimConfigObject={rimConfigObject}
            setRimTypeHandler={setRimTypeHandler}
            rimType={rimType}
            managementObject={managementObj}
            loading={loading}
          />
        )}

        <Footer />
        <ContactModal managementObject={managementObj} />
        <OrderCallModal managementObject={managementObj} />
        <QuestionModal managementObject={managementObj} />
        <OrderModal
          managementObject={managementObj}
          rimData={rimObject}
          rimType={rimType}
        />
      </MainWrapper>
    </>
  );
}
