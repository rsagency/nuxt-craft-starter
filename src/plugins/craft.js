/**
 * Sets up nuxt to communicate with Craft for fetching content and enabling live preview mode
 * https://wbrowar.com/article/code/craft-cms-live-preview-with-nuxt-js/
 */
export default function({ $config, $http, query }, inject) {
    // Create $craft and inject it into Vue components
    // Usage: `this.$craft({ query: gqlQuery, variables: { uri: `code/${this.$route.params.slug}` } })`

    // Create KY instance
    const $craft = $http.create({
        prefixUrl: `${$config.craftApiUrl}${$config.gqlPath}`,
    })

    // Add GraphQL authorization token for non-public schemas
    if ($config.craftAuthToken !== '') {
        $craft.setToken($config.craftAuthToken, 'Bearer')
    }

    // If `token` is set in query parameters, pass it along to Craft API endpoint
    inject(
        'craft',
        $craft.$post.bind($craft, query.token ? `?token=${query.token}` : '')
    )
}
