<template>
  <PageContainer class="auth-login">
    <AppLogo width="87px"/>
    <FormCard title="Авторизация">

      <BaseInputWithValidation name="email" label="Email"/>
      <PasswordInput/>

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
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useForm } from 'vee-validate'

  const router = useRouter()

  const initialValues = computed(() => {
    return {
      email: '',
      password: '',
    }
  })

  const validationSchema = computed(() => {
    return {
      email: 'required|email',
      password: 'required',
    }
  })

  const { values: form, validate } = useForm({
    initialValues,
    validationSchema,
  })

  const goToRegistration = () => {
    router.push({ name: 'auth.registration' })
  }

  const login = async () => {
    const { valid } = await validate()

    if (valid) {
      console.log('logged')
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
