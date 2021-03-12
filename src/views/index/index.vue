<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-25 10:44:23
 * @lastTime: 2021-03-11 14:06:22
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\views\index\index.vue
 * @Description: 
-->
<template>
  <div class="index-container"></div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { getIndex } from '@/api/index';
import { loginQuery } from '@/models';

export default defineComponent({
  setup() {
    const book = reactive<loginQuery>({
      username: '',
      password: '',
    });
    let data = reactive({});
    getIndex<loginQuery>(book).then((resp) => {
      data = resp;
    });
    return {
      book,
      data,
    };
  },
});
</script>

<style></style>
