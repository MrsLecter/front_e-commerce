import { ManufacturesNames } from "./manufactures-card-list";

export const FIRST_PAGE_PARAM = "?page=1";

export enum AppRoutes {
  Home = "/",
  Aboout = "/about-us",
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

export const FOOTER_LINKS = [
  {
    id: 1,
    href: AppRoutes.Rims + ManufacturesNames.Inzi + FIRST_PAGE_PARAM,
    description: "Диски InziAone",
  },
  {
    id: 2,
    href: AppRoutes.Rims + ManufacturesNames.Kosei + FIRST_PAGE_PARAM,
    description: "Диски Kosei",
  },
  {
    id: 3,
    href: AppRoutes.Rims + ManufacturesNames.Marcello + FIRST_PAGE_PARAM,
    description: "Диски Marcello",
  },
  {
    id: 4,
    href: AppRoutes.Rims + ManufacturesNames.Mkw + FIRST_PAGE_PARAM,
    description: "Диски MKW",
  },
  {
    id: 5,
    href: AppRoutes.Rims + ManufacturesNames.Replica + FIRST_PAGE_PARAM,
    description: "Диски Replica",
  },
  {
    id: 6,
    href: AppRoutes.News,
    description: "Новости мира машин",
  },
  {
    id: 7,
    href: AppRoutes.Makers + "/all" + FIRST_PAGE_PARAM,
    description: "Подбор дисков по авто",
  },
  {
    id: 8,
    href: AppRoutes.Aboout,
    description: "О нас",
  },
];
