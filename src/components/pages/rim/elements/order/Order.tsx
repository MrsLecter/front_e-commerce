import { FC, useState } from "react";

import BlueBtn from "@/components/common/buttons/BlueBtn/BlueBtn";
import SelectMenu from "@/components/common/selectMenu/SelectMenu";

import OrderDescription from "./elements/orderDescription/OrderDescription";
import OrderHeader from "./elements/orderHeader/OrderHeader";
import OrderPrice from "./elements/orderPrice/OrderPrice";
import { StyledAlert, StyledOrder } from "./Order.styles";

interface Props {
  header: string;
  options: string[];
  price: number;
  placeOrderHandler: () => void;
}

const Order: FC<Props> = ({ header, options, price, placeOrderHandler }) => {
  const [diameter, setDiameter] = useState<string>(options[0]);
  const [isHaveAlert, setAlert] = useState<boolean>(true);

  setTimeout(() => {
    setAlert(false);
  }, 2000);

  return (
    <StyledOrder onClick={() => setAlert(false)}>
      <OrderHeader header={header} />
      {isHaveAlert && (
        <StyledAlert>
          Здесь Вы можете выбрать диаметр и ширину дисков
        </StyledAlert>
      )}
      <SelectMenu
        defaultOption={options[0]}
        setValue={setDiameter}
        optionsArray={options}
      />
      <OrderPrice price={price} />
      <BlueBtn
        color={"dark"}
        label={"Заказать в 1 клик"}
        clickHandler={placeOrderHandler}
      />
      <OrderDescription />
    </StyledOrder>
  );
};

export default Order;
