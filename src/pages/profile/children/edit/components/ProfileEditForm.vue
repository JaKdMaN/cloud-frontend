<template>
  <div class="profile-edit-form">
    <div class="profile-edit-form__avatar">
      <img :src="user.avatar"/>
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
          <BaseInputWithValidation
            dense
            name="gender"
            placeholder="Укажите пол"
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
            :options="startPageOptions"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'
  import { FormValidationResult, useForm } from 'vee-validate'

  //Types
  import { IUpdateUser, IUser } from 'src/stores/types/user'

  //Utils
  import { startPageOptions } from '../model/start-page-options'

  interface Props {
    user: IUser
  }

  interface Expose {
    reset: () => void,
    validate: () => Promise<FormValidationResult<IUpdateUser>>,
    getValue: () => IUpdateUser
  }

  const props = defineProps<Props>()

  const { values: form, validate: validateForm, resetForm } = useForm<IUpdateUser>({
    initialValues: {
      name: props.user.name ?? '',
      surname: props.user.surname ?? '',
      dateOfBirth: props.user.dateOfbirth ?? '',
      gender: props.user.gender ?? '',
      phone: props.user.phone ?? '',
      email: props.user.email ?? '',
      startPage: props.user.startPage ?? '',
    },
    validationSchema: {
      email: 'required|email',
    },
  })

  const validate = (): Promise<FormValidationResult<IUpdateUser>> => validateForm()
  const getValue = (): IUpdateUser => form
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
      width: 200px;
      object-fit: cover;

      img {
        max-width: 100%;
        max-height: 100%;
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
