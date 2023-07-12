import { FC, useState } from "react";
import Image from "next/image";
import cars from "@images/auto-search.png";
import SelectMenu from "@/components/common/selectMenu/SelectMenu";
import { StyledChoosing } from "./Choosing.styles";
import BlueBtn from "@/components/common/buttons/BlueBtn";

interface IListItemType {
  id: number;
  label: string;
}

const Choosing: FC = () => {
  const [brand, setBrand] = useState<string>("Марка");
  const [brandsArr, setBrandsArr] = useState<IListItemType[]>([]);
  const [model, setModel] = useState<string>("Модель");
  const [modelsArr, setModelsArr] = useState<IListItemType[]>([]);
  const [year, setYear] = useState<string>("Год");
  const [yearsArr, setYearsArr] = useState<IListItemType[]>([]);

  const choseAutoHandler = () => {
    if (brand === "Марка") {
      alert("Выберите параметры");
    }
    if (model === "Модель") {
      alert("Выберите модель");
    }
    if (year === "Год") {
      alert("Выберите год");
    }
    console.log("Params:", brand, model, year);
  };
  return (
    <StyledChoosing>
      <div>
        <Image
          src={cars}
          width={165}
          height={165}
          alt={"cars.png"}
          style={{ marginLeft: "10px", marginTop: "6px" }}
        />
      </div>
      <div>
        <p>Подбор по авто</p>
        <SelectMenu
          defaultOption={"Марка"}
          setValue={setBrand}
          optionsArray={brandsArr}
        />
        <SelectMenu
          defaultOption={"Модель"}
          setValue={setBrand}
          optionsArray={brandsArr}
        />
        <SelectMenu
          defaultOption={"Год"}
          setValue={setBrand}
          optionsArray={brandsArr}
        />
        <BlueBtn
          color={"dark"}
          label={"Подобрать"}
          clickHandler={choseAutoHandler}
        />
      </div>
    </StyledChoosing>
  );
};

export default Choosing;
