import axios, { AxiosResponse } from "axios";

import {
  GET_ALL_AUTO_URL,
  GET_AUTO_MODELS_URL,
  GET_AUTO_YEARS_URL,
  GET_FILTERED_RIMS_URL,
  GET_POPULAR_RIMS_URL,
  GET_RIM_BY_CONFIG_URL,
  GET_RIM_CONFIGS_URL,
  GET_RIM_DETAILED_URL,
  GET_RIM_INFO_URL,
  GET_RIMS_BY_BRAND_URL,
  POST_SEARCH_TEXT_URL,
} from "@/constants/routes-api";

import {
  IOptionListResponse,
  IGetRimDetailedResponse,
  IGetRimsConfigResponse,
  IGetRimsResponse,
  IGetRimsDiameterResponse,
} from "./rims-service.types";

class RimsService {
  public async getAllAuto(): Promise<AxiosResponse<IOptionListResponse, any>> {
    try {
      const response = await axios.get<IOptionListResponse>(GET_ALL_AUTO_URL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getAutoYears({
    makerName,
    modelName,
  }: {
    makerName: string;
    modelName: string;
  }): Promise<AxiosResponse<IOptionListResponse, any>> {
    try {
      const response = await axios.get<IOptionListResponse>(
        `${GET_AUTO_YEARS_URL}/${makerName}/${modelName}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getAutoModels({
    makerName,
  }: {
    makerName: string;
  }): Promise<AxiosResponse<IOptionListResponse, any>> {
    try {
      const response = await axios.get<IOptionListResponse>(
        `${GET_AUTO_MODELS_URL}/${makerName}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getPopularRims(): Promise<AxiosResponse<IGetRimsResponse, any>> {
    try {
      const response = await axios.get<IGetRimsResponse>(GET_POPULAR_RIMS_URL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getRimById({
    rimId,
  }: {
    rimId: string;
  }): Promise<AxiosResponse<IGetRimDetailedResponse, any>> {
    try {
      const response = await axios.post<IGetRimDetailedResponse>(
        GET_RIM_DETAILED_URL,
        {
          id: rimId,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async postSearchString({
    searchText,
  }: {
    searchText: string;
  }): Promise<AxiosResponse<IGetRimsResponse, any>> {
    try {
      const response = await axios.post<IGetRimsResponse>(
        POST_SEARCH_TEXT_URL,
        {
          searchText,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getRimsByBrand({
    rimBrand,
  }: {
    rimBrand: string;
  }): Promise<AxiosResponse<IGetRimsDiameterResponse, any>> {
    try {
      const response = await axios.post<IGetRimsDiameterResponse>(
        GET_RIMS_BY_BRAND_URL,
        {
          rimBrand,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getFilteredRims({
    carBrand,
    carModel,
    carYear,
    rimsBrand,
  }: {
    carBrand: string;
    carModel: string;
    carYear: string;
    rimsBrand: string | null;
  }): Promise<AxiosResponse<IGetRimsDiameterResponse, any>> {
    try {
      const response = await axios.post<IGetRimsDiameterResponse>(
        GET_FILTERED_RIMS_URL,
        {
          brand: carBrand,
          model: carModel,
          year: +carYear,
          rimBrand: rimsBrand ? rimsBrand : "all",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getRimData({
    id,
  }: {
    id: string;
  }): Promise<AxiosResponse<IGetRimDetailedResponse, any>> {
    try {
      const response = await axios.post<IGetRimDetailedResponse>(
        GET_RIM_INFO_URL,
        {
          id,
        }
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getRimsConfig({
    makerName,
    modelName,
    year,
  }: {
    makerName: string;
    modelName: string;
    year: string;
  }): Promise<AxiosResponse<IGetRimsConfigResponse, any>> {
    try {
      const response = await axios.get<IGetRimsConfigResponse>(
        `${GET_RIM_CONFIGS_URL}/${makerName}/${modelName}/${year}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getRimsByConfig({
    mountingHoles,
    width,
    diameter,
  }: {
    mountingHoles: string;
    width: string;
    diameter: string;
  }): Promise<AxiosResponse<IGetRimsDiameterResponse, any>> {
    try {
      const response = await axios.post<IGetRimsDiameterResponse>(
        GET_RIM_BY_CONFIG_URL,
        {
          mountingHoles,
          width,
          diameter,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }
}

const rimsService = new RimsService();
export default rimsService;
