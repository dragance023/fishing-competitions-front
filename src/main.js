import Vue from 'vue';
import App from './App.vue';
import VModal from 'vue-js-modal';
import store from './store';
import router from './router/router.js';

Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  router: router,
}).$mount('#app');
