<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-03-09 15:23:54
 * @lastTime: 2021-03-09 15:24:04
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\views\exception\500.vue
 * @Description: 500 服务器错误
-->
<template>
  <a-result status="500" title="500" sub-title="Sorry, the server is wrong.">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>