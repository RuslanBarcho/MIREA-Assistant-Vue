import Vue from 'vue';
import Router from 'vue-router';
import VueYandexMetrika from 'vue-yandex-metrika';

const startRouteGuard = async (to, from, next) => {
    const group = localStorage.getItem('group');
    if (to.path !== '/setup' && !group) {
        next('/setup');
    } else if (to.path === '/setup' && group !== null) {
        next('/');
    } else {
        next();
    }
};

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/Schedule.vue')
        },
        {
            path: '/settings',
            component: () => import('@/views/Settings.vue')
        },
        {
            path: '/setup',
            component: () => import('@/views/Setup.vue')
        },
        {
            path: '/*',
            redirect: '/',
        },
    ],
});

router.beforeEach((to, from, next) => {
    startRouteGuard(to, from, next);
});

Vue.use(VueYandexMetrika, {
    id: 56308720,
    router: router,
    env: process.env.NODE_ENV
});

export default router;