<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" class="text-center" >
                <div class="pt-2 pb-4">
                    <span
                        class="text-subtitle-1 text-grey100 font-weight-medium"
                        v-text="`© ${current_year} ${$t(`all_rights_reserved`)} ${config.APP_NAME}`" 
                    />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
    import config from '@/config/index';

    const current_year = (new Date()).getFullYear();
</script>
