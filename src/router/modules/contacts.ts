import { RouteRecordRaw } from 'vue-router'

const contactsRoutes: RouteRecordRaw[] = [
  {
    name: 'contacts',
    path: '/contacts',
    component: () => import('pages/contacts/ContactsPage.vue'),
  },
]

export default contactsRoutes
