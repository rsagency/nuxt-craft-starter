/* eslint-disable no-unused-vars */
/*
 ** You can extend webpack config here
 */

const path = require('path')
export default {
    extend(config, ctx) {
        config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
                fix: true,
            },
        })
    },
}
