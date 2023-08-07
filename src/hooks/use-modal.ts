import { useState } from "react";

export const useModal = () => {
  const [isAppearing, setIsAppearing] = useState<boolean>(false);
  const [activeModal, toggleModal] = useState<number>(0);

  const setActive = (modalID: number) => {
    setTimeout(() => {
      setIsAppearing(true);
    }, 200);
    setTimeout(() => {
      toggleModal(modalID);
    }, 500);
  };

  const closeModal = () => {
    setIsAppearing(false);
    toggleModal(0);
  };

  return {
    managementObj: {
      isAppearing,
      isActive: (modalID: number) => activeModal === modalID,
      activateHandler: (modalID: number) => setActive(modalID),
      closeHandler: closeModal,
    },
  };
};
