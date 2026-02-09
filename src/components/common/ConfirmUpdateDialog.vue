<template>
    <v-dialog
        v-model="props.value"
        persistent
        max-width="500"
        @escape-key="cancel"
    >
        <v-card>
            <v-card-title class="pa-4 bg-primary">
                <span
                    class="text-h5 text-white"
                    v-text="$t('confirm_update_msg')"
                />
            </v-card-title>
            <v-card-text>
                <div v-for="(value, key) in props.data" :key="key" class="mb-2">
                    <strong>{{ $t(key) }}:</strong> {{ value }}
                </div>
            </v-card-text>

            <v-card-actions>
                <v-btn
                    small
                    rounded="pill"
                    @click="cancel"
                    v-text="$t('cancel')"
                />
                <v-btn
                    class="bg-primary px-3 rounded-pill"
                    @click="save"
                    v-text="$t('save')"
                />
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({
        value: {
            type: Boolean,
            required: true,
        },
        item: {
            type: Object as () => { name?: string },
            default: () => ({}),
        },
        data: {
            type: Object as () => { name?: string },
            default: () => ({}),
        },
    });

    const emit = defineEmits(['cancel', 'save']);

    function save() {
        emit('save', props.item);
    }

    function cancel() {
        emit('cancel');
    }
</script>
