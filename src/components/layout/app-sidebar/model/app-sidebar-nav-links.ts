import { ILink } from 'src/stores/types/link'

export const links: ILink[] = [
  {
    name: 'Недавние',
    path: { name: 'disk.recent' },
    icon: 'mdi-clock-time-eight',
  },
  {
    name: 'Хранилище',
    path: { name: 'disk.storage' },
    icon: 'mdi-cloud',
  },
  {
    name: 'Общий доступ',
    path: { name: 'disk.shared' },
    icon: 'mdi-account-group',
  },
  {
    name: 'Избранное',
    path: { name: 'disk.favorites' },
    icon: 'mdi-star',
  },
  {
    name: 'Корзина',
    path: { name: 'disk.trash' },
    icon: 'mdi-trash-can',
  },
]
