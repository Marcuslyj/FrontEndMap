/*
 * @Author       : 阿昕
 * @Github       : https://github.com/webxing
 * @Date         : 2020-03-15 22:57:07
 * @LastEditors  : 阿昕
 * @LastEditTime : 2020-03-15 23:25:21
 * @Description  : 事件总线-负责事件的派发、监听、回调
 */
class Bus {
  constructor() {
    this.callbacks = {}
  }

  $on(name, cb) {
    this.callbacks[name] = this.callbacks[name]  || []
    this.callbacks[name].push(cb)
  }

  $emit(name, ...args) {
    if (this.callbacks[name]) {
      this.callbacks[name].map(cb => cb(args))
    }
  }
}

export default Bus
