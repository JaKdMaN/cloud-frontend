<template>
  <BaseInput
    v-bind="{ ...$attrs, ...$props }"
    v-model="value"
    :error="!!errorMessage"
    :error-message="errorMessage"
    :label="label"
    :placeholder="placeholder"
    :type="showPassword ? 'text' : 'password'"
    :clearable="false"
  >
    <template #append>
      <q-icon
        class="icon cursor-pointer"
        :name="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click="showPassword = !showPassword">
      </q-icon>
    </template>
  </BaseInput>
</template>

<script setup lang="ts">
  // Core
  import { useField } from 'vee-validate'
  import { ref } from 'vue'


  type Props = {
    name?: string
    label?: string,
    placeholder?: string,
  }

  const props = withDefaults(defineProps<Props>(),{
    name: 'password',
    label: 'Пароль',
    placeholder: 'Введите пароль',
  })

  const { errorMessage, value } = useField(() => props.name)

  const isFocused = ref(false)

  const showPassword = ref(false)

</script>

<style lang="scss" scoped>
.icon {
  transition: color $transition-default;
}
</style>
