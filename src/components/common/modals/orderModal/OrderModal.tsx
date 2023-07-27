import Image from "next/image";
import { FC, MouseEvent, useState, KeyboardEvent } from "react";

import { useInput } from "@/hooks/use-input";
import { getPrettyPrice } from "@/utils/functions";
import { EMAIL_REGEXP, PHONE_REGEXP } from "@/utils/regexp";

import BlueBtn from "../../buttons/BlueBtn/BlueBtn";
import Input from "../../input/Input";
import {
  Message,
  OrderHeader,
  Price,
  Product,
  ProductDescription,
  ProductPreview,
  StyledOrderModal,
  UserInputContainer,
} from "./OredrModal.styles";
import ModalWrapper from "../../wrappers/modalWrapper/ModalWrapper";
import {
  IModalProps,
  IRimDetailedInfo,
  IRimParams,
} from "@/types/common.types";
import { AppModals } from "@/constants/common";
import modalService from "@/api/modal-service";
import ErrorContent from "../elements/feedbackContent/ErrorContent";
import SuccessContent from "../elements/feedbackContent/SuccessContent";

interface Props extends IModalProps {
  rimData: IRimDetailedInfo;
  rimVariation: IRimParams;
  rimId: string;
}

const OrderModal: FC<Props> = ({
  managementObject,
  rimData,
  rimVariation,
  rimId,
}) => {
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

  const [isOrderReady, setOrderReady] = useState<boolean>(false);
  const [orderError, setOrderError] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const placeOrderHandler = async () => {
    if (!nameIsValid || !emailIsValid || !phoneIsValid) {
      setError(true);
    }
    if (name && nameIsValid && email && emailIsValid && phone && phoneIsValid) {
      setError(false);
      try {
        await modalService.postOrderData({
          name,
          email,
          phone,
          orderConfig: {
            mountingHoles: rimVariation.mountingHoles,
            diameter: rimVariation.diameter,
            width: rimVariation.width,
            rimId: rimId,
          },
        });
        setOrderReady(true);
      } catch (err) {
        setOrderError(true);
      }
    }
  };

  const orderHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      placeOrderHandler();
    }
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
                  <Image
                    src={rimData.images[0]}
                    width={48}
                    height={48}
                    alt="rim.png"
                  />
                </ProductPreview>
                <ProductDescription>
                  <div>
                    <span>{rimData.name.split("-")[1].trim()}</span>
                    <span>{getPrettyPrice(rimVariation.price)}&nbsp;грн</span>
                  </div>
                  <div>
                    <span>{rimData.name.split(" ")[0]}</span>
                    <span>4&nbsp;шт</span>
                  </div>
                </ProductDescription>
              </Product>
              <Price>
                <p>{getPrettyPrice(rimVariation.price * 4)}&nbsp;грн</p>
                <p>Всего</p>
              </Price>
            </OrderHeader>

            <UserInputContainer>
              {orderError && (
                <ErrorContent
                  closeModalHandler={() => managementObject.closeHandler()}
                />
              )}
              {isOrderReady && !orderError && (
                <SuccessContent
                  closeModalHandler={() => managementObject.closeHandler()}
                />
              )}

              {!isOrderReady && !orderError && (
                <>
                  <Input
                    type={"text"}
                    placeholder={"Ваше имя"}
                    inputValue={name}
                    isRequired={false}
                    onChangeHandler={nameChangeHandler}
                    autofocus={true}
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
                    onKeyDown={(e) => orderHandler(e)}
                  />
                  {error && (
                    <Message>
                      {"Пожалуйста, введите правильное значение"}
                    </Message>
                  )}
                  <BlueBtn
                    color="dark"
                    label="Оформить заказ"
                    clickHandler={placeOrderHandler}
                  />
                </>
              )}
            </UserInputContainer>
          </StyledOrderModal>
        </ModalWrapper>
      )}
    </>
  );
};

export default OrderModal;
