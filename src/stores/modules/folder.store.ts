//Core
import { ref } from 'vue'
import { defineStore } from 'pinia'

//Types
import {
  IFolder,
  IAddEntitiesFolder,
  ICreateFolderBody,
  IUpdateFolderBody,
} from '../types/folder'

//Utils
import { api } from 'src/boot/axios'

export const useFolderStore = defineStore('folder-store', () => {
  const folder = ref<IFolder | null>(null)

  const createFolder = async (body: ICreateFolderBody) => {
    const { data } = await api<IFolder>('/folders/create', { data: body, method: 'POST' })

    folder.value = data

    return data
  }

  const updateFolder = async (folderId: number, body: IUpdateFolderBody) => {
    const { data } = await api<IFolder>(`folders/${folderId}`, { data: body, method: 'POST' })

    folder.value = data

    return folder
  }

  const addEntities = async (folderId: number, body: IAddEntitiesFolder) => {
    await api<void>(`folders/${folderId}`, { data: body, method: 'PUT' })
  }

  const deleteFolder = async (folderId: number) => {
    await api<void>(`folders/${folderId}`)
  }

  return {
    folder,
    createFolder,
    updateFolder,
    addEntities,
    deleteFolder,
  }
})
