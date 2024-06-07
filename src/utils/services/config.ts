export const devApiUrl = 'http://localhost:5000/api'
export const tokenName = 'token'

export const getToken = () => {
  return localStorage.getItem(tokenName)
}

export const baseURL =
  process.env.VUE_APP_BACKEND_HOST && process.env.VUE_APP_BACKEND_API_PATH
    ? process.env.VUE_APP_BACKEND_HOST + process.env.VUE_APP_BACKEND_API_PATH
    : devApiUrl
