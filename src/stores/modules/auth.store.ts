//Core
import { defineStore } from 'pinia'
import { ref } from 'vue'

//Types
import { IUserWithToken } from '../types/user'
import { ILoginBody, IRegistrationBody } from '../types/auth'

//Utils
import { api } from 'src/boot/axios'

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<IUserWithToken | null>(null)

  const registration = async (body: IRegistrationBody) => {
    const { data } = await api<IUserWithToken>('/auth/registration', { data: body, method: 'POST' })

    user.value = data
    localStorage.setItem('token', user.value.token)

    return data
  }

  const login = async (body: ILoginBody) => {
    const { data } = await api<IUserWithToken>('/auth/login', { data: body, method: 'POST' })

    user.value = data
    localStorage.setItem('token', user.value.token)

    return data
  }

  const logout = async () => {
    await api('/auth/logout', { method: 'POST' })

    localStorage.removeItem('token')
  }

  const refresh = async () => {
    const { data } = await api<string>('/auth/refresh', { method: 'GET' })

    user.value = null
    localStorage.setItem('token', data)

    return data
  }

  return {
    user,
    login,
    registration,
    logout,
    refresh,
  }
})
