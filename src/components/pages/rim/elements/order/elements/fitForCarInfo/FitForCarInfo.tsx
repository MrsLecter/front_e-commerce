import { FC } from "react";
import { StyledCheckmark, StyledDescription, StyledSuitableBlock } from "./FitForCarInfo.styles";

interface Props {
    makerName:string;
    modelName: string;
    year: string
}

const FitForCarInfo: FC<Props> = ({makerName, modelName, year})=>{
    return (
      <StyledSuitableBlock>
        <StyledCheckmark />
        <StyledDescription>
          <p>Подходят для вашей машины</p>
          <p>{makerName}&nbsp;{modelName}&nbsp;{year}</p>
        </StyledDescription>
      </StyledSuitableBlock>
    );
}

export default FitForCarInfo;