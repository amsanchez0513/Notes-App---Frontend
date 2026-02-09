const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    children: [
        {
            name: 'Landing Page',
            path: '/',
            component: () => import('@/pages/authentication/Main.vue')
        },
        {
            name: 'Forgot Password',
            path: '/auth/forgot-password',
            component: () => import('@/pages/authentication/ForgotPassword.vue')
        },
        {
            name: 'Two Steps',
            path: '/auth/two-step',
            component: () => import('@/pages/authentication/TwoStep.vue')
        },
        {
            name: 'Error',
            path: '/auth/404',
            component: () => import('@/pages/authentication/Error.vue')
        },
        {
            name: 'Maintenance',
            path: '/auth/maintenance',
            component: () => import('@/pages/authentication/Maintenance.vue')
        },
    ],
};

export default AuthRoutes;
