<template>
  <PageContainer v-if="user" title="Профиль">
    <PageSection outline class="profile-edit">

      <ProfileEditForm
        ref="profileEditForm"
        :user="user"
      />

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
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useRouter } from 'vue-router'

  //Store
  import { useUserStore } from 'src/stores/modules/user.store'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  const router = useRouter()
  const { notifyError, notifySuccess } = useNotify()

  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const profileEditForm = ref<ComponentInstance['ProfileEditForm'] | null>(null)

  const goToView = () => {
    router.push({ name: 'profile.view' })
  }

  const handleSubmit = async () => {
    const profileEditFormValue = profileEditForm.value

    if (!profileEditFormValue) {
      throw new Error('ProfileEditForm: no ProfileEditForm')
    }

    const { valid } = await profileEditFormValue.validate()

    if (valid) {
      try {
        const form = profileEditFormValue.getValue()

        await userStore.updateUser(form)
        notifySuccess('Профиль успешно изменён')
        router.push({ name: 'profile.view' })
      } catch (error: any) {
        notifyError(error)
      }
    } else {
      notifyError('Заполните форму')
    }
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
