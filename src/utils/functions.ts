import { AppRoutes } from "@/constants/common";
import { GET_BRANDS_URL } from "@/constants/routes-api";
import {
  IRimConfig,
  IRimDetailedInfo,
  IRimObject,
  IRimsConfigs,
} from "@/types/common.types";

export const getBtnLabel = (path: string[]): string => {
  const pathLen = path.length;

  switch (pathLen) {
    case 0:
      return "Все машины";
    case 1:
      return "Все модели";
    case 2:
      return "Все года";
    case 3:
      return "Все конфигурации";
    case 4:
      return "Все диски";
    default:
      return path.join("");
  }
};

export const getMakerQueryString = (path: string): string => {
  const pathLen = path.split("/").length;

  switch (pathLen) {
    case 2:
      return GET_BRANDS_URL;
    case 3:
      return "all models";
    case 4:
      return "all years";
    case 5:
      return "all diameters";
    default:
      return "all cars";
  }
};

export const getPrettyPrice = (price: number): string => {
  let priceStr = String(price);
  for (let i = priceStr.length - 1; i >= 0; i--) {
    if (i % 3 === 0 && i !== 0) {
      priceStr =
        priceStr.slice(0, priceStr.length - i) +
        " " +
        priceStr.slice(priceStr.length - i, priceStr.length);
    }
  }
  return priceStr;
};

export const getPrettyDate = (dateString: string): string => {
  const date = new Date(dateString);
  const dateArr = date.toLocaleString("uk-UA", {
    timeZone: "UTC",
    dateStyle: "short",
  });
  return dateArr;
};

export const createQueryString = ({
  brand,
  model,
  year,
  page,
  searchParamsString,
}: {
  brand: string;
  model: string;
  year: string;
  page: number;
  searchParamsString: string;
}): string => {
  const params = new URLSearchParams(searchParamsString);

  params.set("maker_name", brand);
  params.set("model_name", model);
  params.set("year", String(year));
  params.set("page", String(page));
  params.set("diameter", "all");
  const queryString = params.toString();
  return `${AppRoutes.Rims}/filter?${queryString}`;
};

export const getRimBrand = (rimBrand: string): string | undefined => {
  switch (rimBrand) {
    case "all":
      return "all";
    case "filter":
      return "";
    case "":
      return;
    default:
      return rimBrand;
  }
};

export const getRimsDiameterFiltered = ({
  rims,
  diameters,
}: {
  rims: IRimObject[];
  diameters: string[];
}) => {
  const arr = rims.filter((item) => {
    for (let diameter of diameters) {
      if (item.diameters!.includes(diameter)) {
        return item;
      }
    }
  });
  return arr;
};

export const getDimentionOptionsArray = (
  rimObject: IRimDetailedInfo
): string[] => {
  let extractOptions = [];
  for (let item of rimObject.rimVariations) {
    extractOptions.push(
      `${item.diameter}" - Диаметр;  ${item.width}" - Ширина;`
    );
  }
  return extractOptions;
};

export const getLinksObjectArr = (
  links: string[]
): {
  id: number;
  link: string;
}[] => {
  let imagesLinks = [];
  for (let i = 0; i < links.length; i++) {
    imagesLinks.push({
      id: i,
      link: links[i],
    });
  }
  return imagesLinks;
};

export const getAllConfigs = (configs: IRimsConfigs): string[] => {
  let optionsArr = [];
  const pcd = configs.pcd;
  const configsArr = configs.rims;
  configsArr.sort((a, b) => +a.diameter - +b.diameter);

  for (let config of configsArr) {
    let optionString = `${config.diameter}" - диаметр; ${config.width}" - ширина; ${pcd} - крепежные отверстия`;
    optionsArr.push(optionString);
  }

  return optionsArr;
};

export const setSearchParamForManufacturerFiltering = (
  manufacturer: string
) => {
  const params = new URLSearchParams("");
  params.set("page", "1");
  params.set("brand", manufacturer.substring(1));
  params.set("diameter", "all");
  return params.toString();
};

export const setSearchParamForFilter = (diameters:string, searchParams: string) => {
  const params = new URLSearchParams(searchParams);
  params.set("diameter", diameters);
  return params.toString();
};

// rim_id=12297&bolt_pattern=5x114.3&width=7&diameter=17&brand=Kosei&name=K1%20FS
// /MKW_M88%20Chrome?rim_id=3378&bolt_pattern=6x139.7&width=9&diameter=18&brand=MKW&name=M88%20Chrome
// /MKW_M88%20Chrome?rim_id=3378&bolt_pattern=6x139.7&width=9.0&diameter=18&brand=MKW&name=M88+Chrome
export const getUrlToRimPage = ({
  rimId,
  brand,
  name,
  config,
}: {
  rimId: string;
  brand: string;
  name: string;
  config: IRimConfig;
}): string => {
  const params = new URLSearchParams("");
  name = encodeURIComponent(name);
  params.set("rim_id", rimId);
  params.set("bolt_pattern", config.boltPattern);
  params.set("width", config.width);
  params.set("diameter", config.diameter);
  params.set("brand", brand);
  params.set("name", name);
  const searchParams = params.toString();

  const url = AppRoutes.Rim + `/${brand}_${name}?${searchParams}`;

  return url;
};

export const getPrepearedRimsData = (
  rimsData: IRimObject[]
): { rims: IRimObject[]; diameters: string[] } => {
  if (!rimsData || !rimsData.length) return { rims: [], diameters: [] };

  const allDiametersSet = new Set<string>();

  for (let rim of rimsData) {
    let diametersSet = new Set<string>();
    if (rim.config.length > 1) {
      rim.price = [rim.config[0].price];

      for (let rimType of rim.config) {
        rim.price = [Math.min(rimType.price, rim.price[0])];
        diametersSet.add(rimType.diameter);
        allDiametersSet.add(rimType.diameter);
      }
    } else {
      rim.price = [+rim.config[0].price];
      diametersSet.add(rim.config[0].diameter);
      allDiametersSet.add(rim.config[0].diameter);
    }
    rim.diameters = Array.from(diametersSet).sort((a, b) => +a - +b);
  }
  return {
    rims: rimsData,
    diameters: Array.from(allDiametersSet).sort((a, b) => +a - +b),
  };
};
