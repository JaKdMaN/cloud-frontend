//Core
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { IUser, UserGenderEnum, UserStartPageEnum } from '../types/user'

//Images
import avatar from 'assets/images/profile/avatar.jpg'

export const useUserStore = defineStore('user-store', () => {
  const user = ref<IUser | null>(null)

  const fetchUser = () => {
    const localUser: IUser = {
      name: 'Alina',
      surname: 'Potapova',
      avatar: avatar,
      phone: '+7-999-999-99-99',
      dateOfbirth: '24.07.2000',
      gender: UserGenderEnum.FEMALE,
      startPage: UserStartPageEnum.DISK_FILES,
      email: 'potapov@gmail.com',
      password: '123456',
    }

    user.value = localUser
  }

  return {
    user,
    fetchUser,
  }
})
