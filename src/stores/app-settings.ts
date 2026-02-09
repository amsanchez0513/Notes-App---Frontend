import { get } from 'lodash';
import { defineStore } from 'pinia';
import config from '@/config/index';
import { $api } from '@/utils/helpers/api';

interface AppSettingsState {
    tags: [];
    currency_amount: number;
}

export const useAppSettingsStore = defineStore({
    id: 'AppSettings',
    state: (): AppSettingsState => ({
        tags: [],
        currency_amount: parseFloat(localStorage.getItem('currency_amount') || '1'),
    }),
    getters: {},
    actions: {
        async set_currency() {
            const response = await this.get_currency_settings();
            const data = get(response, 'data.items.0', []);

            const currency_amount = get(data, 'conversion_rate', 1);
            localStorage.setItem('currency_amount', currency_amount);
        },
        // -------- APP SETTINGS --------
        async get_currency_settings(payload: object) {
            return await $api.$get(config.API.CURRENCY_SETTINGS, payload);
        },

        async upsert_currency_settings(payload: object) {
            return await $api.$post(config.API.CURRENCY_SETTINGS, payload);
        },

        // -------- ITEM SETTINGS --------
        async get_item_settings(payload: object) {
            return await $api.$get(config.API.ITEM_SETTINGS, payload);
        },

        async upsert_item_settings(payload: object) {
            return await $api.$post(config.API.ITEM_SETTINGS, payload);
        },

        // -------- ITEM TAGS --------
        async get_item_tags(payload: object) {
            return await $api.$get(config.API.ITEM.TAGS, payload);
        },

        async add_item_tag(payload: object) {
            return await $api.$post(config.API.ITEM.TAGS, payload);
        },

        async update_item_tag(payload: object) {
            return await $api.$put(config.API.ITEM.TAGS, payload);
        },

        async remove_item_tag(id: object) {
            return await $api.$post(config.API.ITEM.REMOVE_TAGS, { id });
        },

        // -------- ITEM TYPES --------
        async get_item_types(payload: object) {
            return await $api.$get(config.API.ITEM.TYPES, payload);
        },

        async add_item_type(payload: object) {
            return await $api.$post(config.API.ITEM.TYPES, payload);
        },

        async update_item_type(payload: object) {
            return await $api.$put(config.API.ITEM.TYPES, payload);
        },

        async remove_item_type(id: object) {
            return await $api.$post(config.API.ITEM.REMOVE_TYPES, { id });
        },

        // -------- ITEM STATUS --------
        async get_item_status(payload: object) {
            return await $api.$get(config.API.ITEM.STATUS, payload);
        },
        async add_item_status(payload: object) {
            return await $api.$post(config.API.ITEM.STATUS, payload);
        },
        async update_item_status(payload: object) {
            return await $api.$put(config.API.ITEM.STATUS, payload);
        },

        async remove_item_status(id: object) {
            return await $api.$post(config.API.ITEM.REMOVE_STATUS, { id });
        },

        // -------- ITEM TAX --------
        async get_item_taxes(payload: object) {
            return await $api.$get(config.API.ITEM.TAX, payload);
        },
        async add_item_tax(payload: object) {
            return await $api.$post(config.API.ITEM.TAX, payload);
        },
        async update_item_tax(payload: object) {
            return await $api.$put(config.API.ITEM.TAX, payload);
        },

        async remove_item_tax(id: object) {
            return await $api.$post(config.API.ITEM.REMOVE_TAX, { id });
        },
    }
});
