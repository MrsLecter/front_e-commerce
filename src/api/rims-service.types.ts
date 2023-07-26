import { INewsFeedItem, IRimDetailedInfo, IRimObject } from "@/types/common.types";

export interface INewsFeedResponse {
  message: INewsFeedItem[];
}

export interface IAutoResponse {
  message: string[];
}

export interface IPostDataResponse {
  message: string;
}

export interface IGetRimsResponse {
  message: IRimObject[];
}

export interface IGetRimDetailedResponse {
  message: IRimDetailedInfo;
}
