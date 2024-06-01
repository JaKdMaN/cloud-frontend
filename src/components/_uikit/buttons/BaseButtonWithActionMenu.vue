<template>
  <q-btn
    flat
    dense
    round
    icon="mdi-dots-vertical"
    :color="buttonColor"
  >
    <BaseActionMenu
      :menu="menu"
      :width="width"
      @update:model-value="value => isOpened = value"
    />
  </q-btn>
</template>

<script setup lang="ts">
  //Core
  import { computed, ref } from 'vue'

  //Types
  import { IBaseActionMenu } from '../other/BaseActionMenu.vue'

  interface Props {
    width?: string
    menu: IBaseActionMenu[]
  }

  defineProps<Props>()

  const isOpened = ref(false)

  const buttonColor = computed(() => isOpened.value ? 'primary' : 'text-font-main')
</script>

<style scoped lang="scss">

</style>
