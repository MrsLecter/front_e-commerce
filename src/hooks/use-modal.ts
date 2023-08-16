import { useState } from "react";

export const useModal = () => {
  const [isAppearing, setIsAppearing] = useState<boolean>(false);
  const [activeModal, toggleModal] = useState<number>(0);

  const setActive = (modalID: number) => {
    setIsAppearing(true);
    toggleModal(modalID);
  };

  const closeModal = () => {
    setIsAppearing(false);
    setTimeout(() => {
      toggleModal(0);
    }, 300);
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
