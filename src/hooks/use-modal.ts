import { useState } from "react";

export const useModal = () => {
  // const [isActiveContactModal, setContactModal] = useState<boolean>(false);
  // const [isActiveCallModal, setCallModal] = useState<boolean>(false);
  // const [isActiveQuestionModal, setQuestionModal] = useState<boolean>(false);
  // const [isActiveOrderModal, setOrderModal] = useState<boolean>(false);
  const [isAppearing, setIsAppearing] = useState<boolean>(false);
  const [activeModal, toggleModal] = useState<number>(0);

  const setActive = (modalID: number) => {
    setTimeout(() => {
      setIsAppearing(!isAppearing);
    }, 100);
    setTimeout(() => {
      toggleModal(modalID);
    }, 300);
  };

  const closeModal = () => {
    setActive(0);
  };

  // const toggleContactModal = () => {
  //   setTimeout(() => {
  //     setIsAppearing(!isAppearing);
  //   }, 100);
  //   setTimeout(() => {
  //     setContactModal(!isActiveContactModal);
  //   }, 300);
  // };
  // const toggleCallModal = () => {
  //   setTimeout(() => {
  //     setIsAppearing(!isAppearing);
  //   }, 100);
  //   setTimeout(() => {
  //     setCallModal(!isActiveCallModal);
  //   }, 300);
  // };
  // const toggleQuestionModal = () => {
  //   setTimeout(() => {
  //     setIsAppearing(!isAppearing);
  //   }, 100);
  //   setTimeout(() => {
  //     setQuestionModal(!isActiveQuestionModal);
  //   }, 300);
  // };
  // const toggleOrderModal = () => {
  //   setTimeout(() => {
  //     setIsAppearing(!isAppearing);
  //   }, 100);
  //   setTimeout(() => {
  //     setOrderModal(!isActiveOrderModal);
  //   }, 300);
  // };

  // return {
  //   isAppearing,
  //   contact: {
  //     state: isActiveContactModal,
  //     handler: toggleContactModal,
  //   },
  //   call: {
  //     state: isActiveCallModal,
  //     handler: toggleCallModal,
  //   },
  //   question: {
  //     state: isActiveQuestionModal,
  //     handler: toggleQuestionModal,
  //   },
  //   order: {
  //     state: isActiveOrderModal,
  //     handler: toggleOrderModal,
  //   },
  // };
  return {
    managementObj: {
      isAppearing,
      isActive: (modalID: number) => activeModal === modalID,
      activateHandler: (modalID: number) => setActive(modalID),
      closeHandler: closeModal,
    },
  };
};
