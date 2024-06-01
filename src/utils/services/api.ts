import { useSystemStore } from 'src/stores/modules/system.store.js'
import axios from 'axios'
import qs from 'qs'
import { baseURL } from './config.js'

const createApi = () => {
  const systemStore = useSystemStore()

  const api = axios.create({
    paramsSerializer(params) {
      return qs.stringify(params, {
        arrayFormat: 'indices',
        encode: true,
      })
    },
  })

  api.interceptors.request.use((config) => {
    if (!config.params || config.params && config.params.loading !== false) {
      systemStore.incrementLoadingCounter()
    }

    if (localStorage.getItem('token')) {
      config.headers = config.headers ?? {}
      config.headers['Authorization' as keyof HeadersInit] = 'Bearer ' + localStorage.getItem('token')
    }

    config.baseURL = config.baseURL || baseURL

    return config
  },
    (reason) => {
      systemStore.decrementLoadingCounter()
      return Promise.reject(reason)
    }
  )

  api.interceptors.response.use((response) => {
    const { params } = response.config

    systemStore.decrementLoadingCounter()

    if (!params || params.loading !== false) {
      systemStore.decrementLoadingCounter()
    }

    return response
  },
    (reason) => {
      systemStore.decrementLoadingCounter()
      return Promise.reject(reason)
    }
  )

  return api
}

export { createApi }
