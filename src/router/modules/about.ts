import { RouteRecordRaw } from 'vue-router'

const aboutRoutes: RouteRecordRaw[] = [
  {
    name: 'about',
    path: '/about',
    component: () => import('pages/about/AboutPage.vue'),
  },
]

export default aboutRoutes
