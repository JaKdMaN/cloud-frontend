<template>
  <q-menu
    :auto-close="autoClose"
    :fit="fit"
    transition-show="jump-down"
    transition-hide="jump-up"
    :persistent="persistent"
    :touch-position="touchPosition"
    :context-menu="contextMenu"
    :style="{ width: width }"
    class="base-action-menu"
    @update:model-value="handleUpdateValue"
  >
    <slot />

    <BaseActionList
      v-if="menu"
      :list="menu"
    />
  </q-menu>
</template>

<script setup lang="ts">
  //Types
  import { QMenuProps } from 'quasar'
  import { IBaseActionListItem } from './BaseActionList.vue'

  interface Props {
    width?: string
    autoClose?: boolean
    anchor?: QMenuProps['anchor']
    self?: QMenuProps['self']
    fit?: boolean
    persistent?: boolean
    touchPosition?: boolean
    contextMenu?: boolean
    menu?: IBaseActionListItem[]
  }

  interface Emits {
    (e: 'update:modelValue', value: boolean): void
  }

  withDefaults(defineProps<Props>(), {
    autoClose: true,
    anchor: 'bottom middle',
    self: 'top middle',
  })

  const emit = defineEmits<Emits>()

  const handleUpdateValue = (value: boolean) => {
    emit('update:modelValue', value)
  }
</script>

<style scoped lang="scss">
</style>
