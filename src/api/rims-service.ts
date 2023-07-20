import axios, { AxiosResponse } from "axios";
import { GET_NEWS_URL } from "@/constants/routes-api";
import { INewsFeedResponse } from "./rims-service.types";

class RimsService {
  public async getNewsFeed({
    page = 0,
  }: {
    page: number;
  }): Promise<AxiosResponse<INewsFeedResponse, any>> {
    try {
      const response = await axios.get<INewsFeedResponse>(GET_NEWS_URL + page);
      return response;
    } catch (err: any) {
      return err;
    }
  }
}

const rimsService = new RimsService();
export default rimsService;
