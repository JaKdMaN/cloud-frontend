<template>
  <PageContainer class="auth-login">
    <AppLogo width="87px"/>
    <FormCard title="Авторизация">

      <BaseInputWithValidation
        name="email"
        label="Email"
        @keyup.enter="login"
      />

      <PasswordInput @keyup.enter="login" />

      <template #actions>
        <BaseButton
          label="Войти"
          @click="login"
        />

        <div class="auth-login__actions-nav">
          <p class="mr-2">Ещё нет аккаунта?</p>
          <UnderlineButton
            label="Зарегистрируйтесь"
            @click="goToRegistration"
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
  import { ILoginBody } from 'src/stores/types/auth'

  //Store
  import { useAuthStore } from 'src/stores/modules/auth.store'

  //Hooks
  import useNotify from 'src/utils/hooks/useNotify'

  const router = useRouter()
  const { notifyError, notifySuccess } = useNotify()
  const authStore = useAuthStore()

  const { values: form, validate } = useForm<ILoginBody>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: {
      email: 'required|email',
      password: 'required',
    },
  })

  const goToRegistration = () => {
    router.push({ name: 'auth.registration' })
  }

  const login = async () => {
    const { valid } = await validate()

    if (valid) {
      try {
        await authStore.login(form)
        notifySuccess('Вы успешно вошли в аккаунт')
        router.push({ name: 'profile' })
      } catch (error: any) {
        notifyError(error)
      }
    }
  }

</script>

<style scoped lang="scss">
  .auth-login {
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
