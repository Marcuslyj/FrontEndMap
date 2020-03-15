<!--
 * @Author       : 阿昕
 * @Github       : https://github.com/webxing
 * @Date         : 2020-03-15 19:49:31
 * @LastEditors  : 阿昕
 * @LastEditTime : 2020-03-16 00:27:40
 * @Description  : 子组件-b
 -->
 
<template>
  <div style="border: 1px solid blue;">
    <p>------------</p>
    子组件-b

    <grand-child-b>
      <template v-slot>默认插槽</template>
      <template v-slot:name>具名插槽</template>
      <template v-slot:scope='{info}'>
        {{info}}
      </template>
    </grand-child-b>
  </div>
</template>

<script>
import GrandChildB from "./grand-child-b"
export default {
  components: {
    GrandChildB
  },
  created() {
    this.$parent.$on("c2c", v => {
      console.log(v, "(子组件-b)")
    })
  }
}
</script>

<style scoped>
</style>
