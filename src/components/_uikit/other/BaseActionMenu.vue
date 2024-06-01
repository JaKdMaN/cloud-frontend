<template>
  <q-menu
    auto-close
    :fit="fit"
    :touch-position="touchPosition"
    :context-menu="contextMenu"
    class="base-action-menu"
    :style="{ width: width }"
    @update:model-value="handleUpdateValue"
  >
    <q-list class="base-action-menu__list">
      <q-item
        v-for="(item, index) in menu"
        :key="index"
        :to="item.to"
        v-ripple
        clickable
        class="base-action-menu__list-item"
        @click="handleClickAction(item)"
      >
        <q-item-section v-if="item.icon" avatar class="base-action-menu__list-item-icon">
          <q-icon :name="item.icon"/>
        </q-item-section>

        <q-item-section>
          {{ item.title }}
        </q-item-section>

      </q-item>
    </q-list>
  </q-menu>
</template>

<script setup lang="ts">
  //Types
  import { QMenuProps } from 'quasar'
  import { RouteLocationRaw } from 'vue-router'

  export interface IBaseActionMenu {
    title: string
    to?: RouteLocationRaw
    icon?: string
    callback?: () => void
  }

  interface Props {
    width?: string
    anchor?: QMenuProps['anchor']
    self?: QMenuProps['self']
    fit?: boolean
    touchPosition?: boolean
    contextMenu?: boolean
    menu: IBaseActionMenu[]
  }

  interface Emits {
    (e: 'update:modelValue', value: boolean): void
  }

  withDefaults(defineProps<Props>(), {
    anchor: 'bottom middle',
    self: 'top middle',
  })

  const emit = defineEmits<Emits>()

  const handleUpdateValue = (value: boolean) => {
    emit('update:modelValue', value)
  }

  const handleClickAction = (item: IBaseActionMenu) => {
    const { callback } = item

    callback && callback()
  }
</script>

<style scoped lang="scss">
  .base-action-menu {

    &__list {
      min-width: 210px;
      display: flex;
      flex-direction: column;
      padding: 0;
      border-radius: 6px;

      &-item {
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
  }
</style>
