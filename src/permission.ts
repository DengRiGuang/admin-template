/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-25 10:27:46
 * @lastTime: 2021-02-25 17:14:52
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\permission.ts
 * @Description: 
 */
import router from './router';
import { getToken } from './utils/auth';
import { ACCESS_TOKEN } from './config/mutation-types';
const allowRoutePath = ['/user/login'];
const loginRoutePath = '/user/login';
const defaultRoutePath = '/';

router.beforeEach((to, form, next): void =>  {
  if (getToken(ACCESS_TOKEN)) {
    if (to.path === defaultRoutePath) {
      next();
    } else {
      if (to.path === loginRoutePath) {
        next({ path: defaultRoutePath });
      } else {
        next();
      }
    }
  } else {
    if (allowRoutePath.includes(to.path)) {
      next();
    } else {
      next({ path: '/user/login' });
    }
  }
});