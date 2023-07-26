import { FC, useState } from "react";

import BlueBtn from "@/components/common/buttons/BlueBtn/BlueBtn";
import SelectMenu from "@/components/common/selectMenu/SelectMenu";

import OrderDescription from "./elements/orderDescription/OrderDescription";
import OrderHeader from "./elements/orderHeader/OrderHeader";
import OrderPrice from "./elements/orderPrice/OrderPrice";
import {
  LoadingDescription,
  LoadingOrderHeader,
  LoadingOrderMenu,
  LoadingOrderPrice,
  StyledAlert,
  StyledOrder,
} from "./Order.styles";
import { LoadingButton } from "@/styles/common";

interface Props {
  header: string;
  rimPrice: number;
  optionArray: string[];
  setVariationHandler: (option: string) => void;
  placeOrderHandler: () => void;
  loading: boolean;
}

const Order: FC<Props> = ({
  header,
  rimPrice,
  optionArray,
  setVariationHandler,
  placeOrderHandler,
  loading,
}) => {
  const [isHaveAlert, setAlert] = useState<boolean>(true);

  setTimeout(() => {
    setAlert(false);
  }, 2000);

  return (
    <StyledOrder onClick={() => setAlert(false)}>
      {!loading && (
        <>
          <OrderHeader header={header} />
          {isHaveAlert && (
            <StyledAlert>
              Здесь Вы можете выбрать диаметр и ширину дисков
            </StyledAlert>
          )}
          <SelectMenu
            defaultOption={optionArray[0]}
            setValue={setVariationHandler}
            optionsArray={optionArray}
          />
          <OrderPrice price={rimPrice} />
          <BlueBtn
            color={"dark"}
            label={"Заказать в 1 клик"}
            clickHandler={placeOrderHandler}
          />
          <OrderDescription />
        </>
      )}
      {loading && (
        <>
          <LoadingOrderHeader />
          <LoadingOrderMenu />
          <LoadingOrderPrice>
            <div></div>
          </LoadingOrderPrice>
          <LoadingButton height={36} />
          <LoadingDescription />
        </>
      )}
    </StyledOrder>
  );
};

export default Order;
