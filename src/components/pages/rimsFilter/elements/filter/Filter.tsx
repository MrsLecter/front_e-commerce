import { FC } from "react";
import { FilterHeader, StyledFilter } from "./Filter.styles";
import Checkbox from "../checkbox/Checkbox";
import ChooseParamsBox from "@/components/common/chooseParamsBox/ChoosePramsBox";

interface Props {
  rimBrand?: string;
  rimFilterParams: (string | null)[];
  avaliableDiameters: string[];
  setFilterDiameters: (value: string) => void;
}

const Filter: FC<Props> = ({
  rimBrand,
  rimFilterParams,
  avaliableDiameters,
  setFilterDiameters,
}) => {
  return (
    <StyledFilter>
      <div>
        {rimBrand && (
          <p>Литые диски&nbsp;{rimBrand === "all" ? "на авто" : rimBrand}</p>
        )}
        {!rimBrand && <p>Литые диски</p>}
        {rimFilterParams[0] && <p>на&nbsp;{rimFilterParams.join(" ")}</p>}
        {!rimFilterParams[0] && (
          <p>Вы можете выбрать ваш автомобиль в фильтрах</p>
        )}
      </div>
      <div>
        <FilterHeader>Авто</FilterHeader>
        <div>
          <ChooseParamsBox defaultParams={rimFilterParams} />
        </div>
      </div>
      <div>
        <FilterHeader>Диаметр</FilterHeader>
        <div>
          {avaliableDiameters.map((item, index) => {
            return (
              <Checkbox
                key={index}
                name={item}
                label={item}
                setDiameter={(selectedDiameter: string) =>
                  setFilterDiameters(selectedDiameter)
                }
              />
            );
          })}
        </div>
      </div>
    </StyledFilter>
  );
};

export default Filter;
