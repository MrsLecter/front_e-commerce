import { FC } from "react";
import Characteristics from "./elements/characteristics/Characteristics";
import { QuestionWrapper, StyledRimOrder } from "./RimOrder.styles";
import Gallery from "./elements/gallery/Gallery";
import Order from "./elements/order/Order";
import Questions from "@/components/common/questions/Questions";

const RimOrder: FC = () => {
  let options = [
    {
      id: 1,
      label: "l1",
    },
    {
      id: 2,
      label: "l2",
    },
    {
      id: 3,
      label: "l3",
    },
  ];
  return (
    <StyledRimOrder>
      <div>
        <Gallery />
      </div>
      <div>
        <Order
          header={"InziAone - XR 050 AMB"}
          options={options}
          price={2569879}
        />
        <QuestionWrapper>
          <Questions />
        </QuestionWrapper>
        <Characteristics
          width={"8"}
          diameter={"16"}
          fixingHoles={["5x11", "5x120", "5x120", "5x120", "5x120", "5x120"]}
        />
      </div>
    </StyledRimOrder>
  );
};
export default RimOrder;
