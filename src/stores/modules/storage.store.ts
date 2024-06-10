//Core
import { ref } from 'vue'
import { defineStore } from 'pinia'

//Types
import { IStorageEntity } from '../types/storage'

//Utils
import { api } from 'src/boot/axios'

export const useStorageStore = defineStore('storage-store', () => {
  const storage = ref<IStorageEntity[] | null>(null)

  const fetchStorage = async () => {
    const { data } = await api<IStorageEntity[]>('/storage', { method: 'GET' })

    storage.value = data

    return data
  }

  const fetchFolderStorage = async (folderId: number) => {
    const { data } = await api<IStorageEntity[]>(`/storage/${folderId}`)

    storage.value = data

    return data
  }

  return {
    storage,
    fetchStorage,
    fetchFolderStorage,
  }
})
