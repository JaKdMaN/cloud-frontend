import { boot } from 'quasar/wrappers'
import { createYmaps } from 'vue-yandex-maps'

export default boot(({ app }) => {
  app.use(createYmaps({
    apikey: '528a93dc-9586-4bef-8c77-b3f91a973ddf',
  }))
})
