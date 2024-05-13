<template>
  <div class="profile-view-info-block">
    <h3>{{ block.title }}</h3>
    <div
      v-for="field in block.fields"
      :key="field.name"
      class="profile-view-info-block__field mt-4"
    >
      <p class="profile-view-info-block__field-name text-bold">
        {{ field.name }}
      </p>
      <span class="profile-view-info-block__field-value">
        {{ field.value }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  //Types
  import { InfoBlock } from 'src/pages/profile/children/view/model/info-block-type'

  interface Props {
    block: InfoBlock
  }

  defineProps<Props>()

</script>

<style scoped lang="scss">
  .profile-view-info-block {
    display: grid;
    grid-template-columns: 100%;

    &__field {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      &-value {
        color: #71727A;
        font-weight: 700;
      }
    }
  }
</style>
