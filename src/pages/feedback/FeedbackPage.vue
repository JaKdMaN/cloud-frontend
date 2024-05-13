<template>
  <PageContainer class="feedback">
    <AppLogo width="87px"/>
    <FormCard title="Обратная связь">

      <BaseInput v-model="form.email" label="Email"/>
      <BaseInput v-model="form.phone" label="Номер телефона"/>
      <BaseInput v-model="form.message" label="Сообщение"/>

      <template #actions>
        <BaseButton
          label="Отправить"
          @click="sendFeedback"
        />
      </template>
    </FormCard>
  </PageContainer>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'

  const form = ref({
    email: '',
    phone: '',
    message: '',
  })

  const sendFeedback = () => {
    console.log(form)
  }

</script>

<style scoped lang="scss">
  .feedback {
    height: 100vh;

    justify-content: center;
    align-items: center;
    row-gap: 40px;
  }
</style>
