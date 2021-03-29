module.exports = {
    purge: [
        './src/components/**/*.{vue,js}',
        './src/layouts/**/*.vue',
        './src/pages/**/*.vue',
        './src/plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            backgroundImage: () => ({
                layout: "url('~/assets/img/RSA_Web_Homepage_Hero.jpg')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
