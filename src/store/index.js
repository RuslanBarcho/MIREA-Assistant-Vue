import Vue from 'vue';
import Vuex from 'vuex';
import schedule from './schedule';
import groups from './groups';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groups: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    schedule,
    groups,
  },
});