import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useSystemStore = defineStore('systemStore', () => {
  const loading = ref(false)
  let loadingCounter = 0

  const incrementLoadingCounter = () => {
    loadingCounter++
    loading.value = true
  }

  const decrementLoadingCounter = () => {
    if (loadingCounter > 0) {
      loadingCounter--

      if (loadingCounter <= 0) {
        loading.value = false
      }
    }
  }

  return {
    loading,
    incrementLoadingCounter,
    decrementLoadingCounter,
  }
})
