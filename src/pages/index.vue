<template>
    <div class="h-full">
        <div
            class="relative flex flex-wrap items-center justify-center w-full h-full text-white"
        >
            <section class="p-10">
                <div class="container">
                    <div class="flex items-center justify-center text-center">
                        <div
                            v-gsap.from="{
                                autoAlpha: 0,
                                y: 60,
                                duration: 1,
                            }"
                            class="invisible"
                        >
                            <h1>
                                nuxt-craft-starter
                            </h1>
                            <p class="mb-8 text-xl">
                                A starter for projects that require Nuxt JS +
                                Craft CMS + Tailwind CSS
                            </p>
                            <hr
                                class="w-full mx-auto border border-gray-400 border-divider"
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
            </section>
        </div>
    </div>
</template>

<script>
import Logo from '~/assets/svg/logo.svg?inline'
export default {
    components: { Logo },
}
</script>

<style></style>
