import Vue from 'vue'
import LazyLoad from 'vanilla-lazyload'

/*
 ** Here we are creating a custom lazyloader for bg images only
 ** Vue directive with lazyload `v-lazy-bg`
 */
Vue.directive('lazy-bg', {
    // When the bound element is inserted into the DOM...
    bind(el) {
        // Array/nodelist
        el.item = []
        el.item.push(el)
        el.instance = new LazyLoad(
            {
                // Distance off the scrolling area from which to start loading the elements
                thresholds: `${window.innerHeight}px 0%`,
            },
            el.item
        )
    },
    unbind(el) {
        el.instance.destroy()
    },
})

/*
 ** Here we are creating a custom lazyloader for images/iframes/videos
 ** Vue directive with lazyload `v-lazy`
 */
Vue.directive('lazy', {
    // When the bound element is inserted into the DOM...
    bind(el) {
        // Array/nodelist
        el.item = []
        el.item.push(el)
        el.instance = new LazyLoad(
            {
                // Distance off the scrolling area from which to start loading the elements
                thresholds: `${window.innerHeight}px 0%`,
            },
            el.item
        )
    },
    unbind(el) {
        el.instance.destroy()
    },
})
