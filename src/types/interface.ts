/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-03-11 09:31:39
 * @lastTime: 2021-03-11 10:45:50
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\types\interface.ts
 * @Description: 
 */
// 请求接口数据
export interface ResponseData<T = any> {
  /**
   * 状态码
   * @type { number }
   */
  code: number;

  /**
   * 数据
   * @type { T }
   */
  data: T;

  /**
   * 消息
   * @type { string }
   */
  message: string;
}