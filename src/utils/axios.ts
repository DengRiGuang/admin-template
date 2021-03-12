/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-25 11:06:43
 * @lastTime: 2021-03-11 16:35:17
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\utils\axios.ts
 * @Description: 
 */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
// import { getToken } from './auth';
// import { ACCESS_TOKEN } from '@/config/mutation-types';
import { message as Message } from 'ant-design-vue';

// 接口前缀，读取配置文件
const BASE_URL = import.meta.env.VITE_APP_BASE_API;

const getAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${BASE_URL}`,
  });
  // 请求拦截器
  instance.interceptors.request.use((config) => {
    return config;
  }, errorHandle);
  instance.interceptors.response.use((response) => {
    const { status, message }  = response.data;
  if (status === 200) {
    return Promise.resolve(response.data);
  }
  Message.error(message);
  return Promise.reject(response.data);
  }, errorHandle);
  return instance;
};
const errorHandle = (error: AxiosError) => {
  if (error.response) {
    const { status, statusText } = error.response;
    if (status !== 200) {
      Message.error(statusText);
    }
  }
  return Promise.reject(error);
};

interface BaseResponse<T> {
  code: number;
  data: T;
  message: string;
}

// 基本 Ajax 格式
// interface BaseAjax {
//   get: <T>(url: string, config?: object) => Promise<BaseResponse<T>>;
// }


const GetAxios = () => {
  const instance: AxiosInstance = getAxiosInstance();
  const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
    return new Promise((resolve, reject) => {
      instance.request<BaseResponse<T>>(config).then((resp) => {
        const data = resp.data;
        if(data.code === 200) {
          resolve(data);
        } else {
          reject(resp);
        }
      });
    });
  };
  // Ajax 实体
  const Ajax = {
    get: function<T>(url: string, config: object = {}): Promise<BaseResponse<T>> {
      return request<T>(Object.assign({},config, { url: url }));
    },
  };
  return Ajax;
};

export const Ajax = GetAxios();

export default GetAxios;