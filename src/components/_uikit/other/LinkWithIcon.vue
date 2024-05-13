<template>
  <RouterLink
    class="link-with-icon"
    :to="link.path"
  >
    <q-icon :name="link.icon" size="sm"/>
    <span>{{ link.name }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
  //Types
  import { ILink } from 'src/stores/types/link'


  interface Props {
    link: ILink
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .link-with-icon {
    display: flex;
    align-items: center;
    column-gap: 8px;
    font-weight: 500;

    transition: $transition-default;

    &:hover {
      color: $primary;
    }

    &.router-link-active {
      color: $primary;
    }
  }
</style>
