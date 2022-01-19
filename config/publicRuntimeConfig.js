export default {
    craftApiUrl: process.env.CRAFT_API_URL,
    craftAuthToken: process.env.CRAFT_AUTH_TOKEN,
    baseUrl: process.env.BASE_URL,
    gqlPath: process.env.GRAPHQL_PATH,
    // googleAnalytics: {
    //     id: process.env.GOOGLE_ANALYTICS_ID,
    //     dev: process.env.NODE_ENV != 'production' ? true : false,
    //     Used to test in development:
    //     debug: {
    //         enabled: true,
    //     },
    // },
}
