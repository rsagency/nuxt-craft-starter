import { resolve } from 'path'

export default {
    mode: 'jit',
    configPath: resolve('./tailwind.config.js'),
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
}
