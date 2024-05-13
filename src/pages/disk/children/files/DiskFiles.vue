<template>
  <PageContainer title="Файлы" class="disk-files">
    <template #header>
      <BaseInput
        v-model="search"
        label="Поиск"
        dense
        class="disk-files__search"
      />
    </template>

    <div class="files">
      <DiskFolder/>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'

  const search = ref('')
</script>

<style scoped lang="scss">
  .disk-files {

    &__search {
      width: 400px;
    }
  }
</style>
