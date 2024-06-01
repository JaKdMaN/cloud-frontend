//Core
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { IUser, UserGenderEnum, UserStartPageEnum } from '../types/user'

//Images
import avatar from 'assets/images/profile/avatar.png'

export const useUserStore = defineStore('user-store', () => {
  const user = ref<IUser | null>(null)

  const fetchUser = () => {
    const localUser: IUser = {
      name: 'Дарья',
      surname: 'Попова',
      avatar: avatar,
      phone: '+7-999-999-99-99',
      dateOfbirth: '24.07.2000',
      gender: UserGenderEnum.FEMALE,
      startPage: UserStartPageEnum.DISK_FILES,
      email: 'popova@gmail.com',
      password: '123456',
    }

    user.value = localUser
  }

  return {
    user,
    fetchUser,
  }
})
