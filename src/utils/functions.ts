import { AppRoutes } from "@/constants/common";
import { GET_BRANDS_URL } from "@/constants/routes-api";
import {
  IRimConfig,
  IRimDetailedInfo,
  IRimObject,
  IRimsConfigsByCar,
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
  makerName,
  modelName,
  year,
  page,
  searchParamsString,
}: {
  makerName: string;
  modelName: string;
  year: string;
  page: number;
  searchParamsString: string;
}): string => {
  const params = new URLSearchParams(searchParamsString);

  params.set("maker_name", makerName);
  params.set("model_name", modelName);
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

export const getRimConfigObject = (
  rimObject: IRimDetailedInfo
): { [id: number]: string } => {
  let rimConfigs: { [id: number]: string } = {};
  let index = 0;

  for (let item of rimObject.config) {
    rimConfigs[
      index++
    ] = `${item.diameter}" - Диаметр;  ${item.width}" - Ширина;`;
  }

  return rimConfigs;
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

export const getAllConfigs = (configs: IRimsConfigsByCar): string[] => {
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

export const setSearchParamForFilter = (
  diameters: string,
  searchParams: string
) => {
  const params = new URLSearchParams(searchParams);
  params.set("diameter", diameters.length > 0 ? diameters : "all");
  return params.toString();
};

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
  params.set("bolt_pattern", config.boltPattern.split("/")[0]);
  params.set("width", config.width);
  params.set("diameter", config.diameter);
  params.set("brand", brand);
  params.set("name", name);
  const searchParams = params.toString();

  const url = AppRoutes.Rim + `/${brand}_${name}?${searchParams}`;

  return url;
};


export const getRimConfigFromLabel = (label: string) => {
  const parsedLink = label.match(/[\d\.x]+/g);
  return {
    diameter: parsedLink![0],
    width: parsedLink![1],
    boltPattern: parsedLink![2],
  };
};

export const getSearchParamsByConfig = ({
  diameter,
  width,
  boltPattern,
}: {
  diameter: string;
  width: string;
  boltPattern: string;
}): string => {
  const params = new URLSearchParams("");
  params.set("diameter", diameter);
  params.set("width", width);
  params.set("bolt_pattern", boltPattern);
  const searchParams = params.toString();

  const url = `${AppRoutes.Rim}?${searchParams}`;

  return url;
};

export const getCurrentRimConfigType = ({
  rimObject,
  width,
  diameter,
  boltPattern,
}: {
  rimObject: IRimDetailedInfo;
  width: string;
  diameter: string;
  boltPattern: string;
}) => {
  for (let i = 0; i < rimObject.config.length; i++) {
    let item = rimObject.config[i];

    if (
      item.width === width &&
      item.diameter === diameter &&
      item.boltPattern === boltPattern
    ) {
      return i;
    }
  }
  return 0;
};
