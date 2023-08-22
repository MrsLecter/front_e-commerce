import Image from "next/image";
import { FC, useState, KeyboardEvent, useEffect } from "react";

import { useInput } from "@/hooks/use-input";
import { getPrettyPrice } from "@/utils/functions";
import { EMAIL_REGEXP, PHONE_REGEXP } from "@/utils/regexp";
import BlueBtn from "@/components/common/buttons/blueBtn/BlueBtn";
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
import { IModalProps, IRimDetailedInfo } from "@/types/common.types";
import { AppModals } from "@/constants/common";
import modalService from "@/api/modal-service";
import ErrorContent from "../elements/feedbackContent/ErrorContent";
import SuccessContent from "../elements/feedbackContent/SuccessContent";

interface Props extends IModalProps {
  rimData: IRimDetailedInfo;
  rimType: number;
}

const OrderModal: FC<Props> = ({ managementObject, rimData, rimType }) => {
  const {
    value: name,
    error: nameIsValid,
    changeHandler: nameChangeHandler,
    refresh: refreshNameHandler,
  } = useInput({
    regexp: "none",
    allowEmpty: false,
  });

  const {
    value: email,
    error: emailIsValid,
    changeHandler: emailChangeHandler,
    refresh: refreshEmailHandler,
  } = useInput({
    regexp: EMAIL_REGEXP,
    allowEmpty: false,
  });

  const {
    value: phone,
    error: phoneIsValid,
    changeHandler: phoneChangeHandler,
    refresh: refreshPhoneHandler,
  } = useInput({
    regexp: PHONE_REGEXP,
    allowEmpty: true,
    maskType: "phone",
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
            rimId: rimData.rimId,
            width: rimData.config[rimType].width,
            offset: rimData.config[rimType].offset,
            diameter: rimData.config[rimType].diameter,
            boltPattern: rimData.config[rimType].boltPattern,
            centralBore: rimData.config[rimType].centralBore,
            price: rimData.config[rimType].price,
          },
        });
        setOrderReady(true);
        setTimeout(() => {
          setOrderReady(false);
          setOrderError(false);
          setError(false);
          refreshNameHandler();
          refreshPhoneHandler();
          refreshEmailHandler();
        }, 3000);
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

  useEffect(() => {
    setOrderReady(false);
    setOrderError(false);
    setError(false);
    refreshNameHandler();
    refreshPhoneHandler();
    refreshEmailHandler();
  }, [managementObject.isAppearing]);

  return (
    <>
      {!managementObject.isActive(AppModals.Order) && <></>}
      {managementObject.isActive(AppModals.Order) && (
        <ModalWrapper
          backClickHandler={() => managementObject.closeHandler()}
          isAppearing={managementObject.isAppearing}
        >
          <StyledOrderModal>
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
                    <span>{rimData.name}</span>
                    <span>
                      {getPrettyPrice(rimData.config[rimType].price)}&nbsp;грн
                    </span>
                  </div>
                  <div>
                    <span>{rimData.brand}</span>
                    <span>4&nbsp;шт</span>
                  </div>
                </ProductDescription>
              </Product>
              <Price>
                <p>
                  {getPrettyPrice(rimData.config[rimType].price * 4)}&nbsp;грн
                </p>
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
                  color={"white"}
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
                    autofocus={false}
                  />

                  <Input
                    type={"tel"}
                    placeholder={"Ваш телефон (прим: 0505554433)"}
                    inputValue={phone}
                    isRequired={true}
                    maxLen={12}
                    onChangeHandler={phoneChangeHandler}
                    onKeyDown={(e) => orderHandler(e)}
                  />
                  <Input
                    type={"email"}
                    placeholder={"Ваш email"}
                    inputValue={email}
                    isRequired={false}
                    onChangeHandler={emailChangeHandler}
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
