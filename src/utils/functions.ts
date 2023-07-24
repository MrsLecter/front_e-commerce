import { AppRoutes, BASE_URL } from "@/constants/common";
import { GET_BRANDS_URL } from "@/constants/routes-api";
import { IRimObject } from "@/types/common.types";

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
      return "Все диаметры";
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
  year: string;
}) => {
  const urlOrigin = new URL(AppRoutes.Rims, BASE_URL);
  const params = new URLSearchParams(urlOrigin.search);
  params.set("maker_name", brand);
  params.set("model_name", model);
  params.set("year", year);
  const url = `${urlOrigin}?${params}`;
  return url;
};
