import { FC, KeyboardEvent, MouseEvent, useState } from "react";

import { useInput } from "@/hooks/use-input";
import { IModalProps } from "@/types/common.types";
import { PHONE_REGEXP } from "@/utils/regexp";

import BlueBtn from "../../buttons/BlueBtn/BlueBtn";
import Input from "../../input/Input";
import ModalWrapper from "../../wrappers/modalWrapper/ModalWrapper";
import ErrorContent from "../elements/feedbackContent/ErrorContent";
import SuccessContent from "../elements/feedbackContent/SuccessContent";
import ModalHeader from "../elements/ModalHeaderElement";
import { OrderCallContent, StyledOrderCall } from "./OrderCallModal.styles";
import { AppModals } from "@/constants/common";
import modalService from "@/api/modal-service";
import { Link } from "react-router-dom";

const OrderCallModal: FC<IModalProps> = ({ managementObject }) => {
  const [isOrderCall, setOrderCall] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const {
    value: phoneNumber,
    error: phoneNumberIsValid,
    changeHandler: phoneNumberChangeHandler,
  } = useInput({
    regexp: PHONE_REGEXP,
    allowEmpty: false,
    maskType: "phone",
    mask: "+380(000)-000-00-00",
  });

  const orderHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      orderClickHandler();
    }
  };

  const orderClickHandler = async () => {
    if (!phoneNumberIsValid) {
      alert("Ошибка: неправильный номер телефона");
    }
    if (phoneNumberIsValid) {
      try {
        await modalService.postCallData({ phoneNumber });
        setOrderCall(true);
      } catch (err) {
        setError(true);
      }
    }
  };

  const windowClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {!managementObject.isActive(AppModals.Call) && <></>}
      {managementObject.isActive(AppModals.Call) && (
        <ModalWrapper
          backClickHandler={() => managementObject.closeHandler()}
          isAppearing={managementObject.isAppearing}
        >
          <StyledOrderCall onClick={(e) => windowClickHandler(e)}>
            <ModalHeader label={"Обратный звонок"} />

            <OrderCallContent>
              {error && (
                <ErrorContent
                  closeModalHandler={() => managementObject.closeHandler()}
                />
              )}
              {isOrderCall && !error && (
                <SuccessContent
                  closeModalHandler={() => managementObject.closeHandler()}
                />
              )}
              {!isOrderCall && !error && (
                <>
                  <Input
                    type={"tel"}
                    placeholder={"Ваш номер телефона"}
                    inputValue={phoneNumber}
                    isRequired={true}
                    onChangeHandler={phoneNumberChangeHandler}
                    onKeyDown={(e) => orderHandler(e)}
                    maxLen={18}
                    autofocus={true}
                  />
                  <div>
                    <BlueBtn
                      color={"dark"}
                      clickHandler={orderClickHandler}
                      label={"Заказать звонок"}
                    />
                  </div>
                </>
              )}
            </OrderCallContent>
          </StyledOrderCall>
        </ModalWrapper>
      )}
    </>
  );
};

export default OrderCallModal;
