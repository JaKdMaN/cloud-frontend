<template>
  <div class="entity-card">
    <FileCard
      v-if="item.type === 'file'"
      :class="{'selected': isEntitySelected(item.entity)}"
      :fileEntity="item"
      @click.left="handleSelectEntity(item.entity)"
    />

    <FolderCard
      v-else-if="item.type === 'folder'"
      :class="{'selected': isEntitySelected(item.entity)}"
      :folderEntity="item"
      @click="handleSelectEntity(item.entity)"
    />
  </div>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'

  //Types
  import { IDiskEntity } from 'src/stores/types/disk-entity'
  import { IFile } from 'src/stores/types/file'
  import { IFolder } from 'src/stores/types/folder'

  interface Props {
    item: IDiskEntity
  }

  defineProps<Props>()

  const selectedEntities = ref<(IFile | IFolder)[]>([])

  const isEntitySelected = (entity: IFile | IFolder) => {
    return selectedEntities.value.includes(entity)
  }

  const handleSelectEntity = (entity: IFile | IFolder) => {
    if (isEntitySelected(entity)) {
      const { id } = entity
      selectedEntities.value = [
        ...selectedEntities.value.filter(entity => entity.id !== id ),
      ]
    } else {
      selectedEntities.value.push(entity)
    }
  }
</script>

<style scoped lang="scss">
  .selected {
    border: 1px solid $primary;
    border-radius: $border-radius-md;

    &:hover {
      border: 1px solid $primary;
    }
  }
</style>
