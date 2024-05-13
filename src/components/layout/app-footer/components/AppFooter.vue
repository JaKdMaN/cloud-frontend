<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__inner-nav">
        <AppLogo/>
        <div class="footer__inner-nav-links">
          <BaseLink
            v-for="(link, index) in links"
            :key="index"
            :link="link"
          />
        </div>
      </div>
      <p>
        © 2023-2024 Cloud. Все права защищены.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  //Utils
  import { links } from './model/app-footer-links'

</script>

<style scoped lang="scss">
  .footer {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    margin-top: 110px;
    padding: 32px 0;
    border-top: 1px solid $color-font-main;

    flex: 0 0 auto;

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      max-width: 1400px;
      margin: auto;

      &-nav {
        display: flex;
        align-items: center;
        column-gap: 44px;

        &-links {
          display: flex;
          column-gap: 20px;
        }
      }
    }
  }
</style>
