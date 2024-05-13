import { RouteRecordRaw } from 'vue-router'

const profileroutes: RouteRecordRaw[] = [
  {
    name: 'profile',
    path: '/profile',
    redirect: { name: 'profile.view' },
    component: () => import('pages/profile/ProfilePage.vue'),
    children: [
      {
        name: 'profile.view',
        path: 'view',
        component: () => import('pages/profile/children/view/ProfileView.vue'),
      },
      {
        name: 'profile.edit',
        path: 'edit',
        component: () => import('pages/profile/children/edit/ProfileEdit.vue'),
      },
    ],
  },
]

export default profileroutes
