import { IUser } from '../user'

export interface IFolder {
  id: number
  name: string
  size: string
  createdAt: Date
  lastOpenedAt: Date
  owner: IUser
}

export interface ICreateFolderBody {
  name: string
  parentFolderId?: number
}

export interface IUpdateFolderBody {
  name: string
  parentFolderId?: number
}

export interface IAddEntitiesFolder {
  fileIds: number[]
  folderIds: number[]
}
