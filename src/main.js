import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import HomeView from './views/HomeView';
import SingleCompetitionView from './views/SingleCompetitionView';
import VModal from 'vue-js-modal';

Vue.use(Router);
Vue.use(VModal);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/competitions',
    },
    {
      path: '/competitions',
      name: 'competitions',
      component: HomeView,
    },
    {
      path: '/competitions/:competition',
      name: 'competitions',
      component: SingleCompetitionView,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount('#app');
