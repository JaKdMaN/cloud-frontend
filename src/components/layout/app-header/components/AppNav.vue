<template>
  <div class="app-nav">
    <BaseLink
      v-for="link in links"
      :key="link.path"
      :link="link"
    />
  </div>
</template>

<script setup lang="ts">
  //Utils
  import { links } from '../model/app-nav-links'

</script>

<style scoped lang="scss">
  .app-nav {
    display: flex;
    align-items: center;

    column-gap: 60px;
  }
</style>
