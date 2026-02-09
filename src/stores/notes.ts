import { defineStore } from 'pinia';
import config from '@/config/index';
import { $api } from '@/utils/helpers/api';

interface NoteState {
    notes: any[];
}

export const useNotesStore = defineStore({
    id: 'Note',
    state: (): NoteState => ({
        notes: [],
    }),
    getters: {},
    actions: {
        async get_notes(payload: any) {
            return await $api.$get(config.API.NOTES, payload);
        },
        async add_note(payload: any) {
            return await $api.$post(config.API.NOTES, payload);
        },
    },
});
