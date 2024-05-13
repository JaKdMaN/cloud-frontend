<template>
  <div class="page-section-group">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .page-section-group {
    display: flex;
    flex-direction: column;
    row-gap: 100px;
  }
</style>
