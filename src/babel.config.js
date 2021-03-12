/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-22 11:50:07
 * @lastTime: 2021-02-22 11:50:22
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\babel.config.js
 * @Description: 
 */
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          // 由于 customStyleName 在配置中被声明的原因，`style: true` 会被直接忽略掉，
          // 如果你需要使用 scss 源文件，把文件结尾的扩展名从 `.css` 替换成 `.scss` 就可以了
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
};