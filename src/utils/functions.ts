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
        priceStr.slice(0, priceStr.length - i) +
        " " +
        priceStr.slice(priceStr.length - i, priceStr.length);
    }
  }
  return priceStr;
};

export const getPrettyDate = (dateString: string) => {
  const date = new Date(dateString);
  const dateArr = date.toLocaleString("uk-UA", {
    timeZone: "UTC",
    dateStyle: "short",
  });
  return dateArr;
};
