<template>
  <q-btn
    v-bind="{ ...$attrs, ...$props }"
    class="base-button"
  >
    <slot/>
  </q-btn>
</template>

<script lang="ts" setup>
  //Types
  import { QBtnProps } from 'quasar'

  withDefaults(defineProps<QBtnProps>(), {
    color: 'primary',
  })

</script>
<style lang="scss" scoped>
  .base-button {
    border-radius: $border-radius-btn;
    height: 46px;
    padding: 0 50px;
    white-space: nowrap;
    text-transform: none;

    &:before {
      box-shadow: none;
    }
  }
</style>
