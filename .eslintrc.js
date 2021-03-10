/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-24 16:06:10
 * @lastTime: 2021-03-10 17:10:27
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\.eslintrc.js
 * @Description: 
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    'parser': '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  rules: {
    'vue/singleline-html-element-content-newline': [0, 'never'], // 在单行元素的内容之前和之后需要换行
    'vue/max-attributes-per-line': [0, 'never'], // 每行的最大属性数
    'vue/html-self-closing': [0, 'never'], // 自我封闭的风格标签
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
  },
};
