<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="page-wrapper">
      <AppHeader v-if="isContentPage"/>
      <div class="page">
        <router-view />
      </div>
      <AppFooter v-if="isContentPage"/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  //Core
  import { watch, computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useRoute } from 'vue-router'

  //Store
  import { useSystemStore } from './stores/modules/system.store'

  //Utils
  import { setLocale } from '@vee-validate/i18n'
  import { Loading, useMeta } from 'quasar'

  //Components
  import AppLoader from 'src/components/app/AppLoader.vue'

  const { loading } = storeToRefs(useSystemStore())

  setLocale('ru')

  const route = useRoute()

  const isContentPage = computed(() => {
    let contentPagesNames = [ 'home', 'about', 'contacts' ]
    let { name } = route

    return contentPagesNames.some(n => n === name)
  })

  watch(() => loading.value, (value: boolean) => {
    if (value) {
      Loading.show({
        spinner: AppLoader,
      })
    } else {
      Loading.hide()
    }
  })

  useMeta({
    title: 'Добро пожаловать',
    titleTemplate: title => `${title} - Cloud`,
  })
</script>
<style lang="scss" scoped>
.page {
  flex: 1 0 auto;

  &-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}
</style>
