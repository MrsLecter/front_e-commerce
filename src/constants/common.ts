import { setSearchParamForManufacturerFiltering } from "@/utils/functions";
import { ManufacturesNames } from "./manufactures-card-list";

export const FIRST_PAGE_PARAM = "?page=1";

export enum AppRoutes {
  Home = "/",
  About = "/about-us",
  Makers = "/makers",
  News = "/news",
  Rims = "/rims",
  Rim = "/rim",
}

export enum AppModals {
  Contact = 1,
  Call = 2,
  Question = 3,
  Order = 4,
  Search = 5,
}
export const LOCATION_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d286.0194968181417!2d35.022059715701204!3d48.41905745516649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDI1JzA4LjciTiAzNcKwMDEnMjAuMCJF!5e0!3m2!1sru!2sua!4v1689573442366!5m2!1sru!2sua";

export const FOOTER_LINKS = [
  {
    id: 1,
    href:
      AppRoutes.Rims +
      ManufacturesNames.Inzi +
      "?" +
      setSearchParamForManufacturerFiltering(ManufacturesNames.Inzi),
    description: "Диски InziAone",
  },
  {
    id: 2,
    href:
      AppRoutes.Rims +
      ManufacturesNames.Kosei +
      "?" +
      setSearchParamForManufacturerFiltering(ManufacturesNames.Kosei),
    description: "Диски Kosei",
  },
  {
    id: 3,
    href:
      AppRoutes.Rims +
      ManufacturesNames.Marcello +
      "?" +
      setSearchParamForManufacturerFiltering(ManufacturesNames.Marcello),
    description: "Диски Marcello",
  },
  {
    id: 4,
    href:
      AppRoutes.Rims +
      ManufacturesNames.Mkw +
      "?" +
      setSearchParamForManufacturerFiltering(ManufacturesNames.Mkw),
    description: "Диски MKW",
  },
  {
    id: 5,
    href:
      AppRoutes.Rims +
      ManufacturesNames.Replica +
      "?" +
      setSearchParamForManufacturerFiltering(ManufacturesNames.Replica),
    description: "Диски Replica",
  },
  {
    id: 6,
    href: AppRoutes.News,
    description: "Новости мира машин",
  },
  {
    id: 7,
    href: AppRoutes.Makers + "/all",
    description: "Подбор дисков по авто",
  },
  {
    id: 8,
    href: AppRoutes.About,
    description: "О нас",
  },
];
