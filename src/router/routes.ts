import { RouteRecordRaw } from 'vue-router'
import homeRoutes from './modules/home'
import authRoutes from './modules/auth'
import aboutRoutes from './modules/about'
import contactsRoutes from './modules/contacts'
import feedbackRoutes from './modules/feedback'
import profileroutes from './modules/profile'
import diskRoutes from './modules/disk'

const routes: RouteRecordRaw[] = [
  ...homeRoutes,
  ...authRoutes,
  ...aboutRoutes,
  ...contactsRoutes,
  ...feedbackRoutes,
  ...profileroutes,
  ...diskRoutes,
  {
    name: 'app',
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/NotFoundPage.vue'),
  },
]

export default routes
