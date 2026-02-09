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
                    v-text="$t(props.confirm_remove_msg)"
                />
            </v-card-title>
            <v-card-text>
                <h6
                    class="text-16"
                    v-text="$t('data_lbl') + props.item_to_display"
                />
                <v-label
                    class="text-wrap"
                    v-text="props.description"
                />
            </v-card-text>

            <v-card-actions>
                <v-btn
                    small
                    rounded="pill"
                    @click="cancel"
                    v-text="$t('cancel')"
                />
                <v-btn
                    small
                    class="bg-error px-3 rounded-pill"
                    color="error"
                    @click="remove"
                    v-text="$t('remove')"
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
        item_to_display: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        confirm_remove_msg: {
            type: String,
            default: 'confirm_remove_msg'
        }
    });

    const emit = defineEmits(['cancel', 'remove']);

    function remove() {
        emit('remove', props.item);
    }

    function cancel() {
        emit('cancel');
    }
</script>
