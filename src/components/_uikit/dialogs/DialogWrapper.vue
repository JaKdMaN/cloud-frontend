<template>
  <q-dialog
    class="dialog dialog_view_default"
    full-width
    persistent
    :model-value="visible"
    @update:model-value="emit('close')"
  >
    <q-card
      class="modal-wrapper"
      :style="wrapperStyle"
    >
      <div class="modal-wrapper__header mb-9">
        <div class="modal-wrapper__header-wrapper text-h3">
          <span>{{ title }}</span>

          <div
            v-if="$slots['header-actions']"
          >
            <slot name="heder-actions"/>
          </div>
        </div>

        <template v-if="$slots.close">
          <div class="ml-8" @click="emit('close')">
            <slot name="close" />
          </div>
        </template>

        <q-btn
          v-else
          flat
          dense
          round
          icon="close"
          color="grey-7"
          @click="emit('close')"
        />
      </div>

      <div class="modal-wrapper__content">
        <slot />
      </div>

      <div class="modal-wrapper__footer">
        <BaseButton
          v-if="buttonCancelVisible"
          outline
          :label="buttonCancelText"
          :color="buttonCancelColor"
          @click="emit('cancel')"
        />

        <BaseButton
          v-if="buttonConfirmVisible"
          :label="buttonConfirmText"
          :color="buttonConfirmColor"
          :disable="buttonConfirmDisabled"
          @click="emit('submit')"
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  type SkinType = 'primary' | 'secondary' | 'positive' | 'accent' | 'info' | 'negative'

  interface Props {
    visible: boolean
    title: string
    width?: number | string
    height?: number | string
    buttonCancelVisible?: boolean
    buttonCancelText?: string
    buttonCancelColor?: SkinType
    buttonConfirmVisible?: boolean
    buttonConfirmDisabled?: boolean
    buttonConfirmColor?: SkinType
    buttonConfirmText?: string
  }

  interface Emits {
    (e: 'close'): void
    (e: 'cancel'): void
    (e: 'submit'): void
  }

  const props = withDefaults(defineProps<Props>(), {
    width: 768,
    buttonCancelVisible: true,
    buttonCancelText: 'Отмена',
    buttonCancelColor: 'negative',
    buttonConfirmVisible: true,
    buttonConfirmText: 'Подтвердить',
    buttonConfirmColor: 'primary',
  })

  const emit = defineEmits<Emits>()

  const wrapperStyle = computed(() => {
    const { width , height } = props

    return {
      maxWidth: `${typeof width === 'number' ? `${width}px` : width} !important`,
      height: typeof height === 'number' ? `${height}px` : height,
    }
  })

</script>

<style scoped lang="scss">
  .modal-wrapper {
    display: flex;
    flex-direction: column;
    padding: 32px 32px 36px 32px;
    width: 100%;
    overflow: hidden !important;
    border-radius: $border-radius-xl;
    box-shadow:
      0px 6px 30px 0px rgba(137, 137, 137, 0.12),
      0px 16px 24px 0px rgba(137, 137, 137, 0.14),
      0px 8px 10px 0px rgba(137, 137, 137, 0.20);

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 32px;

      &-wrapper {
        flex-direction: row;
        flex-grow: 1;
        width: 100%;
      }
    }

    &__content {
      flex: 1;
      border-radius: 0 !important;
    }

    &__footer {
      display: flex;
      column-gap: 24px;
      justify-content: flex-end;
      align-items: flex-end
    }
  }
</style>
