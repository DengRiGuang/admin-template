<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-25 10:44:23
 * @lastTime: 2021-03-15 15:14:17
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
import { loginModel, loginQuery } from '@/models';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store.state.user.username);
    const book = reactive<loginQuery>({
      username: 'guang',
      password: '123456',
    });
    let data = reactive({});
    getIndex<loginModel>(book).then(resp => {
      console.log(resp.data);
    });
    return {
      book,
      data,
    };
  },
});
</script>

<style></style>
