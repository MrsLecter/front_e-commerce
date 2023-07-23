import { FC, useEffect, useState } from "react";
import Characteristics from "./elements/characteristics/Characteristics";
import { QuestionWrapper, StyledRimOrder } from "./RimOrder.styles";
import Gallery from "./elements/gallery/Gallery";
import Order from "./elements/order/Order";
import Questions from "@/components/common/questions/Questions";
import { AppModals } from "@/constants/common";
import rimsService from "@/api/rims-service";
import { usePathname } from "next/navigation";
import { IRimDetailedData } from "@/types/common.types";



interface Props {
  rimData: IRimDetailedData;
  managementObject: {
    isAppearing: boolean;
    isActive: (modalID: number) => boolean;
    activateHandler: (modalID: number) => void;
    closeHandler: () => void;
  };
}

const RimOrder: FC<Props> = ({ managementObject, rimData }) => {
  const pathname = usePathname();
  const placeOrderHandler = () => {
    managementObject.activateHandler(AppModals.Order);
  };
  return (
    <StyledRimOrder>
      <div>
        <Gallery />
      </div>
      <div>
        <Order
          header={rimData?.name}
          options={rimData.diameter}
          price={rimData.price}
          placeOrderHandler={placeOrderHandler}
        />
        <QuestionWrapper>
          <Questions modalHandler={managementObject.activateHandler} />
        </QuestionWrapper>
        <Characteristics
          width={[...rimData.width]}
          diameter={[...rimData.diameter]}
          fixingHoles={[...rimData.mountingHoles]}
        />
      </div>
    </StyledRimOrder>
  );
};
export default RimOrder;
