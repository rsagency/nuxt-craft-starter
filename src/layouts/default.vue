<template>
    <nuxt />
</template>

<script>
export default {
    name: 'DefaultLayout',
    head() {
        return {
            htmlAttrs: {
                class: 'bg-green-800',
            },
        }
    },
}
</script>

<style>
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
html,
body,
#__nuxt,
#__layout {
    @apply h-full;
}

/* page-fade-transform */
.page-enter-active,
.page-leave-active {
    transition: all 0.5s;
}

.page-enter {
    opacity: 0;
    transform: translateX(-30px);
}

.page-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
