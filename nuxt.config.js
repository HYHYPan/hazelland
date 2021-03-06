
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src : '~/plugins/vue-apexchart.js', ssr : false },
    

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {

    vendor : [
      'vue-apexchart'
   ],
   /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {
    //  const vueLoader = config.module.rules.find(
    //    rule => rule.loader === "vue-loader"
    //  );
    //  vueLoader.options.transformToRequire = {
    //    img: "src",
    //    image: "xlink:href",
    //    "b-img": "src",
    //    "b-img-lazy": ["src", "blank-src"],
    //    "b-card": "img-src",
    //    "b-card-img": "img-src",
    //    "b-carousel-slide": "img-src",
    //    "b-embed": "src"
    //  };
   }
    
  }
}
