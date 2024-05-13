<template>
  <RouterLink
    v-if="user"
    :to="{ name: 'profile' }"
    class="app-sidebar-user"
  >
      <img :src="user.avatar" class="app-sidebar-user__avatar"/>
    <div class="app-sidebar-user__info">
      <p class="app-sidebar-user__info-name">
        {{ fullName }}
      </p>
      <p class="app-sidebar-user__info-email">
        {{ user.email }}
      </p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  //Types
  import { IUser } from 'src/stores/types/user'
  import { getFullName } from 'src/utils/functions'

  interface Props {
    user: IUser | null
  }

  const props = defineProps<Props>()

  const fullName = computed((): string => {
    const user = props.user

    return user ? getFullName(user) : ''
  })
</script>

<style scoped lang="scss">
  .app-sidebar-user {
    display: flex;
    align-items: center;
    column-gap: 8px;

    &:hover {
      .app-sidebar-user__info-name {
        color: $primary;
      }
    }

    &__avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
    }

    &__info {
      display: flex;
      flex-direction: column;

      &-name {
        font-weight: 700;
        font-size: 1.6rem;

        transition: $transition-default;
      }

      &-email {
        font-size: 1.2rem;
      }
    }
  }

  .router-link-active {
    .app-sidebar-user__info-name {
      color: $primary;
    }
  }
</style>
