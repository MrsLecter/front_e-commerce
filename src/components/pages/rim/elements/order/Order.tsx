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
import SelectObjectMenu from "@/components/common/selectMenu/SelectObjectMenu";

interface Props {
  header: string;
  rimPrice: number;
  optionsObject: { [id: number]: string };
  setRimTypeHandler: (id: number) => void;
  placeOrderHandler: () => void;
  loading: boolean;
}

const Order: FC<Props> = ({
  header,
  rimPrice,
  optionsObject,
  setRimTypeHandler,
  placeOrderHandler,
  loading,
}) => {
  const [isHaveAlert, setAlert] = useState<boolean>(true);

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
          <SelectObjectMenu
            defaultOption={0}
            setValue={setRimTypeHandler}
            optionsObject={optionsObject}
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
