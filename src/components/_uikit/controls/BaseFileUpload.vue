<template>
  <div v-bind="getRootProps()">
    <input v-bind="getInputProps()">

    <q-item
      v-ripple
      clickable
      class="base-file-upload"
    >
      <q-item-section
        v-if="icon"
        avatar
        class="base-file-upload__icon"
      >
        <q-icon :name="icon"/>
      </q-item-section>

      <q-item-section>
        {{ title }}
      </q-item-section>
  </q-item>
  </div>
</template>

<script setup lang="ts">
  //Core
  import axios from 'axios'
  import { computed, ref } from 'vue'
  import { FileRejectReason, useDropzone } from 'vue3-dropzone'

  //Types
  import { IFile } from 'src/stores/types/file'
  import { IDiskEntity } from 'src/stores/types/disk-entity'
  import { AxiosHeaders } from 'axios'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  //Utils
  import { baseURL, getToken } from 'src/utils/services/config'

  type LoadingProgressDataType = {
    id: string
    controller: any
    progress: number
  }

  type FileErrorCodeType =
    'file-invalid-type'
    | 'file-too-large'
    | 'file-too-small'
    | 'too-many-files'
    | string

  interface Props {
    title: string
    icon?: string
    files: IFile[] | IDiskEntity[]
    fileIds: number[]
    accept?: string
    disabled?: boolean
    maxFiles?: number
    url?: string
  }

  interface Emits {
    (e: 'update:files', value: (IFile | IDiskEntity)[]): void
    (e: 'update:fileIds', value: number[]): void
  }

  const props = withDefaults(defineProps<Props>(),{
    files: () => [],
    fileIds: () => [],
    accept: '.ppt,.pptx,.pdf,image/*,.doc,.docx,.xls,.xlsx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  })

  const emit = defineEmits<Emits>()

  const { notifyError } = useNotify()

  const isSingleMode = computed(() => props.maxFiles === 1)
  const acceptedFilesList = computed((): string[] => props.accept.split(',').map(el => el.trim()))

  const onDrop = (acceptFiles: any[]) => {
    saveFiles(acceptFiles)
  }

  const onDropRejected = (rejectReasons: FileRejectReason[]) => {
    rejectReasons.forEach(el => {
      const error = el.errors.find(e => {
        typeof e === 'object' && e !== null && e.code
      })

      if (error) {
        const _error = (error as { code: FileErrorCodeType, message: string })
        const code: FileErrorCodeType = _error.code
        const message = _error.message

        if (code === 'file-invalid-type')
          notifyError(`Неподдерживаемый формат файла. Выберите файлы следующих типов: ${acceptedFilesList.value.join(', ')}`)
        else if (code === 'file-too-large')
          notifyError(message.replace('File is larger than', 'Файл больше, чем'))
        else if (code === 'file-too-small')
          notifyError(message.replace('File is smaller than', 'Файл меньше, чем'))
        else if (code === 'too-many-files')
          notifyError(`Слишком много файлов. Максимальное кол-во файлов: ${props.maxFiles}`)
        else
          notifyError(code)

      } else {
        notifyError(null)
      }
    })
  }

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: props.accept,
    maxFiles: props.maxFiles,
    multiple: !isSingleMode.value,
    disabled: props.disabled,
  })

  const saveFiles = async (files: Blob[]) => {
    const formData = new FormData()

    for (let x = 0; x < files.length; x++) {
      formData.append('file', files[x])

      const file = await fetchFile(formData)

      updateData(file)
    }
  }

  const updateData = (file: IFile | IDiskEntity) => {
    if (file) {
      const files = isSingleMode.value ? [ file ] : [ ...props.files, file ]
      const fileIds = files.map(f => f.id)

      emit('update:files', files)
      emit('update:fileIds', fileIds)
    }
  }

  const loadingProgressData = ref<LoadingProgressDataType[]>([])

  const abortUpload = ({ id, controller }: LoadingProgressDataType) => {
    controller.abort()
    removeLoadingProgressDataItem(id)
  }

  const removeLoadingProgressDataItem = (id: string) => {
    loadingProgressData.value = loadingProgressData.value.filter(item => item.id !== id)
  }

  const setProgressData = (progress: number, id: string, controller: any) => {
    const data = loadingProgressData.value.find(item => item.id === id)

    if (progress === 1) {
      removeLoadingProgressDataItem(id)
    } else if (data) {
      data.progress = progress
    } else {
      loadingProgressData.value.push({ id, controller, progress })
    }
  }

  const fetchFile = async (formData: FormData): Promise<any> => {
    const url = props.url ?? `${baseURL}/file/upload`
    const controller = new AbortController()
    const id = Date.now().toString(36)

    try {
      const { data } = await axios.post(url, formData, {
        headers: headers.value as AxiosHeaders,
        withCredentials: true,
        signal: controller.signal,
        onUploadProgress: progressEvent => {
          setProgressData(progressEvent.progress as number, id, controller)
        },
      })

      return data as IFile
    } catch (error: any) {
      if (error.message === 'canceled')
        notifyError('Загрузка файлов прервана')
      else if (error.message === 'Network Error')
        notifyError(error)
      else
        notifyError(error)
    }
  }

  const headers = computed((): HeadersInit => {
    const headers: HeadersInit = {}
    const token = getToken()

    headers['Content-Type'] = 'multipart/form-data'

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    return headers
  })
</script>

<style scoped lang="scss">
  .base-file-upload {
    display: grid;
    grid-template-columns: 20px 1fr;
    column-gap: 10px;

    min-height: 20px;
    padding: 8px 16px;

    font-size: 1.4rem;
    font-weight: 500;

    &__icon {
      max-width: 20px;
      padding: 0;
    }
  }
</style>
