import axios from './modules/axios'
import apollo from './modules/apollo'
import proxy from './modules/proxy'
import fontawesome from './modules/fontawesome'
export default [
    ['@nuxtjs/axios', axios],
    ['@nuxtjs/apollo', apollo],
    ['@nuxtjs/proxy', proxy],
    ['nuxt-fontawesome', fontawesome],
    '@nuxtjs/svg',
]
