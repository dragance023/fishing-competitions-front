import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import SingleCompetitionView from '../views/SingleCompetitionView';
import Router from 'vue-router';
import Vue from 'vue';
import { authService } from '@/services/auth';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/competitions',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
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

router.beforeEach((to, from, next) => {
  const isLoggedIn = authService.isLoggedIn();

  if (!isLoggedIn && to.name !== 'login') {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
