import { FC, MouseEvent, useState } from "react";

import BlueBtn from "../../buttons/BlueBtn/BlueBtn";
import {
  ModalContent,
  ModalHeader,
  StyledContactModal,
} from "./ContactModal.styles";
import ModalWrapper from "../../wrappers/modalWrapper/ModalWrapper";

interface Props {
  isAppearing: boolean;
  closeModalHandler: () => void;
}

const ContactModal: FC<Props> = ({
  isAppearing,
  closeModalHandler,
}) => {
  const modalClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <ModalWrapper backClickHandler={closeModalHandler} isActive={isAppearing}>
      <StyledContactModal onClick={(e) => modalClickHandler(e)}>
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
            color="dark"
            height="36"
            clickHandler={closeModalHandler}
            label={"Закрыть"}
          />
        </ModalContent>
      </StyledContactModal>
    </ModalWrapper>
  );
};

export default ContactModal;
