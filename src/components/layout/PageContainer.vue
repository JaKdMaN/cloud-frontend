<template>
  <div class="page-container">
    <div class="page-container__header">
      <h2 v-if="title">{{ title }}</h2>
      <slot name="header"/>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">

  interface Props {
    title?: string
  }

  defineProps<Props>()

</script>

<style scoped lang="scss">
  .page-container {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    padding: 40px 60px;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
