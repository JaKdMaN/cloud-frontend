<template>
  <q-header class="header">
    <div class="header__inner">
      <AppLogo/>
      <AppNav/>
      <BaseButton
        class="header__inner-btn"
        label="Открыть"
        @click="goToDisk"
      />
    </div>
  </q-header>
</template>

<script setup lang="ts">
  //Core
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const goToDisk = () => {
    router.push('/disk')
  }

</script>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    position: fixed;
    height: 90px;
    background: #FFFFFF;


    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      max-width: 1400px;
      margin: auto;

      &-btn {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
</style>
