<template>
    <v-card
        elevation="0"
        class="mt-6"
    >
        <v-card-item class="text-center">
            <img
                src="@/assets/images/products/empty-shopping-cart.svg"
                alt="image"
                width="400"
            />
            <h5
                class="text-h2 pt-3 font-weight-semibold"
                v-text="$t(props.title)"
            />
            <h5
                class="text-subtitle-1 text-13 mt-2 mb-4 text-grey100"
                v-text="$t(props.description || '')"
            />
            <v-btn
                v-if="props.show_btn"
                size="large"
                color="primary"
                class="mb-2"
                rounded="pill"
                v-text="$t(props.btn_text || '')"
            />
        </v-card-item>
    </v-card>
</template>

<script setup lang="ts">

    const props = defineProps<{
        title: string,
        description?: string,
        show_btn?: boolean,
        btn_text?: string
    }>();
</script>
