import Questions from "@/components/common/questions/Questions";
import { AppModals } from "@/constants/common";
import { FC } from "react";
import { QuestionWrapper, StyledRimOrder } from "./RimOrder.styles";
import Characteristics from "./elements/characteristics/Characteristics";
import Order from "./elements/order/Order";

import { IRimDetailedInfo } from "@/types/common.types";
import Slider from "./elements/slider/Slider";
import { useAppSelector } from "@/hooks/reducers.hook";

interface Props {
  rimData: IRimDetailedInfo;
  rimConfigObject: { [id: number]: string };
  setRimTypeHandler: (id: number) => void;
  rimType: number;
  loading: boolean;
  managementObject: {
    isAppearing: boolean;
    isActive: (modalID: number) => boolean;
    activateHandler: (modalID: number) => void;
    closeHandler: () => void;
  };
}

const RimOrder: FC<Props> = ({
  rimData,
  rimConfigObject,
  setRimTypeHandler,
  rimType,
  managementObject,
  loading,
}) => {
  const placeOrderHandler = () => {
    managementObject.activateHandler(AppModals.Order);
  };

  const { makerName } = useAppSelector((store) => store.carReducer);

  return (
    <StyledRimOrder>
      <div>
        <Slider imageLinks={rimData.images} loading={loading} />
      </div>
      <div>
        <Order
          defaultRimType={rimType}
          header={`${rimData.brand} - ${rimData.name}`}
          rimPrice={rimData.config[rimType] ? rimData.config[rimType].price : 0}
          optionsObject={rimConfigObject}
          setRimTypeHandler={setRimTypeHandler}
          placeOrderHandler={placeOrderHandler}
          loading={loading}
        />
        <QuestionWrapper>
          <Questions
            modalHandler={managementObject.activateHandler}
            loading={loading}
          />
        </QuestionWrapper>
        {!!rimData.config[rimType] && (
          <Characteristics
            width={
              rimData.config[rimType] ? rimData.config[rimType].width : " "
            }
            diameter={
              rimData.config[rimType] ? rimData.config[rimType].diameter : " "
            }
            boltPattern={
              rimData.config[rimType]
                ? rimData.config[rimType].boltPattern
                : " "
            }
            loading={loading}
          />
        )}
      </div>
    </StyledRimOrder>
  );
};
export default RimOrder;
