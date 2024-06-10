<template>
  <PageContainer title="Хранилище" class="disk-files">
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
      v-if="storage"
      :list="storage"
    />
  </PageContainer>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'

  //Store
  import { useStorageStore } from 'src/stores/modules/storage.store'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  const { notifyError } = useNotify()
  const storageStore = useStorageStore()
  const { storage } = storeToRefs(storageStore)

  const search = ref('')

  const fetchData = async () => {
    try {
      await storageStore.fetchStorage()
    } catch (error: any) {
      notifyError(error)
    }
  }

  fetchData()
</script>

<style scoped lang="scss">
  .disk-files {
    &__search {
      width: 400px;
    }
  }
</style>
