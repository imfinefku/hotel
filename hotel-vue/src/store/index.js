import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      head: "",
      name: "",
    },
    role: 2,
    token: "",
  },
  getters: {},
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    setRole(state, data) {
      state.role = data;
    },
    setToken(state, data) {
      state.token = data;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()] //持久化vuex
});
