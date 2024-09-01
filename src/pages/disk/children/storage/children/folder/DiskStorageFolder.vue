<template>
  <PageContainer
    :title="getFolderName()"
    :breadcrumbs="breadcrumbs"
  >
    <template #header>
      <BaseInput
        v-model="search"
        label="Поиск"
        dense
        class="disk-files__search"
      />
    </template>

    <DiskFilters class="disk-files__filters"/>

    <EntityCardList
      v-if="folderEntities"
      :list="folderEntities"
    />
  </PageContainer>
</template>

<script setup lang="ts">
  //Core
  import { computed, ref, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useRoute } from 'vue-router'

  //Store
  import { useFolderStore } from 'src/stores/modules/folder.store'

  //Types
  import { IBaseBreadcrumbsItem } from 'src/components/_uikit/other/BaseBreadcrumbs.vue'
  import { IDiskEntity } from 'src/stores/types/disk-entity'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  const route = useRoute()
  const { notifyError } = useNotify()

  const folderStore = useFolderStore()
  const { folderContent, folderEntity, folderParents } = storeToRefs(folderStore)

  const search = ref('')
  const folderEntities = ref<IDiskEntity[] | null>(null)

  const breadcrumbs = computed((): IBaseBreadcrumbsItem[] => {
    return [
      {
        title: 'Хранилище',
        to: { name: 'disk.storage' },
      },
      ...getFolderBreadcrumbs(),
    ]
  })

  const getFolderName = (): string => {
    const folderShortEntity = folderParents.value.pop()

    return folderShortEntity ? folderShortEntity.entityName : ''
  }

  const getFolderBreadcrumbs = (): IBaseBreadcrumbsItem[] => {
    const folderShortEntities = folderParents.value.splice(-1, 1)

    if (folderShortEntities.length > 0) {
      return folderShortEntities.map(entity => {
        return {
          title: entity.entityName,
          to: { name: 'disk.storage.folder', params: { folderId: entity.id } },
        }
      })
    } else {
      return [] as IBaseBreadcrumbsItem[]
    }
  }

  const fetchData = async () => {
    try {
      const folderId = +route.params.folderId

      await Promise.all([
        await folderStore.fetchFolderContent(folderId),
        await folderStore.fetchFolderParentsPath(folderId),
      ])

      folderEntities.value = folderContent.value
    } catch (error: any) {
      notifyError(error)
    }
  }

  fetchData()

  watch(folderEntity, fetchData)
  watch(route, fetchData)
</script>

<style scoped lang="scss">
  .disk-files {
    &__search {
      width: 400px;
    }
  }
</style>
