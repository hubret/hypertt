<template>
    <div>
        <gmap></gmap>
        <section id="spotlight">
            <input class="textbox" placeholder="Choose a starting point...">
        </section>
    </div>
</template>

<script>
    
    import { helper } from '~/plugins/helper.js';
    
    import leaderboard from '~/components/leaderboard.vue';
    import gmap from '~/components/gmap.vue';
    
    export default {
        components: {
            leaderboard,
            gmap
        },
        head () {
            console.log(this.$route.path);
            return {
                title: "hyperTT",
                meta: [
                    { hid: 'og:title', property: 'og:title', content: "hyperTT" },
                    { hid: 'og:type', property: 'og:type', content: 'website' },
//                    { hid: 'og:url', property: 'og:url', content: this.$store.state.siteUrl + "" + this.$route.path},
                    { hid: 'og:description', property: 'og:description', content: 'ARG Parkour Racing' },
                    { hid: 'description', name: 'description', content: 'ARG Parkour Racing' }
                ],
            }
        }
    }
</script>

<style lang="scss">
    @import '~/assets/sass/color.scss';
    @import '~/assets/sass/global.scss';
    @import '~/assets/sass/breakpoints.scss';
    @import '~/assets/sass/typography.scss';
    @import '~/assets/sass/pages/region.scss'
</style>
