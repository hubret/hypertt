<template>
    <footer>
        <div class="footnav">
            <div class="column">
                <nuxt-link to="/">
                Home
                </nuxt-link>
            </div>
            <div class="column">
                <nuxt-link to="forum">
                    Forum
                </nuxt-link>
            </div>
            <div class="column">
                <span class="title">
                    REGIONS
                </span>
                <nuxt-link to="na">
                    North America
                </nuxt-link>
                <nuxt-link to="euw">
                    Europe West
                </nuxt-link>
            </div>
            <div class="column">
                <span class="title">
                    INFORMATION
                </span>
                <nuxt-link to="Support">
                    Support
                </nuxt-link>
                <nuxt-link to="legal">
                    Legal
                </nuxt-link>
                <nuxt-link to="careers">
                    Careers
                </nuxt-link>
            </div>
        </div>
        <div class="title">
            2019 &copy; <a href="http://hur.bet">Hubert Si</a>
        </div>
    </footer>
</template>

<style lang="scss">
    @import '~/assets/sass/color.scss';
    @import '~/assets/sass/components/foot.scss';
</style>