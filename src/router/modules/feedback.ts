import { RouteRecordRaw } from 'vue-router'

const feedbackRoutes: RouteRecordRaw[] = [
  {
    name: 'feedback',
    path: '/feedback',
    component: () => import('pages/feedback/FeedbackPage.vue'),
  },
]

export default feedbackRoutes
