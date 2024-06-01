import { INameValue } from 'src/stores/types/name-value'

export const getOptionsFromDictionary = (dictionary: Record<string, string>): INameValue[] => {
    const optionsArray = Object.entries(dictionary)

    return optionsArray.map(option => {
      const [ value, name ] = option

      return { name, value }
    })
}
