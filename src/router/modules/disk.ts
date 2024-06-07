import { RouteRecordRaw } from 'vue-router'
import { auth } from '../middleware/auth'

const diskRoutes: RouteRecordRaw[] = [
  {
    name: 'disk',
    path: '/disk',
    redirect: { name: 'disk.storage' },
    meta: { middleware: [ auth ] },
    component: () => import('pages/disk/DiskPage.vue'),
    children: [
      {
        name: 'disk.recent',
        path: 'recent',
        meta: { middleware: [ auth ] },
        component: () => import('pages/disk/children/recent/DiskRecent.vue'),
      },
      {
        name: 'disk.storage',
        path: 'storage',
        meta: { middleware: [ auth ] },
        redirect: { name: 'disk.storage.all' },
        component: () => import('pages/disk/children/storage/DiskStorage.vue'),
        children: [
          {
            name: 'disk.storage.all',
            path: '',
            meta: { middleware: [ auth ] },
            component: () => import('pages/disk/children/storage/children/all/DiskStorageAll.vue'),
          },
          {
            name: 'disk.storage.folder',
            path: 'folder/:folderId',
            meta: { middleware: [ auth ] },
            component: () => import('pages/disk/children/storage/children/folder/DiskStorageFolder.vue'),
          },
        ],
      },
      {
        name: 'disk.shared',
        path: 'shared',
        meta: { middleware: [ auth ] },
        component: () => import('pages/disk/children/shared/DiskShared.vue'),
      },
      {
        name: 'disk.favorites',
        path: 'favorites',
        meta: { middleware: [ auth ] },
        component: () => import('pages/disk/children/favorites/DiskFavorites.vue'),
      },
      {
        name: 'disk.trash',
        path: 'trash',
        meta: { middleware: [ auth ] },
        component: () => import('pages/disk/children/trash/DiskTrash.vue'),
      },
    ],
  },
]

export default diskRoutes
