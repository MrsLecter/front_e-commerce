import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

import rimsService from "@/api/rims-service";
import SelectMenu from "@/components/common/selectMenu/SelectMenu";

import { useAppDispatch } from "@/hooks/reducers.hook";
import { setCarProps } from "@/store/reducers/carSlice";
import { createQueryString } from "@/utils/functions";
import BlueBtn from "../buttons/blueBtn/BlueBtn";
import { ChoosingContent, Message } from "./ChooseParamsBox.styles";

interface Props {
  header?: string;
  defaultParams: (string | null)[];
}

const ChooseParamsBox: FC<Props> = ({ header, defaultParams }) => {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const dispatch = useAppDispatch();

  const defaultMakerName = !!defaultParams[0] ? defaultParams[0] : "";
  const defaultModelName = !!defaultParams[1] ? defaultParams[1] : "";
  const defaultYear = !!defaultParams[2] ? defaultParams[2] : "";

  const [makerName, setMakerName] = useState<string>(defaultMakerName);
  const [modelName, setModelName] = useState<string>(defaultModelName);
  const [year, setYear] = useState<string>(defaultYear);

  const [makerNamesArray, setMakerNamesArray] = useState<string[]>([]);
  const [modelNamesArray, setModelNamesArray] = useState<string[]>([]);
  const [yearsArray, setYearsArray] = useState<string[]>([]);

  const [error, setError] = useState<boolean>(false);

  const chooseAutoHandler = () => {
    if (!makerName || !modelName || !year) setError(true);
    if (makerName && modelName && year) {
      dispatch(
        setCarProps({ makerName: makerName, modelName: modelName, year })
      );
      const queryString = createQueryString({
        makerName,
        modelName,
        year,
        page: 1,
        searchParamsString: searchParams.toString(),
      });
      router.push(queryString);
    }
  };

  useEffect(() => {
    if (error && makerName && modelName && year) {
      setError(false);
    }
  }, [makerName, modelName, year]);

  useEffect(() => {
    const getCarBrands = async () => {
      const response = await rimsService.getAllAuto();
      setMakerNamesArray(response.data.message);
    };

    const getCarModelsAndYears = async () => {
      const [modelsResponse, yearsResponse] = await Promise.allSettled([
        await rimsService.getAutoModels({ makerName }),
        await rimsService.getAutoYears({ makerName, modelName }),
      ]);
      if (modelsResponse.status === "fulfilled") {
        setModelNamesArray(modelsResponse.value.data.message);
      }
      if (yearsResponse.status === "fulfilled") {
        setYearsArray(yearsResponse.value.data.message);
      }
    };

    if (!makerNamesArray.length) {
      getCarBrands();
    }

    if (defaultParams[0] && defaultParams.length === 3) {
      setModelName(defaultParams[1] as string);
      setYear(defaultParams[2] as string);
      getCarModelsAndYears();
    }
  }, []);

  const setMakerNameHandler = (maker: string) => {
    const getCarModels = async () => {
      setYear("");
      setModelName("");
      setMakerName(maker);
      const modelsResponse = await rimsService.getAutoModels({
        makerName: maker,
      });
      setModelNamesArray(modelsResponse.data.message);
    };

    if (makerName !== maker) {
      getCarModels();
    }
  };

  const setModelNameHandler = (model: string) => {
    const getCarYears = async () => {
      setYear("");
      setModelName(model);
      const response = await rimsService.getAutoYears({
        makerName,
        modelName: model,
      });
      setYearsArray(response.data.message);
    };

    if (modelName !== model) {
      getCarYears();
    }
  };

  return (
    <ChoosingContent>
      {header && <p>{header}</p>}
      <SelectMenu
        defaultOption={"Марка"}
        selectedValue={makerName}
        setValue={setMakerNameHandler}
        optionsArray={makerNamesArray}
      />
      <SelectMenu
        defaultOption={"Модель"}
        selectedValue={modelName}
        setValue={setModelNameHandler}
        optionsArray={modelNamesArray}
      />
      <SelectMenu
        defaultOption={"Год"}
        selectedValue={year}
        setValue={setYear}
        optionsArray={yearsArray}
      />
      <Message>{error ? "Пожалуйста, заполните все поля" : ""}</Message>
      <BlueBtn
        color={"dark"}
        label={"Подобрать"}
        clickHandler={chooseAutoHandler}
        isModal={true}
      />
    </ChoosingContent>
  );
};

export default ChooseParamsBox;
