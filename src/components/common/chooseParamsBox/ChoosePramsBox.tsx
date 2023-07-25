import { FC, useEffect, useState } from "react";

import rimsService from "@/api/rims-service";
import BlueBtn from "@/components/common/buttons/BlueBtn/BlueBtn";
import SelectMenu from "@/components/common/selectMenu/SelectMenu";

import { ChoosingContent, Message } from "./ChooseParamsBox.styles";
import { useRouter } from "next/navigation";
import { getUrlWithSearchParams } from "@/utils/functions";

interface Props {
  header?: string;
  defaultParams: (string | null)[];
}

const ChooseParamsBox: FC<Props> = ({ header, defaultParams }) => {
  const router = useRouter();
  const [brand, setBrand] = useState<string>(
    defaultParams[0] ? defaultParams[0] : "Марка"
  );
  const [oldBrand, setOldBrand] = useState<string>(
    defaultParams[0] ? defaultParams[0] : "Марка"
  );
  const [brandsArr, setBrandsArr] = useState<string[]>([]);
  const [model, setModel] = useState<string>(
    defaultParams[1] ? defaultParams[1] : "Модель"
  );
  const [modelsArr, setModelsArr] = useState<string[]>([]);
  const [year, setYear] = useState<string>(
    defaultParams[2] ? defaultParams[2] : "Год"
  );
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
        year: +year,
      });
      router.push(url);
    }
  };

  useEffect(() => {
    const getCarBrands = async () => {
      setYearsArr([]);
      setModelsArr([]);
      const response = await rimsService.getAllAuto();
      setBrandsArr(response.data.message);
    };
    const getCarModels = async () => {
      setYearsArr([]);
      setYear("Год");
      setOldBrand(brand);
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
    if (brand !== oldBrand) {
      setYear("Год");
      setModel("Модель");
      setYearsArr([]);
      setModelsArr([]);
    }
    if (!brandsArr.length) {
      console.log("swipe ", brand, oldBrand);
      getCarBrands();
    }
    if (brand !== "Марка" && year === "Год") {
      getCarModels();
    }
    if (model !== "Модель" && brand !== "Марка") {
      getCarYears();
    }
  }, [brand, model, year]);

  return (
    <ChoosingContent>
      {header && <p>{header}</p>}
      <SelectMenu
        defaultOption={brand}
        setValue={setBrand}
        optionsArray={brandsArr}
      />
      <SelectMenu
        defaultOption={model}
        setValue={setModel}
        optionsArray={modelsArr}
      />
      <SelectMenu
        defaultOption={year}
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
  );
};

export default ChooseParamsBox;
