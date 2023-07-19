import { FC, useState } from "react";
import { FilterHeader, StyledFilter } from "./Filter.styles";
import SelectMenu from "@/components/common/selectMenu/SelectMenu";
import BlueBtn from "@/components/common/buttons/BlueBtn/BlueBtn";
import Checkbox from "../checkbox/Checkbox";

interface Props {
  rimBrand: string;
  carParams?: string;
  setFilterParams: (value: string[]) => void;
  setDiameter: (value: string) => void;
}

const option = [
  { id: 1, label: "op1" },
  { id: 2, label: "op2" },
  { id: 3, label: "op3" },
  { id: 4, label: "op4" },
  { id: 5, label: "op5" },
];

const Filter: FC<Props> = ({
  rimBrand,
  carParams,
  setFilterParams,
  setDiameter,
}) => {
  const [auto, setAuto] = useState<string>("");
  const [optionsAutoList, setOptionsAutoList] = useState<any[]>(option);
  const [model, setModel] = useState<string>("");
  const [optionsModelList, setOptionsModelList] = useState<any[]>(option);
  const [year, setYear] = useState<string>("");
  const [optionsYearList, setOptionsYearList] = useState<any[]>(option);

  const pickUpHandler = () => {
    console.log("auto:", auto, "model:", model, "year:", year);
    setFilterParams([model, auto, year]);
  };

  return (
    <StyledFilter>
      <div>
        <p>Литые диски {rimBrand}</p>
        {carParams && <p>на {carParams}</p>}
        {!carParams && <p>Вы можете выбрать ваш автомобиль в фильтрах</p>}
      </div>
      <div>
        <FilterHeader>Авто</FilterHeader>
        <div>
          <SelectMenu
            defaultOption={"Марка"}
            setValue={(value: string) => setAuto(value)}
            optionsArray={optionsAutoList}
          />
          <SelectMenu
            defaultOption={"Модель"}
            setValue={(value: string) => setModel(value)}
            optionsArray={optionsModelList}
          />
          <SelectMenu
            defaultOption={"Год"}
            setValue={(value: string) => setYear(value)}
            optionsArray={optionsYearList}
          />
          <BlueBtn
            color={"dark"}
            clickHandler={pickUpHandler}
            label={"Подобрать"}
          />
        </div>
      </div>
      <div>
        <FilterHeader>Диаметр</FilterHeader>
        <div>
          <Checkbox name={"16''"} label={"16''"} setDiameter={setDiameter} />
          <Checkbox name={"17''"} label={"17''"} setDiameter={setDiameter} />
          <Checkbox name={"18''"} label={"18''"} setDiameter={setDiameter} />
        </div>
      </div>
    </StyledFilter>
  );
};

export default Filter;
