import {api} from '@/domain/api';
import {translit} from '@/domain/translit';

const getGroup = () => {
    const data = { "group" : "ikbo-13-17" };
    if (localStorage.getItem('group')) {
        data.group = translit.translit(localStorage.getItem('group'), 5).toLowerCase();
    }
    return data;
}
  
const types = {
    0 : 'Лк',
    1 : 'Пр',
    2 : 'Лаб',
    12 : 'Пр + Лаб',
    10 : 'Пр + Лк',
    20 : 'Лаб + Лк'
};
  
const getLessonName = (lesson) => {
    if (!lesson.name) { 
        return "—";
    } else {
        let type = types[lesson.type] ? ", " + types[lesson.type] : "";
        return lesson.name + type;
    }
}

let state = {
    schedule: null,
};
  
let getters = {
    SCHEDULE: state => {
        return state.schedule;
    },
};
  
let mutations = {
    SET_SCHEDULE: (state, payload) => {
        state.schedule = payload;
    },
};

let actions = {
    GET_SCHEDULE: async (context) => {
        const schedule = await api.getSchedule(getGroup());
        if (schedule.data.success) {
            schedule.data.response.schedule.days.map((day) => {
                day.map((lesson) => {
                    lesson.odd.name = getLessonName(lesson.odd);
                    lesson.even.name = getLessonName(lesson.even);
                })
          });
        context.commit('SET_SCHEDULE', schedule.data.response.schedule.days);
        }
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};