/*
 * Checks if the current route is valid based off of the vuex state sitemap
 */
export default function({ store, redirect, route, error }) {
    return new Promise(async (res, rej) => {
        /**
         * UNCOMMENT THIS WHEN:
         * You have replaced the BACKEND_URL
         * with an actual working enpoint
         */
        // if (store.state.sitemap.length === 0) {
        //     await store.dispatch('LOAD_SITEMAP')
        // }

        const path =
            route.fullPath.slice(0, 1) === '/'
                ? route.fullPath.slice(1)
                : route.fullPath

        // Determine if live preview or not
        if (isLivePreview(path)) {
            store.commit('IS_LIVE_PREVIEW', true)
        } else {
            store.commit('IS_LIVE_PREVIEW', false)
        }

        //console.log(isLivePreview(path), path, path.split('?')[0])
        /*
         * If path is in sitemap or live preview params exist within a route return response.
         * Otherwise, throw 404 error.
         */
        if (
            isInSitemap(store.state.sitemap, path) ||
            (isLivePreview(path) &&
                isInSitemap(store.state.sitemap, path.split('?')[0])) ||
            (isPreview(path) &&
                isInSitemap(store.state.sitemap, path.split('?')[0]))
        ) {
            return res()
        } else {
            error({ statusCode: 404, message: 'Page not found.' })
            return res()
        }
    })
}

// Check for Craft live preview
const isLivePreview = path => /.*x-craft-live-preview.*|.*token.*/gim.test(path)

// Check for Craft draft preview with token
const isPreview = path => /.*x-craft-preview.*|.*token.*/gim.test(path)

const isInSitemap = (siteMap, path) => path === '' || siteMap.includes(path)
