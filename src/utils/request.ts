/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-25 11:06:43
 * @lastTime: 2021-03-10 11:51:32
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\utils\request.ts
 * @Description: 
 */
import axios, { AxiosError } from 'axios'
import { getToken } from './auth'
import { ACCESS_TOKEN } from '@/config/mutation-types'
import { message as Message } from 'ant-design-vue';
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 6000, // 超时时间
});
const errorHandle = (error: AxiosError) => {
  if (error.response) {
    const { status, statusText } = error.response
    if (status !== 200) {
      Message.error(statusText)
    }
  }
  return Promise.reject(error)
};

// 请求拦截器
request.interceptors.request.use(config => {
  // const token = getToken(ACCESS_TOKEN);
  // if (token) {
  //   config.headers['Access-Token'] = token;
  // }
  return config;
}, errorHandle);

// 响应拦截器
request.interceptors.response.use((resp) => {
  const { status, message }  = resp.data
  if (status === 200) {
    return resp.data;
  }
  Message.error(message)
  return Promise.reject(resp.data)
}, errorHandle);

export default request;