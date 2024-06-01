import { DiskFileTypesEnum } from 'src/stores/types/disk'
import { UserGenderEnum, UserStartPageEnum } from 'src/stores/types/user'

export const userGenderNames: Record<UserGenderEnum, string> = {
  [UserGenderEnum.MALE]: 'Мужской',
  [UserGenderEnum.FEMALE]: 'Женский',
}

export const userStartPageNames: Record<UserStartPageEnum, string> = {
  [UserStartPageEnum.PROFILE]: 'Профиль',
  [UserStartPageEnum.DISK_RECENT]: 'Недавние',
  [UserStartPageEnum.DISK_FILES]: 'Файлы',
  [UserStartPageEnum.DISK_SHARED]: 'Общий доступ',
  [UserStartPageEnum.DISK_FAVORITES]: 'Избранное',
  [UserStartPageEnum.DISK_TRASH]: 'Корзина',
}

export const diskEntityTypeNames: Record<DiskFileTypesEnum, string> = {
  [DiskFileTypesEnum.FILE]: 'Файл',
  [DiskFileTypesEnum.IMAGE]: 'Изображение',
  [DiskFileTypesEnum.TEXT]: 'Текстовый документ',
  [DiskFileTypesEnum.AUDIO]: 'Аудиофайл',
  [DiskFileTypesEnum.VIDEO]: 'Видео',
}
