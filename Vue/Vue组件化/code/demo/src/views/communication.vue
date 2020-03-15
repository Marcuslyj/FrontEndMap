<!--
 * @Author       : 阿昕
 * @Github       : https://github.com/webxing
 * @Date         : 2020-03-15 19:58:16
 * @LastEditors  : 阿昕
 * @LastEditTime : 2020-03-15 22:45:30
 * @Description  : 
 -->
 <template>
  <div class="parent">

    <child-a msg='[父-->子 ①] 来自parents的消息...' otherMsg='[父-->子 ②] 别的来自parents的消息...' ref='childA' @c2p='emitHandler($event)'></child-a>
    <child-b></child-b>

  </div>
</template>
 
 <script>
import ChildA from "../components/communication/child-a"
import ChildB from "../components/communication/child-b"
export default {
  components: {
    ChildA,
    ChildB
  },
  provide() {
    return {
      c2gc: "[父-->孙] 注入的值..."
    }
  },
  mounted() {
    this.$refs.childA.rf = "[父-->子 ③] 来自refs的设定..."

    this.$children[0].cd = "[父-->子 ④] 来自children[0]的设定..."
  },
  methods: {
    emitHandler(msg) {
      console.log(msg, "(父组件)")
    }
  }
}
</script>
 
<style scoped>
</style>
 

