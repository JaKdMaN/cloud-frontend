<template>
  <RouterLink
    v-if="user"
    :to="{ name: 'profile' }"
    class="app-sidebar-user"
  >
    <div class="app-sidebar-user__avatar">
      <img
        v-if="user.avatar"
        :src="user.avatar.url"
      />
      <div
        v-else
        class="app-sidebar-user__avatar-base"
      >
        <q-icon
          name="mdi-account"
          size="20px"
        />
      </div>
    </div>
    <div class="app-sidebar-user__info">
      <p
        v-if="user.name || user.surname"
        class="app-sidebar-user__info-name"
      >
        {{ `${user.name} ${user.surname}` }}
      </p>
      <p class="app-sidebar-user__info-email">
        {{ user.email }}
      </p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  //Types
  import { IUser } from 'src/stores/types/user'

  interface Props {
    user: IUser | null
  }

  defineProps<Props>()

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

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      &-base {
        width: 100%;
        height: 100%;
        background: #EAEAEA;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
      }
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
