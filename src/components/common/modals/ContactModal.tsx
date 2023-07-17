import { FC } from "react";

import BlueBtn from "../buttons/BlueBtn/BlueBtn";
import {
  ModalContent,
  ModalHeader,
  StyledContactModal,
} from "./ContactModal.styles";

const ContactModal: FC = () => {
  const closeModalHandler = () => {
    alert("close modal hendler");
  };
  return (
    <StyledContactModal>
      <ModalHeader>
        <p>Наши контакты</p>
      </ModalHeader>
      <ModalContent>
        <p>
          <span>Наш e-mail:</span>
          <a href="mailto:blokhvova@gmail.com">blokhvova@gmail.com</a>
        </p>
        <p>
          <span>Наши телефоны:</span>{" "}
          <a href="tel:+380503403726">(050) 340-37-26</a>
        </p>
        <BlueBtn
          color="dark"
          height="36"
          clickHandler={closeModalHandler}
          label={""}
        />
      </ModalContent>
    </StyledContactModal>
  );
};
