import { defineStore } from 'pinia';
import { router } from '@/router';
import { useUserStore } from '@/stores/user';
import { isEmpty, get } from 'lodash';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user') || 'null'),
        returnUrl: null,
    }),
    actions: {
        async store_user(user: any) {
            localStorage.setItem('user', JSON.stringify(user));
            router.push(this.returnUrl || '/home');
        },
        logout() {
            this.user = null;
            localStorage.clear();
            router.push('/');
        },
        async register_or_update_user(response, user_payload) {
            const $user = useUserStore();
            const params = { email: user_payload.email };

            try {
                let user_data;
                const user_response = await $user.get_users(params);
                user_data = get(user_response, 'data.items[0]');

                if (isEmpty(user_data)) {
                    await $user.add_user(user_payload);
                    const new_user = await $user.get_users(params);
                    user_data = get(new_user, 'data.items[0]');
                } else {
                    user_payload.id = user_data.id;
                    await $user.update_user(user_payload);
                }

                await $user.update_sso({
                    user_id: get(user_data, 'id'),
                    reference_id: response.sub,
                    type: 'google',
                    access_token: response.access_token,
                    token_id: response.id_token,
                    refresh_token: response.refresh_token,
                    expires_in: response.expires_in,
                });

                return user_data;
            } catch (error) {
                console.error('Failed to register or update user:', error);
                throw error; // rethrow to handle upstream if needed
            }
        }
    },
});
