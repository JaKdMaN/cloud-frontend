<template>
  <div class="page-with-sidebar">
    <AppSidebar/>
    <div class="page-with-sidebar__content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page-with-sidebar {
  display: grid;
  grid-template-columns: 260px 1fr;
}
</style>
