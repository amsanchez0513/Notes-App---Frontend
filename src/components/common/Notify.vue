<template>
    <v-snackbar
        v-model="visible"
        :timeout="props.timeout || 3000"
        :color="props.type"
        class="mb-10"
        elevation="8"
        rounded="md"
        @update:modelValue="handle_timeout"
    >
        <v-icon
            class="text-24 mr-2"
            :icon="icon"
            color="text-white"
        />
        <span
            class="text-subtitle1"
            v-text="props.message"
        />
    </v-snackbar>
</template>

<script setup lang="ts">
    import { defineProps, computed, ref, watch } from 'vue';

    const props = defineProps<{
        show: boolean;
        message: string;
        type: 'success' | 'error' | 'info' | 'warning';
        timeout?: number;
    }>();

    const visible = ref(props.show);
    const emit = defineEmits(['update_notify']);

    // Watch for changes in the prop and update the local state
    watch(() => props.show, (newVal) => {
        visible.value = newVal;
    });

    // Method to handle the timeout event
    function handle_timeout() {
        emit('update_notify', false);
    }

    const icon = computed(() => {
        switch (props.type) {
            case 'success':
                return 'mdi-checkbox-marked-circle-outline';
            case 'error':
                return 'mdi-alert-circle-outline';
            case 'warning':
                return 'mdi-alert-outline';
            case 'info':
                return 'mdi-information-outline';
            default:
                return 'mdi-checkbox-marked-circle-outline';
        }
    });
</script>