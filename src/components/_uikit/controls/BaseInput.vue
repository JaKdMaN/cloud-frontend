<template>
  <q-input
    v-bind="{ ...$attrs, ...$props }"
    clear-icon="mdi-close"
    no-error-icon
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="scope">
      <slot
        :name="slotName"
        v-bind="{ ...scope }"
      />
    </template>
  </q-input>
</template>

<script setup lang="ts">
  //Types
  import { QInputProps } from 'quasar'

  withDefaults(defineProps<QInputProps>(), {
    clearable: true,
  })

</script>
