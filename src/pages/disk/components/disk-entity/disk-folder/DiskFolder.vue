<template>
  <div
    class="disk-folder"
    @click.right.prevent=""
    @dblclick.left="goToFolder"
    ref="div"
  >
    <div class="disk-folder__header">
      <div class="disk-folder__header-title">
        <q-icon
          name="mdi-folder"
          size="15px"
          color="primary"
        />
        <p class="disk-folder__header-title-text">Природа</p>
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
      Была создана 24 мая 2023 г.
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
  import { useRouter } from 'vue-router'

  //Utils
  import { diskFolderMenu } from './model/disk-folder-menu'

  const router = useRouter()

  const goToFolder = () => {
    router.push({
      name: 'disk.storage.folder',
      params: { folderId: 1 },
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
