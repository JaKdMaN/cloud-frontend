import { DiskEntityType } from './disk-entity-type'
import { DiskFile } from './disk-file'
import { DiskFolder } from './disk-folder'

export type DiskEntity = { type: DiskEntityType } & (DiskFile | DiskFolder)
