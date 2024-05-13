<template>
  <div
    class="form-card"
    :style="{ width: _width }"
  >
    <h3>{{ title }}</h3>
    <div class="form-card__controls mb-6">
      <slot/>
    </div>
    <div class="form-card__actions">
      <slot name="actions"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  interface Props {
    title: string,
    width?: string | number,
    outline?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    width: '508px',
    outline: true,
  })

  const _width = computed(() => {
    const { width } = props

    return typeof width === 'number' ? `${width}px` : width
  })

</script>

<style scoped lang="scss">
  .form-card {
    text-align: center;
    padding: 32px 54px 54px;

    border: 1px solid rgba($color-font-main, 0.2);
    border-radius: $border-radius-md;
  }
</style>
