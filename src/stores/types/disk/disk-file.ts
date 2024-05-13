import { IUser } from '../user'
import { DiskAccessTypesEnum } from './disk-access-type'
import { DiskFileTypesEnum } from './disk-file-type'

export interface DiskFile {
  type: 'file'
  fileType: DiskFileTypesEnum
  fileName: string
  preview?: string
  createAt: string
  url: string
  size: string
  owner: IUser
  access: DiskAccessTypesEnum
  extension: string
}
