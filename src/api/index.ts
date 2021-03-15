/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-03-10 10:58:17
 * @lastTime: 2021-03-15 14:25:30
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\api\index.ts
 * @Description: 
 */
import { loginQuery } from '@/models';
import { ResponseData } from '@/types/interface';
import request from '@/utils/request';

/**
 * @description: 登录
 * @param {loginQuery} query
 * @return {*}
 */
export function getIndex<T>(query:loginQuery) {
  return  request.request<ResponseData, T>({
    url: '/platform/sysBanner/selectAll',
    method: 'GET',
    params: query,
  });
}

