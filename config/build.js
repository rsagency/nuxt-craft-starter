/* eslint-disable no-unused-vars */
/*
 ** You can extend webpack config here
 */
export default {
    transpile: ['lodash-es'],
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
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {
                config: './tailwind.config.js',
            },
            autoprefixer: {},
        },
    },
}
