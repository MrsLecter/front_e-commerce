import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState, memo, useRef } from "react";

import rimsService from "@/api/rims-service";
import SelectMenu from "@/components/common/selectMenu/SelectMenu";

import { useAppDispatch } from "@/hooks/reducers.hook";
import { setCarProps } from "@/store/reducers/carSlice";
import { createQueryString } from "@/utils/functions";
import BlueBtn from "../buttons/blueBtn/BlueBtn";
import { ChoosingContent, Message } from "./ChooseParamsBox.styles";
import { AppRoutes } from "@/constants/common";

interface Props {
  header?: string;
  defaultParams: (string | null)[];
}

const ChooseParamsBox: FC<Props> = ({ header, defaultParams }) => {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  let defaultMakerName = useRef<string>("");
  let defaultModelName = useRef<string>("");
  let defaultYearName = useRef<string>("");

  const paramMakerName = !!defaultParams[0] ? defaultParams[0] : "";
  const paramModelName = !!defaultParams[1] ? defaultParams[1] : "";
  const paramYearName = !!defaultParams[2] ? defaultParams[2] : "";

  if (paramMakerName !== defaultMakerName.current) {
    defaultMakerName.current = paramMakerName;
    if (paramModelName !== defaultModelName.current) {
      defaultModelName.current = paramModelName;
    }
  }
  if (paramYearName !== defaultYearName.current) {
    defaultYearName.current = paramYearName;
  }

  const [makerName, setMakerName] = useState<string>(defaultMakerName.current);
  const [modelName, setModelName] = useState<string>(defaultModelName.current);
  const [yearName, setYearName] = useState<string>(defaultYearName.current);

  const [makerNamesArray, setMakerNamesArray] = useState<string[]>([]);
  const [modelNamesArray, setModelNamesArray] = useState<string[]>([]);
  const [yearsArray, setYearsArray] = useState<string[]>([]);

  const [error, setError] = useState<boolean>(false);

  const chooseAutoHandler = () => {
    if (!makerName || !modelName || !yearName) setError(true);
    if (makerName && modelName && yearName) {
      dispatch(
        setCarProps({
          makerName: makerName,
          modelName: modelName,
          year: yearName,
        })
      );
      const queryString = createQueryString({
        makerName,
        modelName,
        year: yearName,
        page: 1,
        searchParamsString: searchParams.toString(),
      });
      if (pathname === `${AppRoutes.Rims}/filter`) {
        router.replace(queryString);
      } else {
        router.push(queryString);
      }
    }
  };

  useEffect(() => {
    if (error && makerName && modelName && yearName) {
      setError(false);
    }
  }, [makerName, modelName, yearName]);

  useEffect(() => {
    const getCarBrands = async () => {
      const response = await rimsService.getAllAuto();
      setMakerNamesArray(response.data.message);
      setYearName("");
    };

    const getAllArrays = async () => {
      const [makerResponse, modelsResponse, yearsResponse] =
        await Promise.allSettled([
          await rimsService.getAllAuto(),
          await rimsService.getAutoModels({ makerName }),
          await rimsService.getAutoYears({
            makerName,
            modelName,
          }),
        ]);
      if (makerResponse.status === "fulfilled") {
        setMakerNamesArray(makerResponse.value.data.message);
      }
      if (modelsResponse.status === "fulfilled") {
        setModelNamesArray(modelsResponse.value.data.message);
      }
      if (yearsResponse.status === "fulfilled") {
        setYearsArray(yearsResponse.value.data.message);
      }
    };

    if (
      defaultParams[0] &&
      defaultParams.length === 3 &&
      makerName === defaultParams[0]
    ) {
      getAllArrays();
    }

    if (!makerName && makerNamesArray.length === 0) {
      getCarBrands();
    }
  }, [makerName, modelName, yearName]);

  const setMakerNameHandler = (maker: string) => {
    const getCarModels = async () => {
      setYearsArray((prev) => []);
      setModelName("");
      setYearName("");
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
      setYearName("");
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

  const setYearNameHandler = (year: string) => {
    if (year && yearName !== year) {
      setYearName(year);
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
        selectedValue={yearName}
        setValue={setYearNameHandler}
        optionsArray={yearsArray}
        isNumber={true}
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

export default memo(ChooseParamsBox);
