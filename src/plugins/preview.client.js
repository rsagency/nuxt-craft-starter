/**
 * This plugin enables Crafts Live Preview to work with a statc site
 * More info: https://wbrowar.com/article/code/craft-cms-live-preview-with-nuxt-js/
 */

/* eslint-disable no-unused-vars */
export default async function({ $config, enablePreview, query }) {
    if (query.CraftPreviewSlug) {
        await enablePreview()
    }
}
