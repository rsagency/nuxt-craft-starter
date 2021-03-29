/*
 ** For extending webpack config here
 */
export default {
    publicPath: './.nuxt/dist/',
    /*
     ** This is the goods for lazysizes
     */
    extend(config, { isClient, loaders: { vue } }) {
        if (isClient) {
            vue.transformAssetUrls.img = ['data-src', 'src']
            vue.transformAssetUrls.source = ['data-srcset', 'srcset']
        }
    },
}
