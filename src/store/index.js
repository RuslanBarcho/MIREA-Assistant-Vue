import Vue from 'vue';
import Vuex from 'vuex';
import {api} from '@/domain/api';
import {translit} from '@/domain/translit';

Vue.use(Vuex);

const getGroup = () => {
  const data = { "group" : "ikbo-13-17" };
  if (localStorage.getItem('group')) {
    data.group = translit.translit(localStorage.getItem('group'), 5).toLowerCase();
  }
  return data;
}

export default new Vuex.Store({
  state: {
    schedule: null,
    groups: null,
  },

  getters: {
    SCHEDULE: state => {
        return state.schedule;
    },
    GROUPS: state => {
        return state.groups;
    },
  },

  mutations: {
    SET_SCHEDULE: (state, payload) => {
        state.schedule = payload;
    },
    SET_GROUPS: (state, payload) => {
        state.groups = payload;
    },
  },

  actions: {
    GET_SCHEDULE: async (context) => {
      const schedule = await api.getSchedule(getGroup());
      if (schedule.data.success) {
        schedule.data.response.schedule.days.map((day) => {
          day.map((lesson) => {
            if (!lesson.odd.name) lesson.odd.name = "—";
            if (!lesson.even.name) lesson.even.name = "—";
          })
        });
        context.commit('SET_SCHEDULE', schedule.data.response.schedule.days);
      }
    },
    GET_GROUPS: async (context) => {
      const groups = await api.getGroups();
      if (groups.data.success) {
        let names = [];
        groups.data.response.groups.map((group) => {
          names.push(translit.translit(group.group, -5).toUpperCase());
        });
        context.commit('SET_GROUPS', names);
      }
    },
  },
});