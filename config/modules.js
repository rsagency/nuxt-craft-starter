import seomatic from './modules/seomatic'
export default [
    '@nuxtjs/axios',
    '@nuxt/http',
    'nuxt-webfontloader',
    ['nuxt-seomatic-meta', seomatic],
]
