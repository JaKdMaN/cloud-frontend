<template>
  <div class="app-sidebar-nav">
    <LinkWithIcon
      v-for="link in links"
      :key="link.name"
      :link="link"
    />
  </div>
</template>

<script setup lang="ts">
  //Utils
  import { links } from '../model/app-sidebar-nav-links'

</script>

<style scoped lang="scss">
  .app-sidebar-nav {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 0 20px;
  }
</style>
