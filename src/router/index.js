import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/Schedule.vue'),
        },
        {
            path: '/settings',
            component: () => import('@/views/Settings.vue'),
        },
        {
            path: '/*',
            redirect: '/',
        },
    ],
});