<template>
  <div class="profile-view-info">
    <div class="profile-view-info__avatar">
      <img
        v-if="user.avatar"
        :src="user.avatar.url"
      />
      <BaseProfileAvatar v-else/>
    </div>
    <div class="profile-view-info__blocks">
      <ProfileViewInfoBlock
        v-for="(block, index) in profileInfoBlocks"
        :key="index"
        :block="block"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  //Types
  import { IUser } from 'src/stores/types/user'

  //Hooks
  import { useProfileInfo } from 'src/pages/profile/children/view/model/useProfileInfo'

  interface Props {
    user: IUser
  }

  const props = defineProps<Props>()

  const { profileInfoBlocks } = useProfileInfo(props.user)
</script>

<style scoped lang="scss">
  .profile-view-info {
    display: flex;
    column-gap: 48px;

    &__avatar {
      width: 300px;
      height: 350px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: $border-radius-md;
      }
    }

    &__blocks {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 32px;
    }
  }
</style>
