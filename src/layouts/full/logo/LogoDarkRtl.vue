<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/logos/klika-text.png';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <v-img
                width="140"
                :src="logo"
                alt="home"
            />
        </RouterLink>
    </div>
</template>
