/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-03-11 09:29:25
 * @lastTime: 2021-03-12 17:00:21
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\models\index.ts
 * @Description: 
 */
/**
 * @description: 
 * @param {*} 登录请求参数
 * @return {*} username 用户名， password 密码
 */
export interface loginQuery {
  // 用户ID
  id?: number, // id
  username: string;
  password: string;
}


/**
 * @description: 
 * @param {*}
 * @return {*}
 */
export interface loginModel {
  username: string;
  password: string;
}