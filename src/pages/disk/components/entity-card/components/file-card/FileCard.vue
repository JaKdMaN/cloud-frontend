<template>
  <div
    class="file-card"
    @click.right.prevent=""
  >
    <div class="file-card__header">
      <div class="file-card__header-title">
        <q-icon
          name="mdi-file"
          size="15px"
          color="primary"
        />
        <p class="file-card__header-title-text">{{ file.originalName }}</p>
      </div>

      <BaseButtonWithActionMenu
        width="250px"
        :menu="fileCardMenu"
      />
    </div>

    <div class="file-card__icon">
      <q-icon
        name="mdi-file"
        size="75px"
        color="primary"
      />
    </div>
    <p class="file-card__created-at">
      {{ `Была создана ${ formatedDate }.` }}
    </p>

    <BaseActionMenu
      context-menu
      touch-position
      :menu="fileCardMenu"
    />
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  //Types
  import { IFile } from 'src/stores/types/file'
  import { IBaseActionListItem } from 'src/components/_uikit/other/BaseActionList.vue'

  //Utils
  import { format } from 'date-fns'
  import { ru } from 'date-fns/locale'

  interface Props {
    file: IFile
  }

  const props = defineProps<Props>()

  const fileCardMenu = computed((): IBaseActionListItem[] => {
    return [
      { title: 'Скачать', icon: 'mdi-download' },
      { title: 'Копировать', icon: 'mdi-content-copy' },
      { title: 'Переименовать', icon: 'mdi-rename' },
      { title: 'Поделиться', icon: 'mdi-share' },
      { title: 'Добавить в папку', icon: 'mdi-folder' },
      { title: 'Добавить в избранное', icon: 'mdi-star' },
      { title: 'Добавить в корзину', icon: 'mdi-trash-can' },
    ]
  })

  const formatedDate = computed(() => {
    const { createdAt } = props.file

    return format(createdAt, 'dd MMM yyyy', { locale: ru })
  })

</script>

<style scoped lang="scss">
  .file-card {
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
