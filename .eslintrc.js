/**
 * Configuration description:
 * https://medium.com/@gogl.alex/how-to-properly-set-up-eslint-with-prettier-for-vue-or-nuxt-in-vscode-e42532099a9c
 */
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'prettier/vue',
        'plugin:prettier/recommended'
    ],
    rules: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-v-html': 0
    },
    globals: {
        $nuxt: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    }
}
