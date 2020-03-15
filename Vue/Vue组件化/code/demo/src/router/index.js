/*
 * @Author       : 阿昕
 * @Github       : https://github.com/webxing
 * @Date         : 2020-03-15 19:58:16
 * @LastEditors  : 阿昕
 * @LastEditTime : 2020-03-15 20:03:17
 * @Description  : 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'communication',
    component: () => import(/* webpackChunkName: "communication" */ '../views/communication.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
