<!--
 * @Author       : 阿昕
 * @Github       : https://github.com/webxing
 * @Date         : 2020-03-15 20:09:50
 * @LastEditors  : 阿昕
 * @LastEditTime : 2020-03-16 00:27:53
 * @Description  : 孙子组件-b
 -->
<template>
  <div>
    <p>------------</p>
    孙子组件-b

    <p>------插槽------</p>
    <slot></slot>
    |
    <slot name="name"></slot>
    |
    <slot name='scope' :info='scopeData'></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scopeData: "我是作用域插槽"
    }
  },
  created() {
    this.$bus.$on("any", args => {
      console.log(`${args}执行$on...(grand-child-b)`)
    })
  }
}
</script>

<style scoped>
</style>
