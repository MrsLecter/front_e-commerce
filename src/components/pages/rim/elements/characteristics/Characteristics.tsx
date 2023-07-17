import { FC } from "react";
import { ChHeader, ChRow, StyledChContainer } from "./Characteristics.styles";

interface Props {
  width: string;
  diameter: string;
  fixingHoles: string;
}

const Characteristics: FC<Props> = ({ width, diameter, fixingHoles }) => {
  return (
    <StyledChContainer>
      <ChHeader>Характеристики</ChHeader>
      <ChRow color={"#e8ebed"}>
        <div>Ширина обода (J)</div>
        <div />
        <div>
          {width}
          {'"'}
        </div>
      </ChRow>
      <ChRow>
        <div>Диаметр обода (D)</div>
        <div />
        <div>&#8709;{diameter}</div>
      </ChRow>
      <ChRow color={"#e8ebed"}>
        <div>Крепежные отверстия (PCD)</div>
        <div />
        <div><span>{fixingHoles}</span></div>
      </ChRow>
    </StyledChContainer>
  );
};

export default Characteristics;
