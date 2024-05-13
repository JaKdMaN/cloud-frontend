import { boot } from 'quasar/wrappers'

import { Field, Form } from 'vee-validate'

export default boot(({ app }) => {
  app
    .component('ValidationField', Field)
    .component('ValidationForm', Form)
})
