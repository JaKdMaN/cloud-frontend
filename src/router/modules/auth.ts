import { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    name: 'auth',
    path: '/auth',
    redirect: { name: 'auth.login' },
    component: () => import('pages/auth/AuthPage.vue'),
    children: [
      {
        name: 'auth.login',
        path: 'login',
        component: () => import('pages/auth/children/AuthLogin.vue'),
      },
      {
        name: 'auth.registration',
        path: 'registration',
        component: () => import('pages/auth/children/AuthRegistration.vue'),
      },
    ],
  },
]

export default authRoutes
