export const devApiUrl = 'http://localhost:5000/api'

export const baseURL =
  process.env.VUE_APP_BACKEND_HOST && process.env.VUE_APP_BACKEND_API_PATH
    ? process.env.VUE_APP_BACKEND_HOST + process.env.VUE_APP_BACKEND_API_PATH
    : devApiUrl
