import FocusTrap from "focus-trap-react";
import { FC } from "react";

import { FOCUS_TRAP_OPTIONS } from "@/config/focus-trap-options";

import { StyledModalWrapper } from "./ModalWindow.styles";

export interface IModalWindowProps {
  isActive: boolean;
  children: React.ReactNode;
  backClickHandler: () => void;
}

const ModalWindow: FC<IModalWindowProps> = ({
  isActive,
  children,
  backClickHandler,
}) => {
  const backdropClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    backClickHandler();
  };

  return (
    <FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS}>
      <StyledModalWrapper
        onClick={(e) => backdropClickHandler(e)}
        isActive={isActive}
      >
        {children}
      </StyledModalWrapper>
    </FocusTrap>
  );
};

export default ModalWindow;
