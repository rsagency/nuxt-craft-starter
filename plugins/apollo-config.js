// If your API endpoint is protected, uncomment this
// const btoa = require('btoa')

const {
    IntrospectionFragmentMatcher,
    InMemoryCache
} = require('apollo-cache-inmemory')
const introspectionQueryResultData = require('./../fragmentTypes.json')

export default function({ env, route }) {
    // Add support for matrix
    const fragmentMatcher = new IntrospectionFragmentMatcher({
        introspectionQueryResultData
    })
    /*
     * Look for Craft params in routes
     */
    const getLivePreview = (route) => {
        const livePreview = route.query['x-craft-live-preview'] || ''
        return livePreview ? `x-craft-live-preview=${livePreview}` : ''
    }
    const getPreview = (route) => {
        const preview = route.query['x-craft-preview'] || ''
        return preview ? `x-craft-preview=${preview}` : ''
    }
    const getToken = (route) => {
        const token = route.query.token || ''
        return token ? `token=${token}` : ''
    }
    /*
     * Return HttpEndpoint specific to the params found in routes
     */
    const getHttpEndpoint = (route) => {
        const livePreview = getLivePreview(route)
        const preview = getPreview(route)
        const token = getToken(route)
        if (preview && token) {
            return `${process.env.BACKEND_URL}${process.env.GRAPHQL_PATH}?${preview}&${token}`
        } else if (livePreview && token) {
            return `${process.env.BACKEND_URL}${process.env.GRAPHQL_PATH}?${livePreview}&${token}`
        } else if (livePreview) {
            return `${process.env.BACKEND_URL}${process.env.GRAPHQL_PATH}?${livePreview}`
        } else if (token) {
            return `${process.env.BACKEND_URL}${process.env.GRAPHQL_PATH}?${token}`
        } else {
            return `${process.env.BACKEND_URL}${process.env.GRAPHQL_PATH}`
        }
    }

    return {
        httpEndpoint: getHttpEndpoint(route),
        // getAuth: () => 'Bearer ' + env.GRAPHQL_TOKEN,
        cache: new InMemoryCache({ fragmentMatcher })

        // If your API endpoint is protected, uncomment this section and
        // add in your servers credentials here:
        // httpLinkOptions: {
        //     headers: {
        //         Authorization: 'Basic ' + btoa('username:password')
        //     }
        // }
    }
}
