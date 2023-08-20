import { FC, useState, memo } from "react";

import BlueBtn from "@/components/common/buttons/blueBtn/BlueBtn";

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
import FitForCarInfo from "./elements/fitForCarInfo/FitForCarInfo";
import { useAppSelector } from "@/hooks/reducers.hook";

interface Props {
  header: string;
  rimPrice: number;
  optionsObject: { [id: number]: string };
  defaultRimType: number;
  setRimTypeHandler: (id: number) => void;
  placeOrderHandler: () => void;
  loading: boolean;
}

const Order: FC<Props> = ({
  header,
  rimPrice,
  optionsObject,
  defaultRimType,
  setRimTypeHandler,
  placeOrderHandler,
  loading,
}) => {
  const [isHaveAlert, setAlert] = useState<boolean>(true);
  const { makerName, modelName, year } = useAppSelector(
    (store) => store.carReducer
  );
  const alertClickHandler = () => {
    setAlert(false);
  };

  const selectRimTypeHandler = (id: number) => {
    if (isHaveAlert) setAlert(false);
    setRimTypeHandler(id);
  };

  return (
    <StyledOrder>
      {!loading && (
        <>
          <OrderHeader header={header} />
          {isHaveAlert && (
            <StyledAlert onClick={() => setAlert(false)}>
              Здесь Вы можете выбрать диаметр и ширину дисков
            </StyledAlert>
          )}
          <SelectObjectMenu
            defaultOption={+defaultRimType}
            setValue={selectRimTypeHandler}
            optionsObject={optionsObject}
          />
          {!!makerName && (
            <FitForCarInfo
              makerName={makerName}
              modelName={modelName}
              year={year}
            />
          )}
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

export default memo(Order);
