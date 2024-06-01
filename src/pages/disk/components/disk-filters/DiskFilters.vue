<template>
  <div class="disk-filters">
    <div class="disk-filters__items">
      <BaseSelect
        dense
        v-model="entityType"
        :options="entityTypeOptions"
        label="Тип"
        class="disk-filters__items-item"
      />
    </div>
    <DiskViewToggle/>
  </div>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'

  //Utils
  import { getOptionsFromDictionary } from 'src/utils/functions/get-options-from-dictionary'
  import { diskEntityTypeNames } from 'src/utils/dictionaries'

  const entityType = ref('')
  const entityTypeOptions = ref(getOptionsFromDictionary(diskEntityTypeNames))
</script>

<style scoped lang="scss">
  .disk-filters {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__items {
      display: flex;
      column-gap: 32px;

      &-item {
        min-width: 250px;
      }
    }
  }
</style>
