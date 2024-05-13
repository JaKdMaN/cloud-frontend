<template>
  <div class="content-page-container">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .content-page-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    width: 100%;
    max-width: 1400px;

    padding: 20px;
  }
</style>
