import { GET_BRANDS_URL } from "@/constants/routes-api";

export const getBtnLabel = (path: string[]) => {
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

export const getMakerQueryString = (path: string) => {
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
      return "allcars";
  }
};

export const getPrettyPrice = (price: number) => {
  let priceStr = String(price);
  for (let i = priceStr.length - 1; i >= 0; i--) {
    if (i % 3 === 0 && i !== 0) {
      priceStr =
        priceStr.slice(0, i - 1) + " " + priceStr.slice(i - 1, priceStr.length);
    }
  }
  return priceStr;
};
