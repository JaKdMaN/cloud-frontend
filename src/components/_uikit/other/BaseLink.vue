<template>
  <RouterLink
    class="base-link"
    :to="link.path"
  >
    <span>{{ link.name }}</span>
    <div class="base-link__underline"></div>
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
  .base-link {
    --underline-width: calc(100% + 11px);

    position: relative;
    color: $color-font-main;
    font-weight: 700;
    transition: all $transition-default;

    &:hover {
      color: $primary;
    }

    &__underline {
      width: 0;
      height: 1.5px;
      position: absolute;
      left: -5px;
      background: $primary;
      transition: $transition-default;
    }

    &:hover &__underline {
      width: var(--underline-width);
    }

    &.router-link-active {
      color: $accent;

      .base-link__underline {
        width: var(--underline-width);
        background: $accent;
      }
    }
  }
</style>
