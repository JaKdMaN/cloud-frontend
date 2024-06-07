<template>
  <q-list class="base-action-list">
    <slot />

    <q-item
      v-for="(item, index) in list"
      :key="index"
      :to="item.to"
      :href="item.href"
      v-ripple
      clickable
      class="base-action-list__item"
      @click="handleClickAction(item)"
    >
      <q-item-section v-if="item.icon" avatar class="base-action-menu__list-item-icon">
        <q-icon
          :color="item.iconColor"
          :name="item.icon"
        />
      </q-item-section>

      <q-item-section>
        {{ item.title }}
      </q-item-section>

    </q-item>
  </q-list>
</template>

<script setup lang="ts">
  //Types
  import { RouteLocationRaw } from 'vue-router'

  export interface IBaseActionListItem {
    title: string
    to?: RouteLocationRaw
    href?: string
    icon?: string
    iconColor?: string
    callback?: () => void
  }

  interface Props {
    list?: IBaseActionListItem[]
  }

  defineProps<Props>()

  const handleClickAction = (item: IBaseActionListItem) => {
    const { callback } = item

    callback && callback()
  }
</script>

<style scoped lang="scss">
  .base-action-list {
    min-width: 210px;
    display: flex;
    flex-direction: column;
    padding: 0;
    border-radius: 6px;

    &__item {
      display: grid;
      grid-template-columns: 20px 1fr;
      column-gap: 10px;

      min-height: 20px;
      padding: 8px 16px;

      font-size: 1.4rem;
      font-weight: 500;

      &-icon {
        max-width: 20px;
        padding: 0;
      }
    }
  }
</style>
