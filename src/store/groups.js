import {api} from '@/domain/api';
import {translit} from '@/domain/translit';

let state = {
    groups: null,
};
  
let getters = {
    GROUPS: state => {
        return state.groups;
    },
};
  
let mutations = {
    SET_GROUPS: (state, payload) => {
        state.groups = payload;
    },
};

let actions = {
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
};

export default {
    state,
    getters,
    mutations,
    actions,
};