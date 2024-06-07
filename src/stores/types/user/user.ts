import { DiskFile } from '../disk'
import { UserGenderEnum } from './user-gender'
import { UserStartPageEnum } from './user-start-page'

export interface IUser {
  name?: string
  surname?: string
  avatar?: DiskFile
  phone?: string
  dateOfBirth?: string
  gender?: UserGenderEnum
  startPage?: UserStartPageEnum
  email: string
}

export interface IUserWithToken {
  user: IUser,
  token: string
}

export interface IUpdateUserBody {
  name?: string
  surname?: string
  phone?: string
  avatarId?: number
  dateOfBirth?: string
  gender?: UserGenderEnum
  startPage?: UserStartPageEnum
  email: string
}
