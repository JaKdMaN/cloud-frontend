import { IUser } from '../user'
import { DiskAccessTypesEnum } from './disk-access-type'
import { DiskFile } from './disk-file'

export interface DiskFolder {
  type: 'folder'
  folderName: string
  size: string
  owner: IUser
  access: DiskAccessTypesEnum
  files: DiskFile[]
}
