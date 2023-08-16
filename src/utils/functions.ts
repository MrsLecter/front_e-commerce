import { AppRoutes } from "@/constants/common";
import { ManufacturesNames } from "@/constants/manufactures-card-list";
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
  const queryString = params.toString();
  return `${AppRoutes.Rims}/filter?${queryString}`;
};

export const getRetrievedDiameters = (rims: IRimObject[]): string[] => {
  if (!rims || !rims.length) {
    return [];
  }

  let map = new Map<string, string>();

  for (let rim of rims) {
    for (let diameter of rim.diameter) {
      if (!map.has(diameter)) {
        map.set(diameter, diameter);
      }
    }
  }
  const arrDiameters = Array.from(map, ([name, value]) => value);
  arrDiameters.sort((a, b) => +a - +b);
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
  return params.toString();
};

// rim_id=12297&bolt_pattern=5x114.3&width=7&diameter=17&brand=Kosei&name=K1%20FS
export const setSearchParamForRimPage = (parameters: IRimObject) => {
  const params = new URLSearchParams("");
  params.set("rim_id", parameters.rimId);
  params.set("bolt_pattern", "empty"); //TODO:
  params.set("width", "empty"); //TODO:
  params.set("diameter", parameters.diameter[0]);
  params.set("brand", parameters.name);
  return params.toString();
};

// export const getPrepearedRimsData = (rimsData: IRimObject[]): IRimObject[] => {
//   for (let rim of rimsData) {
//     if (rim.config.length > 1) {
//       rim.diameter = [+rim.config[0].diameter, +rim.config[0].diameter];
//       rim.price = [rim.config[0].price, rim.config[0].price];
//       for (let rimType of rim.config) {
//         rim.diameter = [
//           Math.min(+rimType.diameter, rim.diameter[0]),
//           Math.max(+rimType.diameter, rim.diameter[1]),
//         ];
//         rim.price = [
//           Math.min(rimType.price, rim.price[0]),
//           Math.max(rimType.price, rim.price[1]),
//         ];
//       }
//     } else {
//       rim.diameter = [+rim.config[0].diameter];
//       rim.price = [+rim.config[0].price];
//     }
//   }
//   return rimsData;
// };
