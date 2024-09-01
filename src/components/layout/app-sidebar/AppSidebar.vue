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
          :url="url"
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
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'

  //Types
  import { IFile } from 'src/stores/types/file'
  import { IDiskEntity } from 'src/stores/types/disk-entity'
  import { ICreateFolderBody } from 'src/stores/types/folder'
  import { IBaseActionListItem } from 'src/components/_uikit/other/BaseActionList.vue'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  //Store
  import { useUserStore } from 'src/stores/modules/user.store'
  import { useStorageStore } from 'src/stores/modules/storage.store'
  import { useFolderStore } from 'src/stores/modules/folder.store'

  //Utils
  import { baseURL } from 'src/utils/services/config'

  const route = useRoute()
  const { notifyError, notifySuccess } = useNotify()

  const userStore = useUserStore()
  const storageStore = useStorageStore()
  const folderStore = useFolderStore()

  const { user } = storeToRefs(userStore)
  const { storageEntity } = storeToRefs(storageStore)
  const { folderEntity } = storeToRefs(folderStore)

  const files = ref<IFile[]>([])
  const fileIds = ref<number[]>([])

  const addFolderDialog = ref<ComponentInstance['AddFolderDialog'] | null>(null)

  const isMenuShowed = ref(false)
  const isAddFolderDialogVisible = ref(false)

  const url = computed((): string => {
    const folderId = +route.params.folderId

    const _url = folderId ?
      `${baseURL}/folders/${folderId}/add-file` :
      `${baseURL}/storage/add-file`

    return _url
  })

  const menu = computed((): IBaseActionListItem[] => {
    return [
      {
        title: 'Добавить папку',
        icon: 'mdi-folder',
        callback: () => isAddFolderDialogVisible.value = true,
      },
    ]
  })

  const handleAddFile = (entities: (IDiskEntity | IFile)[]) => {
    const folderId = +route.params.folderId

    entities.forEach(entity => {
      folderId ? folderEntity.value = entity as IDiskEntity :
      storageEntity.value = entity as IDiskEntity
    })

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
        const folderId = +route.params.folderId
        const form: ICreateFolderBody = addFolderDialogValue.getValues()

        if (folderId) {
          await folderStore.addFolder(folderId, form)
        } else {
          await storageStore.addFolder(form)
        }

        notifySuccess('Папка добавлена в хранилище')
      } catch (error) {
        notifyError(error)
      } finally {
        isAddFolderDialogVisible.value = false
        isMenuShowed.value = false
      }

    } else {
      notifyError('Проверьте правильность введенных данных')
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
