import { INameValue } from 'src/stores/types/name-value'
import { UserStartPageEnum } from 'src/stores/types/user'
import { userStartPageNames } from 'src/utils/dictionaries'

export const startPageOptions: INameValue[] = [
  { name: userStartPageNames[UserStartPageEnum.PROFILE], value: UserStartPageEnum.PROFILE },
  { name: userStartPageNames[UserStartPageEnum.DISK_RECENT], value: UserStartPageEnum.DISK_RECENT },
  { name: userStartPageNames[UserStartPageEnum.DISK_FILES], value: UserStartPageEnum.DISK_FILES },
  { name: userStartPageNames[UserStartPageEnum.DISK_SHARED], value: UserStartPageEnum.DISK_SHARED },
  { name: userStartPageNames[UserStartPageEnum.DISK_TRASH], value: UserStartPageEnum.DISK_TRASH },
]
