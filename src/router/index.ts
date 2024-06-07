import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import middlewarePipline from './middleware/pipline'

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  history: createWebHistory(process.env.VUE_ROUTER_BASE),
})

router.beforeEach((to, from, next) => {
  if(!to.meta.middleware){
    return next()
  }

  const middleware = to.meta.middleware as any[]
  const context = { to, from, next }

  return middleware[0]({
    ...context,
    nextMiddleware: middlewarePipline(context, middleware, 1),
  })

})

export default router
