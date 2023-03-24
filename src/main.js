import BrowserSupport from  "./browser-support.js";
BrowserSupport.isIE();

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { i18n } from './i18n.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
    },
  ],
});

new Vue({ // eslint-disable-line no-new
  el: '#vue-app',
  router,
  i18n,
  render (h) {
    return h(App, {});
  },
});
