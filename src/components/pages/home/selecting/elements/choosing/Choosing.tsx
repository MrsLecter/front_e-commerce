import Image from "next/image";
import { FC, useEffect, useState } from "react";

import BlueBtn from "@/components/common/buttons/BlueBtn/BlueBtn";
import SelectMenu from "@/components/common/selectMenu/SelectMenu";
import cars from "@images/auto-search.png";

import { ChoosingContent, Message, StyledChoosing } from "./Choosing.styles";
import rimsService from "@/api/rims-service";
import { useRouter } from "next/navigation";
import { AppRoutes, BASE_URL } from "@/constants/common";
import { getUrlWithSearchParams } from "@/utils/functions";

interface IListItemType {
  id: number;
  label: string;
}

const Choosing: FC = () => {
  const router = useRouter();

  const [brand, setBrand] = useState<string>("Марка");
  const [brandsArr, setBrandsArr] = useState<string[]>([]);
  const [model, setModel] = useState<string>("Модель");
  const [modelsArr, setModelsArr] = useState<string[]>([]);
  const [year, setYear] = useState<string>("Год");
  const [yearsArr, setYearsArr] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  const choseAutoHandler = () => {
    if (brand === "Марка" || model === "Модель" || year === "Год") {
      setMessage("Пожалуйста, заполните все поля");
      setTimeout(() => {
        setMessage("");
      }, 1300);
    } else {
      const url = getUrlWithSearchParams({
        brand,
        model,
        year,
      });
      router.push(url);
    }
  };

  useEffect(() => {
    const getCarBrands = async () => {
      setModelsArr([]);
      setYearsArr([]);
      const response = await rimsService.getAllAuto();
      setBrandsArr(response.data.message);
    };
    const getCarModels = async () => {
      const response = await rimsService.getAutoModels({
        brand,
      });
      setModelsArr(response.data.message);
    };
    const getCarYears = async () => {
      const response = await rimsService.getAutoYears({
        brand,
        model,
      });
      setYearsArr(response.data.message);
    };
    console.log("brand model year", brand, model, year);
    if (!brandsArr.length) {
      getCarBrands();
    }
    if (brand !== "Марка" && brand !== "") {
      getCarModels();
    }
    if (model !== "Модель" && model !== "") {
      getCarYears();
    }
  }, [brand, model, year]);
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
      <ChoosingContent>
        <p>Подбор по авто</p>
        <SelectMenu
          defaultOption={"Марка"}
          setValue={setBrand}
          optionsArray={brandsArr}
        />
        <SelectMenu
          defaultOption={"Модель"}
          setValue={setModel}
          optionsArray={modelsArr}
        />
        <SelectMenu
          defaultOption={"Год"}
          setValue={setYear}
          optionsArray={yearsArr}
        />
        <Message>{message}</Message>
        <BlueBtn
          color={"dark"}
          label={"Подобрать"}
          clickHandler={choseAutoHandler}
        />
      </ChoosingContent>
    </StyledChoosing>
  );
};

export default Choosing;
