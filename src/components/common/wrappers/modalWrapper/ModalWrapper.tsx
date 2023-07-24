import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import BackScreen from "./elements/backScreen/BackScreen";
import ModalWindow from "./elements/modalWindow/ModalWindow";

interface Props {
  isAppearing: boolean;
  children: React.ReactNode;
  backClickHandler: () => void;
  hasAnimation?:boolean
}

const ModalWrapper: FC<Props> = ({
  isAppearing,
  children,
  backClickHandler,
  hasAnimation
}) => {
  const [render, setRender] = useState(false);

  interface KeyboardEvent {
    key: string;
  }

  useEffect(() => {
    const handleKeyboardEvents = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        backClickHandler();
      }
    };
    document.addEventListener("keydown", handleKeyboardEvents);

    return () => removeEventListener("keydown", handleKeyboardEvents);
  }, []);

  useEffect(() => setRender(true), []);

  if (render) {
    const backdrop = document.getElementById("backdrop");
    const modal = document.getElementById("modal");

    if (!modal || !backdrop || (!backdrop && !modal)) {
      throw Error("Element 'modal' or/end 'backdrop' not assigned in DOM");
    }

    return (
      <>
        {ReactDOM.createPortal(
          <BackScreen
            backClickHandler={backClickHandler}
            isAppearing={isAppearing}
            hasAnimation={hasAnimation}
          />,
          backdrop
        )}
        {ReactDOM.createPortal(
          <ModalWindow
            isAppearing={isAppearing}
            backClickHandler={backClickHandler}
            hasAnimation={hasAnimation}
          >
            {children}
          </ModalWindow>,
          modal
        )}
      </>
    );
  } else {
    return null;
  }
};

export default ModalWrapper;
