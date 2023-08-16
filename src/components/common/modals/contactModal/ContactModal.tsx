import { FC, MouseEvent, useEffect, useState } from "react";

import BlueBtn from "../../buttons/BlueBtn/BlueBtn";
import {
  ModalContent,
  ModalHeader,
  StyledContactModal,
} from "./ContactModal.styles";
import ModalWrapper from "../../wrappers/modalWrapper/ModalWrapper";
import { IModalProps } from "@/types/common.types";
import { AppModals, AppRoutes } from "@/constants/common";

const ContactModal: FC<IModalProps> = ({ managementObject }) => {
  return (
    <>
      {!managementObject.isActive(AppModals.Contact) && <></>}
      {managementObject.isActive(AppModals.Contact) && (
        <ModalWrapper
          backClickHandler={() => managementObject.closeHandler()}
          isAppearing={managementObject.isAppearing}
        >
          <StyledContactModal>
            <ModalHeader>
              <p>Наши контакты</p>
            </ModalHeader>
            <ModalContent>
              <div>
                <span>Наш e-mail:</span>
                <a href="mailto:blokhvova@gmail.com">blokhvova@gmail.com</a>
              </div>
              <div>
                <span>Наши телефоны:</span>{" "}
                <a href="tel:+380503403726">+38(050) 340-37-26</a>
              </div>
              <BlueBtn
                id="close"
                color="dark"
                height="36"
                clickHandler={() => managementObject.closeHandler()}
                label={"Закрыть"}
              />
            </ModalContent>
          </StyledContactModal>
        </ModalWrapper>
      )}
    </>
  );
};

export default ContactModal;
