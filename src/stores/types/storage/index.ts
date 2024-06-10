import { IFile } from '../file'
import { IFolder } from '../folder'


export interface IStorageEntity {
  type: 'file' | 'folder'
  entity: IFile | IFolder
}
