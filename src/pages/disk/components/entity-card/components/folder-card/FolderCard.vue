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
        :menu="diskFolderMenu"
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
      context-menu
      touch-position
      :menu="diskFolderMenu"
    />
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'

  //Types
  import { IFolder } from 'src/stores/types/folder'

  //Utils
  import { format } from 'date-fns'
  import { ru } from 'date-fns/locale'
  import { diskFolderMenu } from './model/disk-folder-menu'

  interface Props {
    folder: IFolder
  }

  const props = defineProps<Props>()

  const router = useRouter()

  const formatedDate = computed(() => {
    const { createdAt } = props.folder

    return format(createdAt, 'dd MMM yyyy', { locale: ru })
  })

  const goToFolder = () => {
    const { id } = props.folder

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
