<template>
  <PageContainer class="auth-registration">
    <AppLogo width="87px"/>
    <FormCard title="Регистрация">

      <BaseInputWithValidation name="email" label="Email"/>
      <PasswordInput/>

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
  import { computed } from 'vue'
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

  const goToLogin = () => {
    router.push({ name: 'auth.login' })
  }

  const registration = async () => {
    const { valid } = await validate()

    if (valid) {
      console.log(form)
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
