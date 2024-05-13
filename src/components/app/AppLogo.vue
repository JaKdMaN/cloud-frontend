<template>
  <RouterLink :to="{ name: 'home' }">
    <img
      :style="{ width: _width }"
      src="/src/assets/images/logo.svg"
      alt="logo"
    />
  </RouterLink>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  interface Props {
    width?: string | number,
  }

  const props = withDefaults(defineProps<Props>(), {
    width: '60px',
  })

  const _width = computed(() => {
    const { width } = props

    return typeof width === 'number' ? `${width}px` : width
  })

</script>
