<template>
  <div class="loader"></div>
</template>

<script lang="ts" setup>
  /**
   * Компонент спиннера. Управляется из SystemModule.
   * Перед каждым асинхронным запросом увеличивает счетчик на 1, после ответа или ошибки уменьшает счетчик на 1
   * Пока счетчик больше 0, спиннер крутится
   *
   * Для запросов в которых не нужен спиннер (например для асинхронного селекта) нужно подложить параметр loading: false
   * const { data } = await ManagerUsersSearchGetRequest(
   *   { query: payload },
   *   { loading: false },
   * )
   */
</script>

<style lang="scss" scoped>
@keyframes blast-ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: calc(100px - 4px);
    height: calc(100px - 4px);
    opacity: 0;
  }
}

.loader {
  width: 100px;
  height: 100px;

  &:before,
  &:after {
    @include pseudo;

    border: 4px solid $accent;
    border-radius: 50%;
    animation: blast-ripple 1.3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:before {
    animation-delay: calc(1.3s / 2);
  }
}
</style>
