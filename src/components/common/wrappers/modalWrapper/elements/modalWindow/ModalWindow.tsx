import FocusTrap from "focus-trap-react";
import { FC } from "react";

import { FOCUS_TRAP_OPTIONS } from "@/config/focus-trap-options";

import { ModalWrapper } from "./ModalWindow.styles";

export interface IModalWindowProps {
  children: React.ReactNode;
}

const ModalWindow: FC<IModalWindowProps> = ({ children }) => {
  const backdropClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    alert("closeModal");
  };

  return (
    <FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS}>
      <ModalWrapper onMouseDown={(e) => backdropClickHandler(e)}>
        {children}
      </ModalWrapper>
    </FocusTrap>
  );
};

export default ModalWindow;
