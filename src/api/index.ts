/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-03-10 10:58:17
 * @lastTime: 2021-03-12 17:26:59
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\api\index.ts
 * @Description: 
 */
import { loginQuery, loginModel } from '@/models';
import { ResponseData } from '@/types/interface';
import request from '@/utils/request';

/**
 * @description: 登录
 * @param {loginQuery} query
 * @return {*}
 */
export function getIndex(data: loginQuery) {
  return  request.request<ResponseData, loginModel>({
    url: '/andex-admin/admin/login',
    method: 'POST',
    data: data,
  });
}

