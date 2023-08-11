"use client";

import Footer from "@/components/common/footer/Footer";
import HeadComponent from "@/components/common/head/Head";
import Header from "@/components/common/header/Header";
import ContactModal from "@/components/common/modals/contactModal/ContactModal";
import MainWrapper from "@/components/common/wrappers/MainWrapper";
import { useModal } from "@/hooks/use-modal";

export default function MakersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { managementObj } = useModal();

  return (
    <>
      <HeadComponent />
      <MainWrapper topGap={64}>
        <Header modalHandler={managementObj.activateHandler} />
        {children}
        <Footer />
        <ContactModal managementObject={managementObj} />
      </MainWrapper>
    </>
  );
}
