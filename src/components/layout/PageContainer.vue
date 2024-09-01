<template>
  <div class="page-container">
    <div class="page-container__header">
      <div class="page-container__header-title">
        <BaseBreadcrumbs
          v-if="breadcrumbs"
          :items="breadcrumbs"
        />

        <h2 v-if="title">
          {{ title }}
        </h2>
      </div>
      <slot name="header"/>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
  //Types
  import { IBaseBreadcrumbsItem } from 'src/components/_uikit/other/BaseBreadcrumbs.vue'

  interface Props {
    title?: string
    breadcrumbs?: IBaseBreadcrumbsItem[]
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

      &-title {
        display: flex;
        align-items: center;
        column-gap: 6px;

        font-size: 3rem;
        font-weight: 700;
        font-family: 'Nunito', sans-serif;
      }
    }
  }
</style>
