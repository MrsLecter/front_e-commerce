import FocusTrap from "focus-trap-react";
import { FC, RefObject } from "react";

import { FOCUS_TRAP_OPTIONS } from "@/config/focus-trap-options";

import { StyledModalWrapper } from "./ModalWindow.styles";

export interface IModalWindowProps {
  isAppearing: boolean;
  children: React.ReactNode;
  backClickHandler: () => void;
  hasAnimation?: boolean;
  modalRef: RefObject<HTMLDivElement>;
}

const ModalWindow: FC<IModalWindowProps> = ({
  isAppearing,
  children,
  backClickHandler,
  hasAnimation = true,
  modalRef,
}) => {
  const backdropClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (
      (event.target as HTMLElement).id === "close" ||
      (event.target as HTMLElement).id === "modal"
    ) {
      if (modalRef.current && hasAnimation) {
        modalRef.current.style.animation = "disappearance 0.3s ease-in-out";
      }
      backClickHandler();
    }
  };

  return (
    <FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS}>
      <StyledModalWrapper
        ref={modalRef}
        onClick={(e) => backdropClickHandler(e)}
        isActive={isAppearing}
        hasAnimation={hasAnimation}
        id="modal"
      >
        {children}
      </StyledModalWrapper>
    </FocusTrap>
  );
};

export default ModalWindow;
