<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col
                    cols="12"
                    class="d-flex align-center"
                >
                    <div class="boxed-auth-wrap">
                        <v-card
                            rounded="xl"
                            elevation="10"
                            class="px-sm-1 mx-auto index-2 pa-8"
                        >
                            <v-card-item class="pa-sm-8">
                                <div class="d-flex justify-center mb-10">
                                    <h2
                                        class="text-h2 font-weight-bold mt-4"
                                        v-text="'Notes App'"
                                    />
                                </div>
                                <NotesForm />
                            </v-card-item>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script setup lang="ts">
    /* Notes form */
    import NotesForm from '@/components/auth/NotesForm.vue';
</script>
