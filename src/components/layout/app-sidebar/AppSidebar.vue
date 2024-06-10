<template>
  <div class="app-sidebar">
    <AppSidebarUser :user="user"/>

    <BaseButton
      class="mt-9 mb-10"
      label="Добавить"
    >
      <BaseActionMenu
        fit
        :menu="menu"
        :auto-close="false"
        v-model="isMenuShowed"
      >
        <BaseFileUpload
          title="Добавить файл"
          icon="mdi-file-document"
          v-model:files="files"
          v-model:file-ids="fileIds"
          @update:files="handleAddFile"
        />
      </BaseActionMenu>
    </BaseButton>

    <AppSidebarNav class="mb-8"/>

    <BaseProgress
      :used-size="5"
      :max-size="15"
      with-hint
    />

    <AddFolderDialog
      ref="addFolderDialog"
      v-model:visible="isAddFolderDialogVisible"
      @submit="handleAddFolder"
    />
  </div>
</template>

<script setup lang="ts">
  //Core
  import { ref, computed } from 'vue'
  import { storeToRefs } from 'pinia'

  //Types
  import { IBaseActionListItem } from 'src/components/_uikit/other/BaseActionList.vue'
  import { IFile } from 'src/stores/types/file'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  //Store
  import { useUserStore } from 'src/stores/modules/user.store'
  import { useFolderStore } from 'src/stores/modules/folder.store'
  import { useStorageStore } from 'src/stores/modules/storage.store'

  const { notifyError, notifySuccess } = useNotify()

  const userStore = useUserStore()
  const folderStore = useFolderStore()
  const storageStore = useStorageStore()
  const { user } = storeToRefs(userStore)

  const files = ref<IFile[]>([])
  const fileIds = ref<number[]>([])

  const addFolderDialog = ref<ComponentInstance['AddFolderDialog'] | null>(null)

  const isMenuShowed = ref(false)
  const isAddFolderDialogVisible = ref(false)

  const menu = computed((): IBaseActionListItem[] => {
    return [
      {
        title: 'Добавить папку',
        icon: 'mdi-folder',
        callback: () => isAddFolderDialogVisible.value = true,
      },
    ]
  })

  const fetchData = async () => {
    try {
      await storageStore.fetchStorage()
    } catch (error: any) {
      notifyError(error)
    }
  }

  const handleAddFile = async () => {
    console.log('work')
    await fetchData()
    isMenuShowed.value = false
  }

  const handleAddFolder = async () => {
    const addFolderDialogValue = addFolderDialog.value

    if (!addFolderDialogValue) {
      throw new Error('AddFolderDialog: no AddFolderDialog')
    }

    const { valid } = await addFolderDialogValue.validate()

    if (valid) {
      try {
        const form = addFolderDialogValue.getValues()
        await folderStore.createFolder(form)
        isAddFolderDialogVisible.value = false
        isMenuShowed.value = false
        notifySuccess('Папка добавлена в хранилище')
        await fetchData()
      } catch(error) {
        notifyError(error)
      }
    }
  }
</script>

<style scoped lang="scss">
.app-sidebar {
  width: 260px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 22px 24px;
  border-right: 1px solid #EAEAEA;
}
</style>
