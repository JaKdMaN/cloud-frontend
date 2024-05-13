<template>
  <div class="contacts-card">
    <div v-html="contactsInfo"></div>
    <ContactsMap/>
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  const contactsInfo = computed((): string => {
    return `Cloud_support@gmail.com <br>
            +7-495-888-7581 <br>
            г. Москва, ул. Нежинская, д. 7, 119501 <br>
            Пн - Пт 10:00 - 18:00 <br>
            <br>
            ИНН: 771882555989 <br>
            ОРГНИП: 328774621392308 <br>
            <br>
            Платежные реквизиты: <br>
            Р/С: 40802810006938261118 <br>
            К/С: 30101810945252736297 <br>
            Банк получателя: <br>
            Филиал Центральный ПАО Банка ОТКРЫТИЕ <br>
            БИК 065525297 <br>`
  })

</script>

<style scoped lang="scss">
  .contacts-card {
    display: flex;
    align-items: center;
    column-gap: 100px;
  }
</style>
