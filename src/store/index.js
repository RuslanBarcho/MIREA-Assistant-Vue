import Vue from 'vue';
import Vuex from 'vuex';
import {api} from '@/domain/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedule: null,
  },

  getters: {
    SCHEDULE: state => {
        return state.schedule;
    },
  },

  mutations: {
    SET_SCHEDULE: (state, payload) => {
        state.schedule = payload;
    },
  },

  actions: {
    GET_SCHEDULE: async (context) => {
        const group = { "group" : "ikbo-13-17" };
        const schedule = await api.getSchedule(group);
        if (schedule.data.success) context.commit('SET_SCHEDULE', schedule.data);
    },
  },
});