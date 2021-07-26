const routes = [
    {
        path: '/',
        component: () => import('../pages/home.vue'),
        name: 'app',
    },
    {
        path: '/home',
        component: () => import('../pages/home.vue'),
        name: 'app',
    },
    {
        path: "*",
    }
]

export default routes;
