export { default as Header } from '../..\\components\\header.vue'
export { default as WebshopItems } from '../..\\components\\webshopItems.vue'

export const LazyHeader = import('../..\\components\\header.vue' /* webpackChunkName: "components_header" */).then(c => c.default || c)
export const LazyWebshopItems = import('../..\\components\\webshopItems.vue' /* webpackChunkName: "components_webshopItems" */).then(c => c.default || c)
