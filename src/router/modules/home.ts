import { RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/home',
    component: () => import('pages/home/HomePage.vue'),
  },
]

export default homeRoutes
