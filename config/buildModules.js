import gsap from './modules/gsap'
import fontawesome from './modules/fontawesome'
import nuxtCompress from './modules/nuxt-compress'

export default [
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/svg',
    '@braid/vue-formulate/nuxt',
    ['nuxt-compress', nuxtCompress],
    ['nuxt-gsap-module', gsap],
    ['@nuxtjs/fontawesome', fontawesome],
]
