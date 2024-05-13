import { ILink } from 'src/stores/types/link'

export const links: ILink[] = [
  {
    name: 'Недавние',
    path: { name: 'disk.recent' },
    icon: 'mdi-clock-time-eight',
  },
  {
    name: 'Файлы',
    path: { name: 'disk.files' },
    icon: 'mdi-file-document',
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
