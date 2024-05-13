import { useSystemStore } from 'src/stores/modules/system.store.js'
import axios from 'axios'
import qs from 'qs'
import { baseURL } from './config.js'

const requestSearchFieldBuffer: { [key: string]: string } = {}

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
    const { url, params } = config
    const search = (params && params.search) || ''

    config.withCredentials = true

    if (url) {
      requestSearchFieldBuffer[url] = search
    }

    if (!config.params || config.params && config.params.loading !== false) {
      systemStore.incrementLoadingCounter()
    }

    if (sessionStorage.getItem('token')) {
      config.headers = config.headers ?? {}
      config.headers['Authorization' as keyof HeadersInit] = 'Bearer ' + sessionStorage.getItem('token')
    }

    config.withCredentials = true

    config.baseURL = config.baseURL || baseURL

    return config
  },
    (reason) => {
      systemStore.decrementLoadingCounter()
      return Promise.reject(reason)
    }
  )

  api.interceptors.response.use((response) => {
    const { url } = response.config,
          { params } = response.config

    const search = (params && params.search) || ''

    if (response.data) {
    }

    systemStore.decrementLoadingCounter()

    if (!params || params.loading !== false) {
      console.log('loading end')
    }

    if (url && requestSearchFieldBuffer[url] !== search) {
      Promise.reject('late request')
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
