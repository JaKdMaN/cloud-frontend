import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  history: createWebHistory(process.env.VUE_ROUTER_BASE),
})

export default router