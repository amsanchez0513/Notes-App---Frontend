<script setup lang="ts">
import {ref, onMounted} from "vue";
import axios from "axios";

const notes = ref([]);
const newNote = ref("");

const API_URL = "http://localhost:3018/notes";

async function fetchNotes() {
    const res = await axios.get(API_URL);
    notes.value = res.data;
}

async function saveNote() {
    if (!newNote.value) return;

    await axios.post(API_URL, {
        content: newNote.value,
    });
}

onMounted(fetchNotes);
</script>

<template>
    <div class="lp-wraper">
        <input v-model="newNote" placeholder="Enter a new note" />

        <v-label class="text-subtitle-1 font-weight-medium pb-2">Add Note</v-label>
        <VTextField v-model="newNote" ></VTextField>

        <v-btn @click="saveNote">Add Note</v-btn>

        <ul>
            <li
                v-for="note in notes"
                :key="note.id"
            >
                {{ notes.content }}
            </li>

        </ul>
    </div>
</template>
