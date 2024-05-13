import { IUser } from 'src/stores/types/user/user'

export const getFullName = (user: IUser) => {
  return `${ user.name } ${ user.surname }`
}
