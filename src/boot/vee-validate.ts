import { configure, defineRule } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import * as rules from '@vee-validate/rules'

Object.keys(rules).forEach(rule => {
  defineRule(rule, rules[rule])
})

defineRule('phone', (value: any[], [limit]: [number]) => {
  if (value && value.length !== 0 && value.length < limit) {
    return 'Введите номер польностью'
  }

  return true
})

defineRule('strongPassword', (value: string) => {
  const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~])(?=.{8,})')

  if (!strongRegex.test(value))
    return 'Слабый пароль'

  return true
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
defineRule('confirmed', (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true
  }
  return 'Пароли не совпадают'
})

configure({
  generateMessage: localize({
    en: {
      messages: {
        alpha: 'Поле может содержать только буквы',
        alpha_dash: 'Поле может содержать только буквы, цифры и дефис',
        alpha_num: 'Поле может содержать только буквы и цифры',
        alpha_spaces: 'Поле может содержать только буквы и пробелы',
        between: 'Поле должно быть между 0:{min} и 1:{max}',
        confirmed: 'Поле не совпадает Подтверждение',
        digits: 'Поле должно быть числовым и точно содержать 0:{length} цифры',
        dimensions:
          'Поле должно быть 0:{width} пикселей на 1:{height} пикселей',
        email: 'Недействительная почта',
        excluded: 'Поле должно быть допустимым значением',
        ext: 'Поле должно быть действительным файлом. 0:({args})',
        image: 'Поле должно быть изображением',
        oneOf: 'Поле должно быть допустимым значением',
        integer: 'Поле должно быть целым числом',
        length: 'Введите полностью',
        max: 'Максимальная длина: 0:{length} символов',
        max_value: 'Значение должно быть 0:{max} или менее',
        mimes: 'Поле должно иметь допустимый тип файла. 0:({args})',
        min: 'the value must be: 0:{length} symbols',
        min_value: 'Минимальное значение: 0:{min}',
        numeric: 'Должно быть числом',
        regex: 'Ошибочный формат',
        required: 'the field is required',
        requiredSelect: 'Обязательное поле',
        required_if: 'Обязательное поле',
        size: 'Поле должно быть меньше, чем 0:{size}KB',
      },
    },
    ru: {
      messages: {
        alpha: 'Поле может содержать только буквы',
        alpha_dash: 'Поле может содержать только буквы, цифры и дефис',
        alpha_num: 'Поле может содержать только буквы и цифры',
        alpha_spaces: 'Поле может содержать только буквы и пробелы',
        between: 'Поле должно быть между 0:{min} и 1:{max}',
        confirmed: 'Поле не совпадает Подтверждение',
        digits: 'Поле должно быть числовым и точно содержать 0:{length} цифры',
        dimensions:
          'Поле должно быть 0:{width} пикселей на 1:{height} пикселей',
        email: 'Недействительная почта',
        excluded: 'Поле должно быть допустимым значением',
        ext: 'Поле должно быть действительным файлом. 0:({args})',
        image: 'Поле должно быть изображением',
        oneOf: 'Поле должно быть допустимым значением',
        integer: 'Поле должно быть целым числом',
        length: 'Введите полностью',
        max: 'Максимальная длина: 0:{length} символов',
        mimes: 'Поле должно иметь допустимый тип файла. 0:({args})',
        min: 'Минимальная длина: 0:{length} символов',
        numeric: 'Должно быть числом',
        regex: 'Ошибочный формат',
        required: 'Обязательное поле',
        requiredSelect: 'Обязательное поле',
        required_if: 'Обязательное поле',
        size: 'Поле должно быть меньше, чем 0:{size}KB',
        date_and_time_min: 'время 0:{our} и 1:{time}',
      },
    },
  }),
})

