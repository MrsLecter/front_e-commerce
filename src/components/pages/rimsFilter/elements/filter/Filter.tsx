import { FC } from "react";
import { FilterHeader, StyledFilter } from "./Filter.styles";
import Checkbox from "../checkbox/Checkbox";
import ChooseParamsBox from "@/components/common/chooseParamsBox/ChoosePramsBox";

interface Props {
  rimBrand: string | null;
  path?: string;
  checkedDiameters: string | null;
  rimFilterParams: (string | null)[];
  avaliableDiameters: string[];
  setFilterDiameters: (value: string) => void;
}

const Filter: FC<Props> = ({
  rimBrand = "all",
  path = "all",
  rimFilterParams,
  avaliableDiameters,
  checkedDiameters,
  setFilterDiameters,
}) => {
  const chekedDiametersArr = checkedDiameters
    ? checkedDiameters.split("+")
    : [];
  console.log("rimBrand", rimBrand, "path", path, path.length);
  return (
    <StyledFilter>
      <div>
        {!path && !rimBrand && <p>Литые диски</p>}
        {rimBrand === "all" && <p>Литые диски на авто</p>}
        {path && rimBrand !== "all" && (
          <p>
            Литые диски&nbsp;
            {path === "all" ? "на авто" : path}
          </p>
        )}

        {!path && rimBrand && rimBrand !== "all" && path !== "all" && (
          <p>Литые диски&nbsp;{rimBrand}</p>
        )}
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
                checked={chekedDiametersArr.includes(item)}
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
