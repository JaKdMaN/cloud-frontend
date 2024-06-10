export * from './file-type.enum'

import { IUser } from '../user'

export interface IFile {
  id: number
  fileType: string
  fileName: string
  originalName: string
  url: string
  size: number
  extension: string
  createdAt: string
  lastOpenedAt: string
  owner: IUser
}
