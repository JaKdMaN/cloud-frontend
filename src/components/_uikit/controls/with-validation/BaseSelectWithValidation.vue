<template>
  <BaseSelect
    v-bind="{ ...$attrs, ...$props }"
    v-model="value"
    :errorMessage="errorMessage"
    :hide-bottom-space="false"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="scope">
      <slot
        :name="slotName"
        v-bind="{ ...scope }"
      />
    </template>
  </BaseSelect>
</template>

<script lang="ts" setup>
  // Core
  import { useField } from 'vee-validate'

  // Types
  import { IBaseSelectProps } from '../BaseSelect.vue'


  interface Props extends IBaseSelectProps {
    name: string
  }

  const props = withDefaults(defineProps<Props>(), {
    emitValue: true,
  })

  const { value, errorMessage } = useField(() => props.name)
</script>
