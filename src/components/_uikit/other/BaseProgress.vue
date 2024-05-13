<template>
  <div class="base-progress">
    <div class="base-progress__bar">
      <div class="base-progress__bar-line" :style="{width: barLineWidth }"></div>
    </div>
    <span
      v-if="withHint"
      class="base-progress__hint"
    >
      {{ hint }}
  </span>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    usedSize: number
    maxSize: number
    withHint: boolean
  }

  const props = defineProps<Props>()

  const barLineWidth = computed(() => {
    const { usedSize, maxSize } = props
    const percent = usedSize / maxSize * 100

    return percent + '%'
  })

  const hint = computed(() => {
    const { usedSize, maxSize } = props

    return `Использовано ${usedSize} ГБ из ${maxSize} ГБ`
  })
</script>

<style scoped lang="scss">
  .base-progress {
    display: flex;
    flex-direction: column;
    row-gap: 7px;

    &__bar {
      width: 100%;
      height: 8px;
      border: 1px solid $color-font-main;
      border-radius: 20px;

      &-line {
        height: 100%;
        background: $primary;
        border-radius: 20px;
      }
    }

    &__hint {
      font-weight: 400;
      font-size: 14px;
    }
  }
</style>
