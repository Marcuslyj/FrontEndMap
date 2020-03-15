<!--
 * @Author       : 阿昕
 * @Github       : https://github.com/webxing
 * @Date         : 2020-03-15 20:10:13
 * @LastEditors  : 阿昕
 * @LastEditTime : 2020-03-16 00:22:03
 * @Description  : 孙子的孙子
 -->
<template>
  <div>
    <p>------------</p>
    孙子的孙子组件-a
  </div>
</template>

<script>
export default {
  created() {
    this.$bus.$on("any", args => {
      console.log(`${args}执行$on...(grand-grand-child-a)`)
    })
  }
}
</script>

<style scoped>
</style>
