<template>
  <div class="about-employee-cards">
    <AboutEmployeeCard
      v-for="(employee, index) in employees"
      :key="index"
      :employee="employee"
    />
  </div>
</template>

<script setup lang="ts">
  //Core
  import { IEmployeeCard } from 'src/stores/types/card'

  interface Props {
    employees: IEmployeeCard[]
  }

  defineProps<Props>()

</script>

<style scoped lang="scss">
  .about-employee-cards {
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
  }
</style>
