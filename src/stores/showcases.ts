import { defineStore } from 'pinia';
import config from '@/config/index';
import { $api } from '@/utils/helpers/api';

interface ShowcaseState {
    showcases: any[];
}

export const useShowcasesStore = defineStore({
    id: 'Showcase',
    state: (): ShowcaseState => ({
        showcases: [],
    }),
    getters: {},
    actions: {
        async get_showcases(payload: any) {
            return await $api.$get(config.API.SHOWCASES, payload);
        },
        async add_showcase(payload: any) {
            return await $api.$post(config.API.SHOWCASES, payload);
        },
        async update_showcase(id, payload: any) {
            return await $api.$post(config.API.UPDATE_SHOWCASE, {
                id,
                ...payload
            });
        },

        async remove_showcase(id: any) {
            return await $api.$post(config.API.REMOVE_SHOWCASE, { id });
        },
    },
});
