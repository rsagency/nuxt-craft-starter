export const state = () => ({
    sitemap: [],
    isLivePreview: false,
})

// Sets the sitemap into state
export const mutations = {
    SET_SITEMAP: function(state, sitemap) {
        state.sitemap = sitemap
    },
    IS_LIVE_PREVIEW(state, value) {
        state.isLivePreview = value
    },
}

// Load the sitemap and commit to state
export const actions = {
    // LOAD_SITEMAP: async function({ commit }) {
    //     const res = await this.$axios.$get(
    //         process.env.BACKEND_URL +
    //             'actions/route-map/routes/get-all-urls?format=Vue'
    //     )
    //     commit('SET_SITEMAP', res)
    // },
    IS_LIVE_PREVIEW({ commit }, value) {
        commit('IS_LIVE_PREVIEW', value)
    },
}
