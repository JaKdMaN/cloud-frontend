import en from './en'
import ru from './ru'

export enum Languages {
  EN = 'en',
  RU = 'ru'
}

export const defaultLocale = Languages.RU

export default {
  [Languages.EN]: en,
  [Languages.RU]: ru,
}
