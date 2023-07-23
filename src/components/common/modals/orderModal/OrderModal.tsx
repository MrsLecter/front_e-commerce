import Image from "next/image";
import { FC, MouseEvent } from "react";

import { useInput } from "@/hooks/use-input";
import { getPrettyPrice } from "@/utils/functions";
import { EMAIL_REGEXP, PHONE_REGEXP } from "@/utils/regexp";
import rim from "@images/demo/1.jpeg";

import BlueBtn from "../../buttons/BlueBtn/BlueBtn";
import Input from "../../input/Input";
import {
  OrderHeader,
  Price,
  Product,
  ProductDescription,
  ProductPreview,
  StyledOrderModal,
  UserInputContainer,
} from "./OredrModal.styles";
import ModalWrapper from "../../wrappers/modalWrapper/ModalWrapper";
import { IModalProps, IRimDetailedData } from "@/types/common.types";
import { AppModals } from "@/constants/common";

interface Props extends IModalProps {
  rimData: IRimDetailedData;
}

const OrderModal: FC<Props> = ({ managementObject, rimData }) => {
  const {
    value: name,
    error: nameIsValid,
    changeHandler: nameChangeHandler,
  } = useInput({
    regexp: "none",
    allowEmpty: false,
  });

  const {
    value: email,
    error: emailIsValid,
    changeHandler: emailChangeHandler,
  } = useInput({
    regexp: EMAIL_REGEXP,
    allowEmpty: false,
  });

  const {
    value: phone,
    error: phoneIsValid,
    changeHandler: phoneChangeHandler,
  } = useInput({
    regexp: PHONE_REGEXP,
    allowEmpty: true,
    maskType: "phone",
    mask: "+380(099)-250-75-69",
  });

  const placeOrderHandler = () => {
    console.log(name, email, phone);
  };

  const modalClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {!managementObject.isActive(AppModals.Order) && <></>}
      {managementObject.isActive(AppModals.Order) && (
        <ModalWrapper
          backClickHandler={() => managementObject.closeHandler()}
          isAppearing={managementObject.isAppearing}
        >
          <StyledOrderModal onClick={(e) => modalClickHandler(e)}>
            <OrderHeader>
              <Product>
                <ProductPreview>
                  <Image src={rim} width={48} height={48} alt="rim.png" />
                </ProductPreview>
                <ProductDescription>
                  <div>
                    <span>{rimData.name.split("-")[1].trim()}</span>
                    <span>{getPrettyPrice(rimData.price)}&nbsp;грн</span>
                  </div>
                  <div>
                    <span>{rimData.name.split(" ")[0]}</span>
                    <span>4&nbsp;шт</span>
                  </div>
                </ProductDescription>
              </Product>
              <Price>
                <p>{getPrettyPrice(rimData.price * 4)}&nbsp;грн</p>
                <p>Всего</p>
              </Price>
            </OrderHeader>
            <UserInputContainer>
              <Input
                type={"text"}
                placeholder={"Ваше имя"}
                inputValue={name}
                isRequired={false}
                onChangeHandler={nameChangeHandler}
              />
              <Input
                type={"email"}
                placeholder={"Ваш email (необязательно)"}
                inputValue={email}
                isRequired={false}
                onChangeHandler={emailChangeHandler}
              />
              <Input
                type={"tel"}
                placeholder={"Ваш номер телефона"}
                inputValue={phone}
                isRequired={true}
                maxLen={18}
                onChangeHandler={phoneChangeHandler}
              />

              <BlueBtn
                color="dark"
                label="Оформить заказ"
                clickHandler={placeOrderHandler}
              />
            </UserInputContainer>
          </StyledOrderModal>
        </ModalWrapper>
      )}
    </>
  );
};

export default OrderModal;
