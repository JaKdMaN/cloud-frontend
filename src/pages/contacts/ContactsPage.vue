<template>
  <ContentPageContainer class="contacts-page">
    <PageSectionGroup>
      <PageSection title="контакты">
        <ContactsCard/>
      </PageSection>
      <PageSection title="Остались вопросы?">
        <ContentCard :item="questionsCard">
          <template #actions>
            <BaseButton
              label="Задать вопрос"
              @click="goToFeedback"
            />
          </template>
        </ContentCard>
      </PageSection>
    </PageSectionGroup>
  </ContentPageContainer>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useMeta } from 'quasar'

  //Types
  import { IContentCard } from 'src/stores/types/card'

  const router= useRouter()

  const questionsCard = computed((): IContentCard => {
    return {
      description: `Вы можете связаться с нами посредством формы обратной связи,
                    наш специалист свяжется с вами в течение 5 рабочих дней.`,
    }
  })

  const goToFeedback = () => {
    router.push({ name: 'feedback' })
  }

  useMeta({
    title: 'Контакты',
  })
</script>

<style scoped lang="scss">

</style>
