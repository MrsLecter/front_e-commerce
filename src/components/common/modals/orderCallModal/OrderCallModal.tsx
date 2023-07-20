import { FC, MouseEvent } from "react";
import BlueBtn from "../../buttons/BlueBtn/BlueBtn";
import { OrderCallContent, StyledOrderCall } from "./OrderCallModal.styles";
import Input from "../../input/Input";
import { useInput } from "@/hooks/use-input";
import { PHONE_REGEXP } from "@/utils/regexp";
import ModalWrapper from "../../wrappers/modalWrapper/ModalWrapper";
import ModalHeader from "../elements/ModalHeader";

interface Props {
  isAppearing: boolean;
  closeModalHandler: () => void;
}

const OrderCallModal: FC<Props> = ({
  isAppearing,
  closeModalHandler,
}) => {
  const {
    value: phoneNumber,
    error: phoneNumberIsValid,
    changeHandler: phoneNumberChangeHandler,
  } = useInput({
    regexp: PHONE_REGEXP,
    allowEmpty: false,
    maskType: "phone",
    mask: "+380(099)-250-75-69",
  });

  const orderClickHandler = () => {
    alert("order click " + phoneNumber);
    if (!phoneNumberIsValid) {
      alert("Error: phone number is not valid");
    }
  };

  const windowClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalWrapper backClickHandler={closeModalHandler} isActive={isAppearing}>
      <StyledOrderCall onClick={(e) => windowClickHandler(e)}>
        <ModalHeader label={"Обратный звонок"} />
        <OrderCallContent>
          <Input
            type={"tel"}
            placeholder={"Ваш номер телефона"}
            inputValue={phoneNumber}
            isRequired={true}
            onChangeHandler={phoneNumberChangeHandler}
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
        </OrderCallContent>
      </StyledOrderCall>
    </ModalWrapper>
  );
};

export default OrderCallModal;
