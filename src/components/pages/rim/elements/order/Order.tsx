import { FC, useState } from "react";

import BlueBtn from "@/components/common/buttons/BlueBtn/BlueBtn";
import SelectMenu from "@/components/common/selectMenu/SelectMenu";

import OrderDescription from "./elements/orderDescription/OrderDescription";
import OrderHeader from "./elements/orderHeader/OrderHeader";
import OrderPrice from "./elements/orderPrice/OrderPrice";
import { StyledAlert, StyledOrder } from "./Order.styles";

interface Props {
  header: string;
  options: {
    id: number;
    label: string;
  }[];
  price: number;
}

const Order: FC<Props> = ({ header, options, price }) => {
  const [diameter, setDiameter] = useState<string>(options[0].label);
  const [isHaveAlert, setAlert] = useState<boolean>(true);

  const makePurchase = () => {
    alert("make purchase");
  };
  return (
    <StyledOrder onClick={() => setAlert(false)}>
      <OrderHeader header={header} />
      {isHaveAlert && (
        <StyledAlert>
          Здесь Вы можете выбрать диаметр и ширину дисков
        </StyledAlert>
      )}
      <SelectMenu
        defaultOption={options[0].label}
        setValue={setDiameter}
        optionsArray={options}
      />
      <OrderPrice price={45236} />
      <BlueBtn
        color={"dark"}
        label={"Заказать в 1 клик"}
        clickHandler={makePurchase}
      />
      <OrderDescription />
    </StyledOrder>
  );
};

export default Order;
