import { FC, useEffect, useState } from "react";
import Characteristics from "./elements/characteristics/Characteristics";
import { QuestionWrapper, StyledRimOrder } from "./RimOrder.styles";
import Gallery from "./elements/gallery/Gallery";
import Order from "./elements/order/Order";
import Questions from "@/components/common/questions/Questions";
import { AppModals } from "@/constants/common";
import rimsService from "@/api/rims-service";
import { useParams, usePathname } from "next/navigation";
import {
  IRimDetailedData,
  IRimDetailedInfo,
  IRimObject,
} from "@/types/common.types";
import { rimStub } from "@/constants/helpers";

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
  const params = useParams();
  const [rimObject, setRimObject] = useState<IRimDetailedInfo>(rimStub);
  console.log("rimid ", params.params);
  const placeOrderHandler = () => {
    managementObject.activateHandler(AppModals.Order);
  };

  useEffect(() => {
    const getDetailedRimsInfo = async () => {
      const response = await rimsService.getRimData({
        id: params.params,
      });
      console.log("resposne rim data", response);
    };
    getDetailedRimsInfo();
  }, []);
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
