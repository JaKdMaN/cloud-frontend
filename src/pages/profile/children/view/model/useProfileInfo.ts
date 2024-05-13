//Types
import { IUser } from 'src/stores/types/user'
import { InfoBlock } from './info-block-type'
import { userGenderNames, userStartPageNames } from 'src/utils/dictionaries'
import { computed } from 'vue'

export const useProfileInfo = (user: IUser) => {
  const userGender = user.gender ? userGenderNames[user.gender] : ''
  const userStartPage = user.startPage ? userStartPageNames[user.startPage]  : ''

  const profileInfoBlocks = computed((): InfoBlock[] => {
    return [
      {
        title: 'Основная информация',
        fields: [
          { name: 'Имя', value: user.name ?? '' },
          { name: 'Фамилия', value: user.surname ?? '' },
          { name: 'Дата рождения', value: user.dateOfbirth ?? '' },
          { name: 'Пол', value:  userGender },
        ],

      },
      {
        title: 'Контактная информация',
        fields: [
          { name: 'Номер телефона',value: user.phone ?? '' },
          { name: 'Электронная почта', value: user.email },
        ],
      },
      {
        title: 'Дополнительно',
        fields: [
          { name: 'Стартовая страница', value: userStartPage },
        ],
      },
    ]
  })

  return {
    profileInfoBlocks,
  }
}
