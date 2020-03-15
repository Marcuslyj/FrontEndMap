<!--
 * @Author       : 阿昕
 * @Github       : https://github.com/webxing
 * @Date         : 2020-03-15 19:49:31
 * @LastEditors  : 阿昕
 * @LastEditTime : 2020-03-15 23:15:17
 * @Description  : 子组件-a
 -->
 
<template>
  <div style="border: 1px solid red;">
    子组件-a：

    <!-- props中声明了 -->
    <p>{{msg}}</p>

    <!-- props中没有声明 -->
    <p>{{$attrs.otherMsg}}</p>

    <grand-child-a></grand-child-a>
  </div>
</template>

<script>
import GrandChildA from "./grand-child-a"
export default {
  components: {
    GrandChildA
  },
  props: ["msg"],
  mounted() {
    this.$emit("c2p", "[子-->父] 由emit触发...")

    this.$parent.$emit("c2c", "[子-->子] 借助parent由emit触发...")

    setTimeout(() => {
      console.log(this.rf, "(子组件-a)")
      console.log(this.cd, "(子组件-a)")
    }, 1000)
  }
}
</script>

<style scoped>
</style>
