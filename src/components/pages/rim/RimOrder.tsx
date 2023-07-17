import { FC } from "react";
import Characteristics from "./elements/characteristics/Characteristics";
import { StyledRimOrder } from "./RimOrder.styles";

const RimOrder: FC = () => {
  return (
    <StyledRimOrder>
      {/* <RimGallery/> */}
      {/* <Order/> */}
      {/* <Questions/> */}
      <Characteristics width={"12"} diameter={"18"} fixingHoles={"3x45"} />
    </StyledRimOrder>
  );
};
export default RimOrder;
