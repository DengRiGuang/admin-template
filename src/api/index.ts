/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-03-10 10:58:17
 * @lastTime: 2021-03-10 17:14:11
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\api\index.ts
 * @Description: 
 */
import request from '@/utils/request';

export function getIndex(data: object) {
  return request({
    url: '/andex-admin/admin/login',
    method: 'post',
    data: data,
  });
}
