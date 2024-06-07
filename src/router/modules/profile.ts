import { RouteRecordRaw } from 'vue-router'
import { auth } from '../middleware/auth'

const profileroutes: RouteRecordRaw[] = [
  {
    name: 'profile',
    path: '/profile',
    meta: { middleware: [ auth ] },
    redirect: { name: 'profile.view' },
    component: () => import('pages/profile/ProfilePage.vue'),
    children: [
      {
        name: 'profile.view',
        path: 'view',
        meta: { middleware: [ auth ] },
        component: () => import('pages/profile/children/view/ProfileView.vue'),
      },
      {
        name: 'profile.edit',
        path: 'edit',
        meta: { middleware: [ auth ] },
        component: () => import('pages/profile/children/edit/ProfileEdit.vue'),
      },
    ],
  },
]

export default profileroutes
