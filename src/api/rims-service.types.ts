import {
  IRimDetailedInfo,
  IRimObject,
  IRimResponse,
  IRimsConfigsByCar,
} from "@/types/common.types";

export interface IOptionListResponse {
  message: string[];
}

export interface IPostDataResponse {
  message: string;
}

export interface IGetRimsResponse {
  message: IRimObject[];
}

export interface IGetRimsDiameterResponse {
  message: IRimResponse;
}

export interface IGetRimDetailedResponse {
  message: IRimDetailedInfo;
}

export interface IGetRimsConfigResponse {
  message: IRimsConfigsByCar;
}
