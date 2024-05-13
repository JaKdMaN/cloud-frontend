<template>
  <div class="about-employee-card">
    <q-img :src="img"/>

    <div class="about-employee-card__info">
      <p class="about-employee-card__info-name q-my-none">{{ name }}</p>
      <span>{{ position }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'

  //Types
  import { IEmployeeCard } from 'src/stores/types/card'


  interface Props {
    employee: IEmployeeCard
  }

  const props = defineProps<Props>()
  const _employee = ref<IEmployeeCard>(props.employee)

  const { img, name, position } = _employee.value

</script>

<style scoped lang="scss">
  .about-employee-card {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 400px;

    &__info {
      display: flex;
      flex-direction: column;
      row-gap: 10px;

      width: 100%;
      padding: 14px 0;
      text-align: center;
      border: 1px solid $color-font-main;
      border-radius: $border-radius-md;

      &-name {
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
  }
</style>
