<template>
  <div class="base-breadcrumbs">
    <div
      v-for="item in items"
      :key="item.title"
      class="base-breadcrumbs__item"
    >
      <RouterLink :to="item.to" class="base-breadcrumbs__item-link">
        {{ item.title }}
      </RouterLink>
      <div> / </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  //Core
  import { RouteLocationRaw } from 'vue-router'

  export interface IBaseBreadcrumbsItem {
    title: string
    to: RouteLocationRaw
  }

  interface Props {
    items: IBaseBreadcrumbsItem[]
  }

  defineProps<Props>()

</script>

<style scoped lang="scss">
  .base-breadcrumbs {
    display: flex;
    column-gap: 24px;

    &__item {
      display: flex;
      column-gap: 6px;

      &-link {
        transition: $transition-default;

        &:hover {
          color: $primary;
        }
      }
    }
  }
</style>
