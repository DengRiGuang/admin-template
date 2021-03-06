/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-24 16:06:10
 * @lastTime: 2021-03-15 15:13:45
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
    'comma-dangle': ['error', 'always-multiline'], // 对象后要加逗号
    'semi': ['error', 'always'], // 强制分号
    'quotes': ['error', 'single'], // 强制使用单引号
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true,
    }],//  强制对象文字属性中的键和值之间保持一致的间距
    'space-infix-ops': 2, // 要求在运算符之间加空格
  },
};
