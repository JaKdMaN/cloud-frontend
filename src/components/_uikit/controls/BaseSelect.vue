<template>
  <q-select
    ref="select"
    :model-value="_value"
    :error-message="errorMessage"
    :error="!!errorMessage"
    :option-label="optionLabel"
    :options="_options"
    clear-icon="mdi-close"
    :emit-value="emitValue"
    map-options
    hide-bottom-space
    no-error-icon
    clearable
    noOptionText="Не найдено"
    @update:model-value="updateValue"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="scope">
      <slot
        :name="slotName"
        v-bind="{ ...scope }"
      />
    </template>

    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-italic text-grey">
          {{ noOptionText }}
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script lang="ts" setup>
  // Core
  import { computed, ref } from 'vue'
  import { QSelect } from 'quasar'

  // Types
  import { INameValue } from 'stores/types/name-value'

  type OptionType = (INameValue & Record<string, any>)
  type ValueType = number | string | undefined | OptionType

  export interface IBaseSelectProps {
    modelValue?: ValueType,
    value?: ValueType,
    emitValue: boolean
    errorMessage?: string
    options: OptionType[]
    optionLabel: string,
    noOptionText: string,
  }

  const props = withDefaults(defineProps<IBaseSelectProps>(),{
    emitValue: true,
    optionLabel: 'name',
    noOptionText: 'Нет результатов',
  })

  const $emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'select', value: string): void
  }>()

  const select = ref<QSelect | null>(null)

  const _value = computed(() => props.value || props.modelValue)

  const _options = ref(props.options)

  function updateValue (value: string) {
    $emit('update:modelValue', value)
    $emit('select', value)
  }
</script>

<style lang="scss" scoped>
</style>
