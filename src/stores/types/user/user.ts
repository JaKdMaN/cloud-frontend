import { UserGenderEnum } from './user-gender'
import { UserStartPageEnum } from './user-start-page'

export interface IUser {
  name?: string
  surname?: string
  avatar?: string
  phone?: string
  dateOfbirth?: string
  gender?: UserGenderEnum
  socialLinks?: string[]
  startPage?: UserStartPageEnum
  email: string
  password: string
}

export interface IUpdateUser {
  name?: string
  surname?: string
  phone?: string
  dateOfBirth?: string
  gender?: string
  startPage?: string
  email: string
}