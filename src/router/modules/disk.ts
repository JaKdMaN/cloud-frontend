import { RouteRecordRaw } from 'vue-router'

const diskRoutes: RouteRecordRaw[] = [
  {
    name: 'disk',
    path: '/disk',
    redirect: { name: 'disk.storage' },
    component: () => import('pages/disk/DiskPage.vue'),
    children: [
      {
        name: 'disk.recent',
        path: 'recent',
        component: () => import('pages/disk/children/recent/DiskRecent.vue'),
      },
      {
        name: 'disk.storage',
        path: 'storage',
        redirect: { name: 'disk.storage.all' },
        component: () => import('pages/disk/children/storage/DiskStorage.vue'),
        children: [
          {
            name: 'disk.storage.all',
            path: '',
            component: () => import('pages/disk/children/storage/children/all/DiskStorageAll.vue'),
          },
          {
            name: 'disk.storage.folder',
            path: 'folder/:folderId',
            component: () => import('pages/disk/children/storage/children/folder/DiskStorageFolder.vue'),
          },
        ],
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
