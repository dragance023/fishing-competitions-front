import { authService } from '../../services/auth/index';

const state = {
  user: {},
  isLoggedIn: false,
};
const getters = {
  isLoggedIn: () => state.isLoggedIn,
};
const actions = {
  async loginAction({ commit }, data) {
    await authService.login(data);
    commit('setUser', data);
  },
  async logoutAction({ commit }) {
    authService.logout();
    commit('removeUser');
  },
  async checkAuth() {
    await authService.checkAuth();
    state.isLoggedIn = !!localStorage.getItem('token');
    console.log('checking auth', state.isLoggedIn);
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isLoggedIn = !!localStorage.getItem('token');
  },
  removeUser(state) {
    state.user = {};
    state.isLoggedIn = false;
  },
};

export const auth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
