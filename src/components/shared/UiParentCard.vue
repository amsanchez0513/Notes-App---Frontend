<script setup lang="ts">
const props = defineProps<{
    title: string;
    description?: string;
}>();
</script>

<template>
    <v-card elevation="10" >
        <v-card-item class="py-4 px-6">
            <div class="d-sm-flex align-center justify-space-between">
                <v-card-title>
                    <h5
                        class="text-h5 font-weight-semibold"
                        v-text="$t(props.title)"
                    />
                    <span
                        v-if="props.description"
                        class="text-subtitle-1 text-grey100 mt-2 font-italic"
                        v-text="$t(props.description)"
                    />
                </v-card-title>
            </div>
        </v-card-item>
        <v-divider />
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>
