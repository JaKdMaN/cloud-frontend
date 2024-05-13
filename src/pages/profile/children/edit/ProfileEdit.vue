<template>
  <PageContainer v-if="user" title="Профиль">
    <PageSection outline class="profile-edit">

      <ProfileEditForm :user="user"/>

      <div class="profile-edit__actions mt-6">
        <BaseButton label="Удалить аккаунт" color="negative"/>
        <ButtonGroupWithSpace>
          <BaseButton
            outline
            label="Отмена"
            color="negative"
            @click="goToView"
          />
          <BaseButton
            outline
            label="Сохранить"
            color="primary"
            @click="handleSubmit"
          />
        </ButtonGroupWithSpace>
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

  const goToView = () => {
    router.push({ name: 'profile.view' })
  }

  const handleSubmit = async () => {
    console.log('submit')
  }
</script>

<style scoped lang="scss">
  .profile-edit {
    &__actions {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
