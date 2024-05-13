<template>
  <ContentPageContainer>
    <PageSectionGroup>
      <PageSection title="О компании">
        <ContentCard
          :item="aboutContentCard"
        />
      </PageSection>
      <PageSection title="Наша команда">
        <AboutEmployeeCards :employees="aboutEmployees"/>
      </PageSection>
    </PageSectionGroup>
  </ContentPageContainer>
</template>

<script setup lang="ts">
  //Core
  import { useMeta } from 'quasar'
  import { computed } from 'vue'

  //Types
  import { IContentCard } from 'src/stores/types/card'

  //Utils
  import { aboutEmployees } from './model/about-employees'

  const aboutContentCard = computed((): IContentCard => {
    return {
      img: 'src/assets/images/about/about-section.png',
      reverse: true,
      description: `Компания была основана в 2023 году группой энтузиастов
                    информационных технологий с целью изменить способ хранения и обмена файлов.
                    Стартовав с небольшим количеством сотрудников, компания быстро выросла благодаря
                    своей инновационной платформе облачного хранения, основанной на передовых технологиях.
                    Принципиальное отношение к безопасности и удобству использования привлекло внимание клиентов
                    всех масштабов, от частных лиц до крупных корпораций.
                    <br><br>
                    Сегодня компания является одним из лидеров в области облачного хранения файлов,
                    предоставляя клиентам возможность хранения, совместной работы и защиты их ценных данных.
                    Благодаря постоянному стремлению к улучшению и инновациям в области пользовательского опыта,
                    компания продолжает развиваться, оставаясь в числе наиболее надежных и удобных платформ
                    облачного хранения в мире.`,
    }
  })

  useMeta({
    title: 'О компании',
  })
</script>

<style scoped lang="scss">

</style>
