import FocusTrap from "focus-trap-react";
import { FC } from "react";

import { FOCUS_TRAP_OPTIONS } from "@/config/focus-trap-options";

import { StyledModalWrapper } from "./ModalWindow.styles";

export interface IModalWindowProps {
  isActive:boolean;
  children: React.ReactNode;
}

const ModalWindow: FC<IModalWindowProps> = ({isActive, children }) => {
  const backdropClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS}>
      <StyledModalWrapper onMouseDown={(e) => backdropClickHandler(e)} isActive={isActive}>
        {children}
      </StyledModalWrapper>
    </FocusTrap>
  );
};

export default ModalWindow;
