<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-25 10:44:23
 * @lastTime: 2021-03-10 11:47:22
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\views\index\index.vue
 * @Description: 
-->
<template>
  <div class="index-container"></div>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";
import { getIndex } from '@/api/index'
export default defineComponent({
  setup(props) {
    // const { ctx } = getCurrentInstance()
    // ctx.$message.error('This is a error message')
    const form = {
      encryptedData: 'd0ckayeJTQjUFSgGOn67WbkMYEktSQ3X7l5LGfPyHGA1Ex0nkoh8KwDKNkKBCDZgrEosi4mfVSkQxbyN2fix+LQveDJ6d0Bw/70TbTpMKberGcsZK0nHIyS0d2KCoUr7zkcFMqHT8lFzNb1Vn6xJ4vTp5eXloak9pItZdTFr+I0='
    }
    getIndex(form).then((data) => {
      console.log(data)
    })
  }
});
</script>

<style>

</style>