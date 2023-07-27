import { AppRoutes, BASE_URL } from "@/constants/common";
import { GET_BRANDS_URL } from "@/constants/routes-api";
import {
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

export const getSertedRimData = (rimDataArr: IRimObject[]): IRimObject[] => {
  let map = new Map();

  for (let rim of rimDataArr) {
    const currRimId = rim.rimId;
    if (map.has(currRimId)) {
      let rimObj = map.get(currRimId);
      rimObj.diameter.push(rim.diameter);
      rimObj.price.push(rim.price);

      map.delete(currRimId);
      map.set(currRimId, rimObj);
    }
    if (!map.has(currRimId)) {
      const rimObj = {
        rimId: currRimId,
        name: rim.name,
        image: rim.image,
        diameter: [rim.diameter],
        price: [rim.price],
      };
      map.set(currRimId, rimObj);
    }
  }
  const sortedRimData = Array.from(map, ([name, value]) => value);
  return sortedRimData;
};

export const getUrlWithSearchParams = ({
  brand,
  model,
  year,
}: {
  brand: string;
  model: string;
  year: number;
}) => {
  const urlOrigin = new URL(AppRoutes.Rims + "/filter", BASE_URL);
  const params = new URLSearchParams(urlOrigin.search);

  params.set("brand", brand);
  params.set("model", model);
  params.set("year", String(year));
  const url = `${urlOrigin}?${params}`;
  return url;
};

export const getRetrievedDiameters = (rims: IRimObject[]): string[] => {
  if (!rims || !rims.length) {
    return [];
  }

  let map = new Map();

  for (let rim of rims) {
    for (let diameter of rim.diameter) {
      if (!map.has(diameter)) {
        map.set(diameter, diameter);
      }
    }
  }
  const arrDiameters = Array.from(map, ([name, value]) => value);
  arrDiameters.sort((a, b) => a - b);
  return arrDiameters;
};

export const getRimBrand = (rimBrand: string): string | undefined => {
  switch (rimBrand) {
    case "all":
      return "all";
    case "filter":
      return "";
    case "":
      return;
    case "mkw":
      return "MKW";
    case "inzi":
      return "InziAone";
    default:
      return rimBrand[0].toUpperCase() + rimBrand.slice(1);
  }
};

export const getDiameterLabel = (diameters: string[]): string[] => {
  if (diameters.length === 1) {
    return diameters;
  } else {
    diameters.sort((a, b) => +a - +b);
    return [diameters[0], diameters[diameters.length - 1]];
  }
};

export const getPriceLabel = (prices: number[]): string => {
  if (prices.length === 1) {
    return getPrettyPrice(prices[0]);
  } else {
    prices.sort((a, b) => a - b);
    return getPrettyPrice(prices[0]);
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
      if (item.diameter.includes(diameter)) {
        return item;
      }
    }
  });
  return arr;
};

export const getDimentionOptionsArray = (rimObject: IRimDetailedInfo) => {
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
