module.exports = {
    head:{
        script: [
            { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAU10I9mMMpANx1Q98_-q3Pas6hwzr37D0", body: true },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png',
            },
        ],
    },
}

