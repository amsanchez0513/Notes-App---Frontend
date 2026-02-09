import { defineStore } from 'pinia';
import config from '@/config/index';
import { $api } from '@/utils/helpers/api';

interface DiscountState {
    discounts: any[];
}

export const useDiscountsStore = defineStore({
    id: 'Discount',
    state: (): DiscountState => ({
        discounts: [],
    }),
    getters: {},
    actions: {
        async get_discounts(payload: object) {
            return await $api.$get(config.API.DISCOUNTS, payload);
        },

        async add_discount(payload: object) {
            return await $api.$post(config.API.DISCOUNTS, payload);
        },

        async update_discount(payload: object) {
            return await $api.$put(config.API.DISCOUNTS, payload);
        },

        async remove_discount(id: object) {
            return await $api.$post(config.API.REMOVE_DISCOUNT, { id });
        },
    },
});
