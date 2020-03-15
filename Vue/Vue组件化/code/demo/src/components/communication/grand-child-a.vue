<!--
 * @Author       : 阿昕
 * @Github       : https://github.com/webxing
 * @Date         : 2020-03-15 20:09:34
 * @LastEditors  : 阿昕
 * @LastEditTime : 2020-03-15 23:27:05
 * @Description  : 孙子组件-a
 -->
<template>
  <div>
    <p>------------</p>
    孙子组件-a
    <p>{{c2gc}}</p>

    <grand-grand-child-a></grand-grand-child-a>
  </div>
</template>

<script>
import GrandGrandChildA from "./grand-grand-child-a"

export default {
  inject: ["c2gc"],
  components: {
    GrandGrandChildA
  },
  mounted() {
    this.$bus.$emit("any", "grand-child-a")
  }
}
</script>

<style scoped>
</style>
