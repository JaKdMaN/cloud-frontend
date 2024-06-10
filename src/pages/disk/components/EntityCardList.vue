<template>
  <div class="entity-card-list">
    <EntityCard
      v-for="item in list"
      :key="item.entity.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  //Types
  import { IStorageEntity } from 'src/stores/types/storage'

  interface Props {
    list: IStorageEntity[]
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .entity-card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
</style>
