<template>
  <div
    class="page-section"
    :class="{ 'page-section--outline': outline }"
  >
    <h2
      v-if="title"
      class="page-section__title"
    >
      {{ title }}
    </h2>

    <div class="page-section__content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">

  interface Props {
    title?: string,
    outline?: boolean
  }

  withDefaults(defineProps<Props>(), {
    outline: false,
  })

</script>

<style scoped lang="scss">
  .page-section {
    @include display-flex(column, center, center);

    &--outline {
      display: block;
      padding: 34px;
      border: 1px solid #EAEAEA;
      border-radius: $border-radius-md;
    }

    &__title {
      margin-bottom: 20px;
    }
  }
</style>
