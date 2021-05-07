export default {
    env: {
        api_key: "bltcefcb29e8daeb161",
        delivery_token: "cs8f1f9e836a8d7e228d5d387d",
        environment: "development",
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'vsf-ui-demo-nuxt-app',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'help',
                path: '/',
                component: resolve(__dirname, 'pages/help.vue')
            })
        },
        // middleware: ['checkout'],
        // scrollBehavior(_to, _from, savedPosition) {
        //     if (savedPosition) {
        //         return savedPosition;
        //     } else {
        //         return { x: 0, y: 0 };
        //     }
        // }
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@storefront-ui/vue/styles.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: { transpile: ['@storefront-ui'] }
}