// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add a meta tag
  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,XML,JavaScript'
  })
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0, user-scalable=no'
  })
  head.meta.push({
    name: 'msapplication-navbutton-color',
    content: '#1A3742'
  })
  head.meta.push({
    name: 'apple-mobile-web-app-status-bar-style',
    content: '#1A3742'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    href: '/img/logo/icon.png'
  })
}

/**
 * Imports
 */
import '~/assets/css/index.css'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
