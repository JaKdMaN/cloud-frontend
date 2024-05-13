import { RouteLocationRaw } from 'vue-router'

export interface ILink {
  name: string,
  path: RouteLocationRaw,
  icon?: string,
}
