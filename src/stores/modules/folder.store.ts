//Core
import { defineStore } from 'pinia'
import { ref } from 'vue'

//Types
import {
  ICreateFolderBody,
} from '../types/folder'

//Utils
import { api } from 'src/boot/axios'
import { IDiskEntity, IDiskEntityShort } from '../types/disk-entity'

export const useFolderStore = defineStore('folder-store', () => {
  const folderEntity = ref<IDiskEntity | null>(null)
  const folderContent = ref<IDiskEntity[]>([])
  const folderParents = ref<IDiskEntityShort[]>([])

  const addFolder = async (parentFolderId: number, body: ICreateFolderBody) => {
    const { data } = await api<IDiskEntity>(`/folders/${parentFolderId}/add-folder`, { data: body, method: 'POST' })

    folderEntity.value = data

    return data
  }

  const fetchFolderContent = async (folderId: number) => {
    const { data } = await api<IDiskEntity[]>(`/folders/${folderId}/content`)

    folderContent.value = data

    return data
  }

  const fetchFolderParentsPath = async (folderId: number) => {
    const { data } = await api<IDiskEntityShort[]>(`/folders/${folderId}/parents`)

    folderParents.value = data

    return data
  }

  return {
    folderEntity,
    folderContent,
    folderParents,
    addFolder,
    fetchFolderContent,
    fetchFolderParentsPath,
  }
})
