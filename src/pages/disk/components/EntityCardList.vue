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
  import { IDiskEntity } from 'src/stores/types/disk-entity/index'

  interface Props {
    list: IDiskEntity[]
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .entity-card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
