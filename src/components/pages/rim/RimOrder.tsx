import { FC } from "react";
import Characteristics from "./elements/characteristics/Characteristics";
import { QuestionWrapper, StyledRimOrder } from "./RimOrder.styles";
import Gallery from "./elements/gallery/Gallery";
import Order from "./elements/order/Order";
import Questions from "@/components/common/questions/Questions";
import { AppModals } from "@/constants/common";

import { IRimDetailedInfo, IRimParams } from "@/types/common.types";

interface Props {
  rimData: IRimDetailedInfo;
  optionArray: string[];
  setVariation: (vary: string) => void;
  rimVariation: IRimParams;
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
  optionArray,
  setVariation,
  rimVariation,
  managementObject,
  loading,
}) => {
  const placeOrderHandler = () => {
    managementObject.activateHandler(AppModals.Order);
  };

  return (
    <StyledRimOrder>
      <div>
        <Gallery imageLinks={rimData.images} loading={loading} />
      </div>
      <div>
        <Order
          header={rimData.name}
          rimPrice={rimVariation.price}
          optionArray={optionArray}
          setVariationHandler={setVariation}
          placeOrderHandler={placeOrderHandler}
          loading={loading}
        />
        <QuestionWrapper>
          <Questions
            modalHandler={managementObject.activateHandler}
            loading={loading}
          />
        </QuestionWrapper>
        <Characteristics
          width={rimVariation.width}
          diameter={rimVariation.diameter}
          fixingHoles={rimVariation.mountingHoles}
          loading={loading}
        />
      </div>
    </StyledRimOrder>
  );
};
export default RimOrder;
