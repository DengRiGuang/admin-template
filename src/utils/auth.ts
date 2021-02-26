/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-25 10:36:09
 * @lastTime: 2021-02-25 10:40:12
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\utils\auth.ts
 * @Description: 
 */
export function getToken(key: string): string | null {
  return localStorage.getItem(key);
}

export function setToken(key: string, value: string): void {
  return localStorage.setItem(key, value);
}

export function removeToken(key: string): void {
  return localStorage.removeItem(key);
}