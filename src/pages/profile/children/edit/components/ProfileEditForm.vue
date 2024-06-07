<template>
  <div class="profile-edit-form">
    <div class="profile-edit-form__avatar">
      <img
        v-if="profileAvatar.length"
        :src="profileAvatar[0].url"
      />
      <BaseProfileAvatar v-else />

      <BaseActionMenu
        width="300px"
        :auto-close="false"
        touch-position
        v-model="isMenuShowed"
        :menu="user.avatar && menu"
      >
        <BaseFileUpload
          title="Загрузить новое изображение"
          icon="mdi-upload"
          accept="image/*"
          :max-files="1"
          v-model:files="profileAvatar"
          v-model:file-ids="profileAvatarId"
          @update:files="handleUpdateAvatar"
        />
      </BaseActionMenu>
    </div>
    <div class="profile-edit-form__fields">
      <div class="profile-edit-form__fields-item">
        <h3 class="mb-4">Основная информация</h3>

        <div class="profile-edit-form__fields-item-field">
          <p class="text-bold">Имя</p>
          <BaseInputWithValidation
            dense
            name="name"
            placeholder="Укажите имя"
          />
        </div>

        <div class="profile-edit-form__fields-item-field">
          <p class="text-bold">Фамилия</p>
          <BaseInputWithValidation
          dense
          name="surname"
          placeholder="Укажите фамилию"
        />
        </div>

        <div class="profile-edit-form__fields-item-field">
          <p class="text-bold">Дата рождения</p>
          <BaseInputWithValidation
            dense
            name="dateOfBirth"
            placeholder="Укажите дату рождения"
          />
        </div>

        <div class="profile-edit-form__fields-item-field">
          <p class="text-bold">Пол</p>
          <BaseSelectWithValidation
            dense
            name="gender"
            no-option-text="Ничего"
            :options="genderOptions"
          />
        </div>
      </div>

      <div class="profile-edit-form__fields-item">
        <h3 class="mb-4">Контактная информация</h3>

        <div class="profile-edit-form__fields-item-field">
          <p class="text-bold">Номер телефона</p>
          <BaseInputWithValidation
            dense
            name="phone"
            placeholder="Укажите номер телефона"
          />
        </div>

        <div class="profile-edit-form__fields-item-field">
          <p class="text-bold">Электронная почта</p>
          <BaseInputWithValidation
            dense
            name="email"
            placeholder="Укажите email"
          />
        </div>
      </div>

      <div class="profile-edit-form__fields-item">
        <h3 class="mb-4">Дополнительно</h3>

        <div class="profile-edit-form__fields-item-field">
          <p class="text-bold">Стартовая страница</p>
          <BaseSelectWithValidation
            dense
            name="startPage"
            no-option-text="Ничего"
            :options="startPageOptions"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed, ref } from 'vue'
  import { FormValidationResult, useForm } from 'vee-validate'

  //Types
  import { IUpdateUserBody, IUser } from 'src/stores/types/user'
  import { IBaseActionListItem } from 'src/components/_uikit/other/BaseActionList.vue'

  //Utils
  import { getOptionsFromDictionary } from 'src/utils/functions/get-options-from-dictionary'
  import { userGenderNames, userStartPageNames } from 'src/utils/dictionaries'
  import { DiskFile } from 'src/stores/types/disk'

  interface Props {
    user: IUser
  }

  interface Expose {
    reset: () => void,
    validate: () => Promise<FormValidationResult<IUpdateUserBody>>,
    getValue: () => IUpdateUserBody
  }

  const props = defineProps<Props>()

  const startPageOptions = ref(getOptionsFromDictionary(userStartPageNames))
  const genderOptions = ref(getOptionsFromDictionary(userGenderNames))

  const isMenuShowed = ref(false)

  const profileAvatar = ref<DiskFile[]>(props.user.avatar ? [ props.user.avatar ] : [])
  const profileAvatarId = ref<number[]>(props.user.avatar ? [ props.user.avatar.id ] : [])

  const menu = computed((): IBaseActionListItem[] => {
    return [
      { title: 'Удалить изображение', icon: 'mdi-trash-can', iconColor: 'negative' },
    ]
  })

  const { values: form, validate: validateForm, resetForm } = useForm<IUpdateUserBody>({
    initialValues: {
      name: props.user.name,
      surname: props.user.surname,
      avatarId: profileAvatarId.value[0],
      dateOfBirth: props.user.dateOfBirth,
      gender: props.user.gender,
      phone: props.user.phone,
      email: props.user.email,
      startPage: props.user.startPage,
    },
    validationSchema: {
      email: 'required|email',
    },
  })

  const handleUpdateAvatar = (files: DiskFile[]) => {
    profileAvatar.value = files
    profileAvatarId.value = files.map(f => f.id)

    isMenuShowed.value = false
  }

  const validate = (): Promise<FormValidationResult<IUpdateUserBody>> => validateForm()
  const getValue = (): IUpdateUserBody => {
    return {
      ...form,
      avatarId: profileAvatarId.value[0],
    }
  }
  const reset = (): void => resetForm()

  defineExpose<Expose>({
    validate,
    getValue,
    reset,
  })
</script>

<style scoped lang="scss">
  .profile-edit-form {
    display: flex;
    column-gap: 48px;

    &__avatar {
      cursor: pointer;
      user-select: none;
      position: relative;
      width: 300px;
      height: 350px;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        border-radius: $border-radius-md;
        transition: all $transition-default;
      }

      &:hover{
        &:before {
          background: rgba(#343641, 0.6);
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: $border-radius-md;
      }
    }

    &__fields {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 32px;

      &-item {
        display: grid;
        grid-template-columns: 100%;

        &-field {
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          .q-input, .q-select {
            max-width: 250px;
            max-height: 50px;
          }
        }
      }
    }
  }
</style>
