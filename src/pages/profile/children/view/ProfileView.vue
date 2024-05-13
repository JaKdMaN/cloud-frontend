<template>
  <PageContainer v-if="user" title="Профиль">
    <PageSection outline class="profile-view">
      <ProfileViewInfo :user="user"/>
      <div class="text-right mt-6">
        <BaseButton
          outline
          label="Редактировать"
          @click="goToEdit"
        />
      </div>
    </PageSection>
  </PageContainer>
</template>

<script setup lang="ts">
  //Core
  import { storeToRefs } from 'pinia'
  import { useRouter } from 'vue-router'

  //Store
  import { useUserStore } from 'src/stores/modules/user-store'

  const router = useRouter()
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const goToEdit = () => {
    router.push({ name: 'profile.edit' })
  }
</script>

<style scoped lang="scss">
</style>
