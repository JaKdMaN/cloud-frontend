<template>
  <div
    class="disk-folder"
    @click.right.prevent=""
    @dblclick.left="goToFolder"
  >
    <div class="disk-folder__header">
      <div class="disk-folder__header-title">
        <q-icon
          name="mdi-folder"
          size="15px"
          color="primary"
        />
        <p class="disk-folder__header-title-text">{{ folder.name }}</p>
      </div>

      <BaseButtonWithActionMenu
        width="250px"
        :menu="folderCardMenu"
      />

    </div>
    <div class="disk-folder__icon">
      <q-icon
        name="mdi-folder"
        size="75px"
        color="primary"
      />
    </div>
    <p class="disk-folder__created-at">
      {{ `Была создана ${ formatedDate }.` }}
    </p>

    <BaseActionMenu
      auto-close
      context-menu
      touch-position
      :menu="folderCardMenu"
    />
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'

  //Types
  import { IFolder } from 'src/stores/types/folder'
  import { IDiskEntity } from 'src/stores/types/disk-entity'
  import { IBaseActionListItem } from 'src/components/_uikit/other/BaseActionList.vue'

  //Store
  import { useFolderStore } from 'src/stores/modules/folder.store'
  import { useStorageStore } from 'src/stores/modules/storage.store'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  //Utils
  import { format } from 'date-fns'
  import { ru } from 'date-fns/locale'

  interface Props {
    folderEntity: IDiskEntity
  }

  const folder = computed(() => {
    return props.folderEntity.entity as IFolder
  })

  const router = useRouter()
  const { notifyError, notifySuccess } = useNotify()
  const folderStore = useFolderStore()
  const storageStore = useStorageStore()

  const props = defineProps<Props>()

  const formatedDate = computed(() => {
    const { createdAt } = folder.value

    return format(createdAt, 'dd MMM yyyy', { locale: ru })
  })

  const folderCardMenu = computed((): IBaseActionListItem[] => {
    return [
      { title: 'Скачать', icon: 'mdi-download' },
      { title: 'Переименовать', icon: 'mdi-folder-edit' },
      { title: 'Поделиться', icon: 'mdi-share' },
      { title: 'Добавить в избранное', icon: 'mdi-star' },
      // {
      //   title: 'Добавить в корзину',
      //   icon: 'mdi-trash-can',
      //   callback: handleDeleteFolder,
      // },
    ]
  })

  const goToFolder = () => {
    const { id } = props.folderEntity

    router.push({
      name: 'disk.storage.folder',
      params: { folderId: id },
    })
  }

</script>

<style scoped lang="scss">
  .disk-folder {
    cursor: pointer;
    user-select: none;
    width: 250px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 15px;
    border: 1px solid #EAEAEA;
    border-radius: $border-radius-md;
    transition: all .3s ease ;

    &:hover {
      background: #EAEAEA;
      border: 1px solid darken(#EAEAEA, 10);
    }

    &__header {
      display: flex;
      justify-content: space-between;

      &-title {
        display: flex;
        align-items: center;
        column-gap: 8px;

        &-text {
          max-width: 150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 1.4rem;
          font-family: Nunito, sans-serif;
          font-weight: 500;

          color: #17181C;
        }
      }
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__created-at {
      font-size: 1.2rem;
    }
  }
</style>
