import { FC } from "react";
import { ChHeader, ChRow, StyledChContainer } from "./Characteristics.styles";

interface Props {
  width: string[];
  diameter: string[];
  fixingHoles: string[];
}

const Characteristics: FC<Props> = ({ width, diameter, fixingHoles }) => {
  return (
    <StyledChContainer>
      <ChHeader>Характеристики</ChHeader>
      <ChRow color={"#e8ebed"}>
        <div>Ширина обода (J)</div>
        <div />
        <div>
          {width.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      </ChRow>
      <ChRow color={" #fffefe"}>
        <div>Диаметр обода (D)</div>
        <div />
        <div>
          {diameter.map((item, index) => {
            return <span key={index}>&#8709;{item}</span>;
          })}
        </div>
      </ChRow>
      <ChRow color={"#e8ebed"}>
        <div>Крепежные отверстия (PCD)</div>
        <div />
        <div>
          {fixingHoles.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      </ChRow>
    </StyledChContainer>
  );
};

export default Characteristics;
