<template>
  <div class="app-sidebar">
    <AppSidebarUser :user="user"/>

    <BaseButton
      class="mt-9 mb-10"
      label="Добавить"
    >
      <BaseActionMenu fit :menu="menu">
        <BaseFileUpload
          title="Добавить файл"
          icon="mdi-file-document"
        />
      </BaseActionMenu>
  </BaseButton>

    <AppSidebarNav class="mb-8"/>

    <BaseProgress
      :used-size="5"
      :max-size="15"
      with-hint
    />
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'

  //Types
  import { IBaseActionListItem } from 'src/components/_uikit/other/BaseActionList.vue'

  //Store
  import { useUserStore } from 'src/stores/modules/user.store'

  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const menu = computed((): IBaseActionListItem[] => {
    return [
      { title: 'Добавить папку', icon: 'mdi-folder' },
    ]
  })
</script>

<style scoped lang="scss">
.app-sidebar {
  width: 260px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 22px 24px;
  border-right: 1px solid #EAEAEA;
}
</style>
