import { INewsFeedItem, IRimObject } from "@/types/common.types";

export interface INewsFeedResponse {
  message: INewsFeedItem[];
}

export interface IAutoResponse {
  message: string[];
}

export interface IPostDataResponse {
  message: string;
}

export interface IGetPopularRimsResponse {
  message: IRimObject[];
}

export interface IGetRimDetailedResponse {
  message: IGetRimDetailedResponse;
}
