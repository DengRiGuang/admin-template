<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-03-09 15:22:46
 * @lastTime: 2021-03-10 16:49:49
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\views\exception\404.vue
 * @Description: 404 Not Found
-->
<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button type="primary" @click="onClick">Back Home</a-button>
    </template>
  </a-result>
</template>
<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const $router = useRouter();
    const onClick = () => {
      $router.push('/');
    };
    return {
      onClick,
    };
  },
});
</script>
