<template>
    <div class="body">
        <div class="header">
            <img src="logo.svg" width="150px">
        </div>
        <section class="nav">
            <nuxt-link to="browse">Browse Local Routes <span style="font-size: 50%;">(Beta)</span></nuxt-link>
        </section>
        <section class="video">
            <div class='embed-container'>
                <iframe src='https://www.youtube.com/embed/ZlwAL69bPMM?autoplay=1&mute=1&rel=0' frameborder='0' allowfullscreen>
                </iframe>
            </div>
        </section>
        <section class="content">
            <div>
                <h1>
                    hyperTT.cloud
                </h1>
                <p>
                    The online hub for finding hyperTT routes and leaderboards.
                </p>
                <p>
                    Here you can find:
                </p>
                <ul>
                    <li>
                        New and popular nearby routes
                    </li>
                    <li>
                        All your stats
                    </li>
                    <li>
                        Your rank within your geographical location*
                    </li>
                    <li>
                        Friends leaderboard (if friends list is public)
                    </li>
                </ul>
            </div>
            <div>
                <h2>Recent News</h2>
                <h3>Beta 1</h3>
                <p>
                    1 March 2019 - posted by cevian
                </p>
                <p>
                    Welcome to hyperTT, beta testers! Thanks for being here to test out the hyperTT systems. There's a very limited selection of routes right now, but you're encouraged to run it as much as possible, because we need the data to keep improving the game, and more importantly, because the quest for the top of the leaderboards has already begun!
                </p>
            </div>
        </section>
        <foot></foot>
    </div>
</template>

<script>
    import {
        helper
    } from '~/plugins/helper.js';

    import foot from '~/components/foot.vue';

    export default {
        //        async fetch ({store, params}) {
        //            await store.dispatch('cpCollection', 'events')
        //        },
        components: {
            foot
        },
        head() {
            console.log(this.$route.path);
            return {
                title: "hyperTT",
                meta: [{
                        hid: 'og:title',
                        property: 'og:title',
                        content: "hyperTT"
                    },
                    {
                        hid: 'og:type',
                        property: 'og:type',
                        content: 'website'
                    },
                    //                    { hid: 'og:url', property: 'og:url', content: this.$store.state.siteUrl + "" + this.$route.path},
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: 'ARG Parkour Racing'
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'ARG Parkour Racing'
                    }
                ],
            }
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    @import '~/assets/sass/color.scss';
    @import '~/assets/sass/global.scss';
    @import '~/assets/sass/breakpoints.scss';
    @import '~/assets/sass/typography.scss';
    @import '~/assets/sass/pages/index.scss';
</style>