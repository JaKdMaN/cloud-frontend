<template>
 <div
    class="underline-button pointer"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">

  interface Props {
    label: string,
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .underline-button {
    color: rgba($color-font-main, 0.7);
    font-family: 'Nunito', sans-serif;
    text-decoration: underline;
    transition: $transition-default;

    &:hover {
      color: $primary;
    }
  }
</style>
