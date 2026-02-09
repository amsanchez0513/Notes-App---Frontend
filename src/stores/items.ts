import { defineStore } from 'pinia';
import config from '@/config/index';
import { $api } from '@/utils/helpers/api';

interface ItemState {
    items: any[];
}

export const useItemsStore = defineStore({
    id: 'Item',
    state: (): ItemState => ({
        items: [],
    }),
    getters: {},
    actions: {
        async get_items(payload: any) {
            return await $api.$get(config.API.ITEMS, payload);
        },
        async add_item(payload: any) {
            return await $api.$post(config.API.ITEMS, payload);
        },
        async update_item(id, payload: any) {
            return await $api.$post(config.API.UPDATE_ITEM, {
                id,
                ...payload
            });
        },

        async remove_item(id: any) {
            return await $api.$post(config.API.REMOVE_ITEM, { id });
        },
    },
});
