"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import rimsService from "@/api/rims-service";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import RimOrder from "@/components/pages/rim/RimOrder";
import { useModal } from "@/hooks/use-modal";
import { IRimDetailedInfo } from "@/types/common.types";
import {
  getCurrentRimConfigType,
  getRimConfigObject,
  getUrlToRimPage,
} from "@/utils/functions";
import HeadComponent from "@/components/common/head/Head";
import { rimConfigStub, rimStub } from "@/constants/helpers";
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
const OrderModal = dynamic(
  () => import("@/components/common/modals/orderModal/OrderModal")
);

export default function Rim() {
  const { managementObj } = useModal();
  const searchParams = useSearchParams();
  const rimId = searchParams!.get("rim_id");
  const rimDiameterParam = searchParams!.get("diameter");
  const rimWidthParam = searchParams!.get("width");
  const rimBoltPatternParam = searchParams!.get("bolt_pattern");
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [rimObject, setRimObject] = useState<IRimDetailedInfo>(rimStub);
  const [rimConfigObject, setRimConfigObject] = useState<{
    [id: number]: string;
  }>(rimConfigStub);

  const currentRimType = getCurrentRimConfigType({
    rimObject,
    diameter: rimDiameterParam as string,
    width: rimWidthParam as string,
    boltPattern: rimBoltPatternParam as string,
  });

  const rimTypeRef = useRef(0);
  rimTypeRef.current = currentRimType;

  const setRimTypeHandler = (id: number) => {
    rimTypeRef.current = id;
    const updatedUrl = getUrlToRimPage({
      rimId: rimObject.rimId,
      brand: rimObject.brand,
      name: rimObject.name,
      config: rimObject.config[rimTypeRef.current],
    });
    router.replace(updatedUrl, {
      scroll: false,
    });
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
            rimType={rimTypeRef.current}
            managementObject={managementObj}
            loading={loading}
          />
        )}
        {!loading && (
          <RimOrder
            rimData={rimObject}
            rimConfigObject={rimConfigObject}
            setRimTypeHandler={setRimTypeHandler}
            rimType={rimTypeRef.current}
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
          rimType={rimTypeRef.current}
        />
      </MainWrapper>
    </>
  );
}
