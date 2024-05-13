import { RouteRecordRaw } from 'vue-router'

const diskRoutes: RouteRecordRaw[] = [
  {
    name: 'disk',
    path: '/disk',
    redirect: { name: 'disk.files' },
    component: () => import('pages/disk/DiskPage.vue'),
    children: [
      {
        name: 'disk.recent',
        path: 'recent',
        component: () => import('pages/disk/children/recent/DiskRecent.vue'),
      },
      {
        name: 'disk.files',
        path: 'files',
        component: () => import('pages/disk/children/files/DiskFiles.vue'),
      },
      {
        name: 'disk.shared',
        path: 'shared',
        component: () => import('pages/disk/children/shared/DiskShared.vue'),
      },
      {
        name: 'disk.favorites',
        path: 'favorites',
        component: () => import('pages/disk/children/favorites/DiskFavorites.vue'),
      },
      {
        name: 'disk.trash',
        path: 'trash',
        component: () => import('pages/disk/children/trash/DiskTrash.vue'),
      },
    ],
  },
]

export default diskRoutes
