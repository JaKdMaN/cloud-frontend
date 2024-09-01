//Core
import { ref } from 'vue'
import { defineStore } from 'pinia'

//Types
import { IDiskEntity } from '../types/disk-entity'
import { ICreateFolderBody } from '../types/folder'

//Utils
import { api } from 'src/boot/axios'

export const useStorageStore = defineStore('storage-store', () => {
  const storage = ref<IDiskEntity[] | null>(null)
  const storageEntity = ref<IDiskEntity | null>(null)

  const addFolder = async (body: ICreateFolderBody) => {
    const { data } = await api<IDiskEntity>('storage/add-folder', { data: body, method: 'POST' })

    storageEntity.value = data

    return data
  }

  const fetchStorage = async () => {
    const { data } = await api<IDiskEntity[]>('/storage', { method: 'GET' })

    storage.value = data

    return data
  }

  return {
    storageEntity,
    storage,
    addFolder,
    fetchStorage,
  }
})
