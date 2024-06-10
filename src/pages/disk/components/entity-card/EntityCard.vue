<template>
  <div class="entity-card">
    <FileCard
      v-if="item.type === 'file'"
      :file="entityAsFile"
    />

    <FolderCard
      v-else-if="item.type === 'folder'"
      :folder="entityAsFolder"
    />
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  //Types
  import { IStorageEntity } from 'src/stores/types/storage'
  import { IFile } from 'src/stores/types/file'
  import { IFolder } from 'src/stores/types/folder'

  interface Props {
    item: IStorageEntity
  }

  const props = defineProps<Props>()

  const entityAsFile = computed(() => props.item.entity as IFile)
  const entityAsFolder = computed(() => props.item.entity as IFolder)
</script>

<style scoped lang="scss">

</style>
