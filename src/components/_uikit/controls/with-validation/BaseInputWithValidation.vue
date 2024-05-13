<template>
  <BaseInput
    v-bind="{ ...$attrs, ...$props }"
    v-model="value"
    :label="label"
    :error="!!errorMessage"
    :error-message="errorMessage"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
  // Core
  import { useField } from 'vee-validate'

  // Types
  type Props = {
    clearable?: boolean,
    name: string
    label?: string,
    placeholder?: string,
    type?: 'email' | 'number' | 'text' | 'textarea',
  }

  const props = withDefaults(defineProps<Props>(),{
    appendIconName: null,
    clearable: false,
    type: 'text',
  })

  const { errorMessage, value } = useField<string>(() => props.name)
</script>
