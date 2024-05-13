<template>
  <ContentPageContainer class="home-page">
    <HomeBanner/>
    <PageSectionGroup>
      <PageSection title="Преимущества">
        <ContentCard
          v-for="(item, index) in homeSectionsContent"
          :key="index"
          :item="item"
        />
      </PageSection>
      <PageSection title="Остались вопросы?">
        <div class="home-page__questions">
          <ContentCard :item="questionsCard">
            <template #actions>
              <ButtonGroupWithSpace>
                <BaseButton
                  label="Задать вопрос"
                  @click="goToFeedback"
                />
                <BaseButton
                  label="Перейти к контактам"
                  outline
                  @click="goToContacts"
                />
              </ButtonGroupWithSpace>
            </template>
          </ContentCard>
        </div>
      </PageSection>
    </PageSectionGroup>
  </ContentPageContainer>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'

  //Types
  import { IContentCard } from 'src/stores/types/card'

  //Utils
  import { homeSectionsContent } from './model/home-sections-content'

  const router = useRouter()

  const questionsCard = computed((): IContentCard => {
    return {
      description: `Вы можете связаться с нами посредством формы обратной связи,
                    с помощью электронной почты или позвонить на горячую линию.
                    Все контактые данные указаны в разделе “Контакты”`,
    }
  })

  const goToContacts = () => {
    router.push({ name: 'contacts' })
  }

  const goToFeedback = () => {
    router.push({ name: 'feedback' })
  }
</script>
<style scoped lang="scss">
  .home-page {
    &__questions {
      max-width: 670px;
      text-align: center;
    }
  }
</style>
