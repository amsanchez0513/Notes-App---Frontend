<script setup lang="ts">
import {ref, onMounted} from "vue";
import { get } from 'lodash';
import {useNotesStore} from '@/stores/notes';

const emit = defineEmits(['update_notify']);

const notes = ref([]);
const newNote = ref("");

// const API_URL = "http://localhost:3018/notes";

const $notes = useNotesStore();

async function saveNote() {
    if (!newNote.value) return;

    const response = await $notes.add_note({
        content: newNote.value,
    })
    const response_message = get(response, 'metadata.message', '');
    emit('update_notify', {
            message: response_message,
            type: 'success',
        });
}
onMounted(async() => {
    const res = await $notes.get_notes();
    console.log(res);
    notes.value = res.data.items;
    console.log(notes.value);
});
</script>

<template>
    <div class="lp-wraper">

        <v-data-table
            :items="notes"
            :headers="[
                { title: 'ID', key: 'id' },
                { title: 'Content', key: 'content' },
            ]"
            hide-pagination
            hide-default-footer
        >
            <template #item="{ item }">
                <tr>
                    <td>{{ item.id }}</td>
                    <td>{{ item.content }}</td>
                </tr>
                </template>
        </v-data-table>

        <v-separator class="my-4" />

        <v-label class="text-subtitle-1 font-weight-medium pb-2">Add New Note</v-label>
        <VTextField v-model="newNote" placeholder="Enter a new note" ></VTextField>
        <v-btn
            variant="outlined"
            size="large"
            class="bg-primary font-weight-semibold"
            block
            @click="saveNote"
        >
            Add Note
        </v-btn>
    </div>
</template>
