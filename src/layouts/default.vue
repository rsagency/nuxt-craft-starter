<template>
    <div class="h-full">
        <div class="h-full fixed inset-0 z-0"></div>
        <div
            class="relative flex flex-wrap items-center justify-center text-white w-full h-full bg-green-800"
        >
            <div class="container">
                <nuxt />
                <hr
                    class="border border-divider border-gray-400 w-1/2 mx-auto"
                />
                <div class="w-full pt-10">
                    <a
                        href="https://www.rockitscienceagency.com/"
                        target="_blank"
                    >
                        <Logo class="mx-auto" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '~/assets/svg/logo.svg?inline'
export default {
    components: { Logo },
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
