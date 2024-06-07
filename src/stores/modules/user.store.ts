//Core
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IUpdateUserBody, IUser } from '../types/user'
import { api } from 'src/boot/axios'

export const useUserStore = defineStore('user-store', () => {
  const user = ref<IUser | null>(null)

  const fetchUser = async () => {
    const { data } = await api<IUser>('/user', { method: 'GET' })

    user.value = data

    return data
  }

  const updateUser = async(body: IUpdateUserBody) => {
    const { data } = await api<IUser>('/user/update', { data: body, method: 'PUT' })

    user.value = data

    return data
  }

  return {
    user,
    fetchUser,
    updateUser,
  }
})
