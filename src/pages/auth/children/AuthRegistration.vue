<template>
  <PageContainer class="auth-registration">
    <AppLogo width="87px"/>
    <FormCard title="Регистрация">

      <BaseInputWithValidation
        name="email"
        label="Email"
        @keyup.enter="registration"
      />
      <PasswordInput @keyup.enter="registration"/>

      <template #actions>
        <BaseButton
          label="Зарегистироваться"
          @click="registration"
        />

        <div class="auth-registration__actions-nav">
          <p class="mr-2">Уже есть аккаунт?</p>
          <UnderlineButton
            label="Войдите"
            @click="goToLogin"
          />
        </div>
      </template>
    </FormCard>
  </PageContainer>
</template>

<script setup lang="ts">
  //Core
  import { useRouter } from 'vue-router'
  import { useForm } from 'vee-validate'

  //Types
  import { IRegistrationBody } from 'src/stores/types/auth'

  //Store
  import { useAuthStore } from 'src/stores/modules/auth.store'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  const router = useRouter()
  const { notifyError, notifySuccess } = useNotify()
  const authStore = useAuthStore()

  const { values: form, validate } = useForm<IRegistrationBody>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: {
      email: 'required|email',
      password: 'required',
    },
  })

  const goToLogin = () => {
    router.push({ name: 'auth.login' })
  }

  const registration = async () => {
    const { valid } = await validate()

    if (valid) {
      try {
        await authStore.registration(form)
        notifySuccess('Вы успешно зарегистрировались')
        router.push({ name: 'profile' })
      } catch (error: any) {
        notifyError(error)
      }
    }
  }

</script>

<style scoped lang="scss">
  .auth-registration {
    height: 100vh;

    justify-content: center;
    align-items: center;
    row-gap: 40px;

    &__actions {
      &-nav {
        display: flex;
        justify-content: center;

        margin-top: 16px;
      }
    }
  }
</style>
