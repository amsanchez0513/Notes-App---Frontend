import { defineStore } from 'pinia';
import config from '@/config/index';
import { $api } from '@/utils/helpers/api';

interface UserState {
    is_logged_in: boolean;
    is_superadmin: boolean;
    users: any[];
}

export const useUserStore = defineStore({
    id: 'User',
    state: (): UserState => ({
        is_logged_in: false,
        is_superadmin: false,
        users: [],
    }),
    getters: {},
    actions: {
        async get_users(payload: any) {
            return await $api.$get(config.API.USERS, payload);
        },
        async get_users_by_role(payload: any, role: string) {
            return await $api.$get(config.API.USERS_ROLE, { ...payload, role });
        },
        async add_user(payload: any) {
            return await $api.$post(config.API.USERS, payload);
        },
        async update_user(payload: any) {
            return await $api.$put(config.API.USERS, payload);
        },

        async remove_user(id: any) {
            return await $api.$post(config.API.REMOVE_USERS, { id });
        },

        // User access control
        async get_roles(payload: any) {
            return await $api.$get(config.API.ROLES, payload);
        },
        async upsert_role(payload: any) {
            return await $api.$post(config.API.ROLES, payload);
        },

        async remove_role(id: any) {
            return await $api.$post(config.API.REMOVE_ROLES, { id });
        },

        async get_permissions(payload: any) {
            return await $api.$get(config.API.PERMISSIONS, payload);
        },
        async add_permission(payload: any) {
            return await $api.$post(config.API.PERMISSIONS, payload);
        },
        async update_permission(payload: any) {
            return await $api.$put(config.API.PERMISSIONS, payload);
        },
        async remove_permission(id: any) {
            return await $api.$post(config.API.REMOVE_PERMISSIONS, { id });
        },
        async permission_to_role(payload: any) {
            return await $api.$post(config.API.PERMISSION_TO_ROLE, payload);
        },
        async assign_role(payload: any) {
            return await $api.$post(config.API.ASSIGN_ROLE, payload);
        },
        async remove_user_role(id: any) {
            return await $api.$post(config.API.REMOVE_USER_ROLE, { id });
        },

        async get_sso(payload: any) {
            return await $api.$get(config.API.USER_SSO, payload);
        },
        async update_sso(payload: any) {
            return await $api.$post(config.API.USER_SSO, payload);
        },
    },
});
