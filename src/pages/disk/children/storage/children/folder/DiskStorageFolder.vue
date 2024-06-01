<template>
  <PageContainer
    title="Природа"
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
  </PageContainer>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'

  //Types
  import { IBaseBreadcrumbsItem } from 'src/components/_uikit/other/BaseBreadCrumbs.vue'

  const search = ref('')

  const breadcrumbs = ref<IBaseBreadcrumbsItem[]>([
    {
      title: 'Хранилище',
      to: { name: 'disk.storage' },
    },
  ])
</script>

<style scoped lang="scss">
  .disk-files {
    &__search {
      width: 400px;
    }
  }
</style>
