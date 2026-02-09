import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { get_session, clear_user_session } from '@/utils/helpers/session';
import { is_expired } from '@/utils/helpers/auth_user';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/pages/authentication/Error.vue')
        },
        MainRoutes,
        AuthRoutes
    ]
});

router.beforeEach((to, from, next) => {
    const session = get_session();

    // Check if JWT is expired or invalid
    if (session && is_expired(session.access_token)) {
        clear_user_session(); // Clear session if token is expired
        next('/login'); // Redirect to login
    } else if (to.meta.requiresAuth && !session) {
        next('/login'); // Redirect to login if no session
    } else {
        next(); // Allow access to the route
    }
});
