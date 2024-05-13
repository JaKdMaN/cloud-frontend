<template>
  <div class="home-banner">
    <div class="home-banner__info">
      <h1>Простой и безопасный доступ к файлам</h1>
      <span>Вы можете хранить и передавать коллегам файлы и папки,
            а также работать над ними вместе с другими пользователями
            на компьютере или мобильном устройстве.
      </span>
      <div class="home-banner__info-actions">
        <ButtonGroupWithSpace>
          <BaseButton
            label="Открыть"
            @click="goToDisk"
          />
          <BaseButton
            outline
            label="Зарегистрироваться"
            @click="goToRegistration"
          />
        </ButtonGroupWithSpace>
      </div>
    </div>
    <q-img
      initial-ratio="1"
      src="src/assets/images/home/home-banner.png"
    />
  </div>
</template>

<script setup lang="ts">
  //Core
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const goToDisk = () => {
    router.push('/disk')
  }

  const goToRegistration = () => {
    router.push({ name: 'auth.registration' })
  }
</script>

<style lang="scss" scoped>
  .home-banner {
    display: flex;
    align-items: center;

    &__info {
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      &-actions {
        margin-top: 20px;
      }
    }
  }
</style>
