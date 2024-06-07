import { useAuthStore } from 'src/stores/modules/auth.store'
import { useUserStore } from 'src/stores/modules/user.store'
import useNotify from 'src/utils/hooks/useNotify'

export async function auth({ nextMiddleware, next }: any) {
  const userStore = useUserStore()
  const authStore = useAuthStore()
  const { notifyError } = useNotify()

  try {
    if (!userStore.user) {
      await userStore.fetchUser()
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      if (error.response.data.message === 'Invalid Token') {
        try {
          await authStore.refresh()
          await userStore.fetchUser()
        } catch (refreshError) {
          notifyError(refreshError)
          return next({ name: 'auth.login' })
        }
      } else {
        notifyError(error)
      }
    } else {
      notifyError(error)
      return next({ name: 'auth.login' })
    }
  }

  return nextMiddleware()
}
