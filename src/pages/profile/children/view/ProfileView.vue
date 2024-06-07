<template>
  <PageContainer v-if="user" title="Профиль">
    <PageSection outline class="profile-view">
      <ProfileViewInfo :user="user"/>
      <div class="flex justify-between mt-6">
        <BaseButton
          outline
          color="negative"
          label="Выйти"
          @click="handleLogout"
        />

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
  import { useUserStore } from 'src/stores/modules/user.store'
  import { useAuthStore } from 'src/stores/modules/auth.store'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  const router = useRouter()
  const { notifyError } = useNotify()

  const authStore = useAuthStore()
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const goToEdit = () => {
    router.push({ name: 'profile.edit' })
  }

  const handleLogout = async () => {
    try {
      await authStore.logout()

      user.value = null
      router.push({ name: 'auth.login' })
    } catch (error: any) {
      notifyError(error)
    }
  }
</script>

<style scoped lang="scss">
</style>
