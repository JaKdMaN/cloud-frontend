<template>
  <DialogWrapper
    class="add-folder-dialog"
    title="Добавить папку"
    button-confirm-text="Добавить"
    :visible="visible"
    :width="512"
    @close="emit('update:visible', false)"
    @cancel="emit('update:visible', false)"
    @submit="emit('submit')"
  >
    <BaseInputWithValidation
      name="name"
      placeholder="Введите название папки"
      @keyup.enter="emit('submit')"
    />
  </DialogWrapper>
</template>

<script setup lang="ts">
  //Core
  import { useForm } from 'vee-validate'

  //Types
  import { FormValidationResult } from 'vee-validate'
  import { ICreateFolderBody } from 'src/stores/types/folder'

  interface Props {
    visible: boolean
  }

  interface Emits {
    (e: 'update:visible', value: boolean): void
    (e: 'submit'): void
  }

  interface Expose {
    validate: () => Promise<FormValidationResult<ICreateFolderBody>>
    getValues: () => ICreateFolderBody
  }

  defineProps<Props>()
  const emit = defineEmits<Emits>()

  const { values: form, validate: validateForm } = useForm<ICreateFolderBody>({
    initialValues: {
      name: '',
    },
    validationSchema: {
      name: 'required',
    },
  })

  const validate = (): Promise<FormValidationResult<ICreateFolderBody>> => validateForm()
  const getValues = (): ICreateFolderBody => form

  defineExpose<Expose>({
    validate,
    getValues,
  })

</script>

<style scoped lang="scss">

</style>
