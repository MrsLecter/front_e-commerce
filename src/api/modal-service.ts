import axios, { AxiosResponse } from "axios";

import {
  POST_CALL_DATA_URL,
  POST_FEEDBACK_URL,
  POST_ORDER_URL,
} from "@/constants/routes-api";

import { IRimConfig } from "@/types/common.types";
import { IPostDataResponse } from "./rims-service.types";

class ModalService {
  public async postOrderData({
    rimId,
    name,
    phone,
    email,
    orderConfig,
  }: {
    rimId: string;
    name: string;
    phone: string;
    email: string;
    orderConfig: IRimConfig;
  }): Promise<AxiosResponse<IPostDataResponse, any>> {
    try {
      const response = await axios.post<IPostDataResponse>(POST_ORDER_URL, {
        name,
        phone,
        email,
        rimId,
        orderConfig,
      });
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
}

const modalService = new ModalService();
export default modalService;
