export { default as Header } from '../..\\components\\header.vue'

export const LazyHeader = import('../..\\components\\header.vue' /* webpackChunkName: "components_header" */).then(c => c.default || c)
