import axios, { AxiosResponse } from "axios";
import {
  GED_RIM_INFO_URL,
  GET_ALL_AUTO_URL,
  GET_AUTO_MODELS_URL,
  GET_AUTO_YEARS_URL,
  GET_FILTERED_RIMS_URL,
  GET_NEWS_URL,
  GET_POPULAR_RIMS_URL,
  GET_RIMS_BY_BRAND_URL,
  GET_RIM_DETAILED_URL,
  POST_CALL_DATA_URL,
  POST_FEEDBACK_URL,
  POST_SEARCH_TEXT_URL,
} from "@/constants/routes-api";
import {
  IAutoResponse,
  IGetRimsResponse,
  IGetRimDetailedResponse,
  INewsFeedResponse,
  IPostDataResponse,
} from "./rims-service.types";
import { IRimDetailedData } from "@/types/common.types";

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
  //TODO:delete ngrok headers
  public async getAllAuto(): Promise<AxiosResponse<IAutoResponse, any>> {
    try {
      const response = await axios.get<IAutoResponse>(GET_ALL_AUTO_URL, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err: any) {
      return err;
    }
  }
  //TODO:delete ngrok headers
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
            "ngrok-skip-browser-warning": "69420",
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
  //TODO:delete ngrok headers
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
            "ngrok-skip-browser-warning": "69420",
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
  //TODO:delete ngrok headers
  public async getPopularRims(): Promise<AxiosResponse<IGetRimsResponse, any>> {
    try {
      const response = await axios.get<IGetRimsResponse>(GET_POPULAR_RIMS_URL, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err: any) {
      return err;
    }
  }
  //TODO:delete ngrok headers
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
            "ngrok-skip-browser-warning": "69420",
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

  //TODO:delete ngrok headers
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
            "ngrok-skip-browser-warning": "69420",
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

  public async postCallData({
    phoneNumber,
  }: {
    phoneNumber: string;
  }): Promise<AxiosResponse<IPostDataResponse, any>> {
    try {
      const response = await axios.post<IPostDataResponse>(POST_CALL_DATA_URL, {
        phone: phoneNumber,
      });
      return response;
    } catch (err: any) {
      return err;
    }
  }

  public async postFeedback({
    question,
    phone,
    email,
  }: {
    question: string;
    phone: string;
    email?: string;
  }): Promise<AxiosResponse<IPostDataResponse, any>> {
    try {
      const response = await axios.post<IPostDataResponse>(POST_FEEDBACK_URL, {
        question,
        phone,
        email,
      });
      return response;
    } catch (err: any) {
      return err;
    }
  }

  //TODO:delete ngrok headers
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
            "ngrok-skip-browser-warning": "69420",
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

  //TODO:delete ngrok headers
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
          year,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
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
  }): Promise<AxiosResponse<IPostDataResponse, any>> {
    try {
      const response = await axios.post<IPostDataResponse>(GED_RIM_INFO_URL, {
        id,
      });
      return response;
    } catch (err: any) {
      return err;
    }
  }
}

const rimsService = new RimsService();
export default rimsService;
