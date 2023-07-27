import axios, { AxiosResponse } from "axios";

import {
  GET_ALL_AUTO_URL,
  GET_AUTO_MODELS_URL,
  GET_AUTO_YEARS_URL,
  GET_FILTERED_RIMS_URL,
  GET_NEWS_URL,
  GET_POPULAR_RIMS_URL,
  GET_RIM_BY_CONFIG_URL,
  GET_RIM_CONFIGS_URL,
  GET_RIM_DETAILED_URL,
  GET_RIM_INFO_URL,
  GET_RIMS_BY_BRAND_URL,
  POST_SEARCH_TEXT_URL,
} from "@/constants/routes-api";

import {
  IAutoResponse,
  IGetRimDetailedResponse,
  IGetRimsConfigResponse,
  IGetRimsResponse,
  INewsFeedResponse,
} from "./rims-service.types";

class RimsService {
  public async getNewsFeed({
    page = 0,
  }: {
    page: number;
  }): Promise<AxiosResponse<INewsFeedResponse, any>> {
    try {
      const response = await axios.get<INewsFeedResponse>(
        GET_NEWS_URL + `/${page}`
      );
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async getAllAuto(): Promise<AxiosResponse<IAutoResponse, any>> {
    try {
      const response = await axios.get<IAutoResponse>(GET_ALL_AUTO_URL, {
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
    brand,
    model,
  }: {
    brand: string;
    model: string;
  }): Promise<AxiosResponse<IAutoResponse, any>> {
    try {
      const response = await axios.get<IAutoResponse>(
        `${GET_AUTO_YEARS_URL}/${brand}/${model}`,
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
    brand,
  }: {
    brand: string;
  }): Promise<AxiosResponse<IAutoResponse, any>> {
    try {
      const response = await axios.get<IAutoResponse>(
        `${GET_AUTO_MODELS_URL}/${brand}`,
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

  public async getRimDetailedData({
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
  }): Promise<AxiosResponse<IGetRimsResponse, any>> {
    try {
      const response = await axios.post<IGetRimsResponse>(
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
    brand,
    model,
    year,
  }: {
    brand: string;
    model: string;
    year: string;
  }): Promise<AxiosResponse<IGetRimsResponse, any>> {
    try {
      const response = await axios.post<IGetRimsResponse>(
        GET_FILTERED_RIMS_URL,
        {
          brand,
          model,
          year: +year,
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
    brand,
    model,
    year,
  }: {
    brand: string;
    model: string;
    year: string;
  }): Promise<AxiosResponse<IGetRimsConfigResponse, any>> {
    try {
      const response = await axios.get<IGetRimsConfigResponse>(
        `${GET_RIM_CONFIGS_URL}/${brand}/${model}/${year}`,
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
  }): Promise<AxiosResponse<IGetRimsResponse, any>> {
    try {
      const response = await axios.post<IGetRimsResponse>(
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
