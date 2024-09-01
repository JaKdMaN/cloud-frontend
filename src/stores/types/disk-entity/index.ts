import { IFile } from '../file'
import { IFolder } from '../folder'
import { DiskEntityTypeEnum } from './disk-entity-type.enum'

export interface IDiskEntity {
  id: number
  type: DiskEntityTypeEnum
  entity: IFile | IFolder
}

export interface IDiskEntityShort {
  id: number
  entityName: string
}
