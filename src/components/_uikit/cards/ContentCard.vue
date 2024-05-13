<template>
  <div
    class="content-card"
    :class="{
      'content-card--with-image': isCardWithImage,
      'content-card--reverse': reverse
    }"
  >
    <div class="content-card__info">
      <h3
        v-if="title"
        class="content-card__info-title"
      >
        {{ title }}
      </h3>

      <div class="content-card__info-description">{{ description }}</div>

      <div
        v-if="$slots.actions"
        class="content-card__info-actions"
      >
        <slot name="actions"/>
      </div>
    </div>
    <img v-if="img" :src="img"/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
  //Core
  import { ref, computed } from 'vue'

  //Types
  import { IContentCard } from 'src/stores/types/card'

  interface Props {
    item: IContentCard
  }

  const props = defineProps<Props>()

  const _item = ref<IContentCard>(props.item)
  const { title, description, img, reverse } = _item.value

  const isCardWithImage = computed(() => !!img)

</script>

<style scoped lang="scss">
  .content-card {
    display: flex;
    align-items: center;

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      max-width: 484px;
      text-align: center;

      &-actions {
        display: flex;
        align-items: center;
        margin-top: 20px;
      }
    }

    &--reverse {
      flex-direction: row-reverse;
    }

    &--with-image {
      column-gap: 100px;

      .content-card__info {
        text-align: start;
      }
    }
  }
</style>
