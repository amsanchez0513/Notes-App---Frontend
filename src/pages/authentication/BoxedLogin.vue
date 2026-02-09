<template>
    <div class="login-app-wrapper">
        <div
            class="auth-login position-relative d-flex align-center justify-content-center px-lg-16 px-sm-8 px-3 rounded-xl"
        >
            <div
                class="auth-login-wrapper position-relative rounded-xl mx-lg-16 mx-4 mx-auto w-100"
            >
                <v-card elevation="0" class="overflow-hidden px-sm-3 position-relative z-index-2">
                    <v-card-item class="px-sm-8 px-3">

                        <!-- <Logo /> -->

                        <v-row class="justify-md-space-around align-center py-md-8">
                            <v-col cols="12" lg="5" md="6" class="d-md-flex d-none">
                                <img
                                    src="@/assets/images/backgrounds/login-security.png"
                                    class="w-100"
                                    alt="login-background"
                                />
                            </v-col>
                            <v-col cols="12" lg="5" md="6">
                                <div class="mt-xl-0 mt-5 mw-100">
                                    <v-row>
                                        <!-- <h2
                                            class="text-h2 font-weight-bold mb-2"
                                            v-text="`${$t('welcome_to') + config.APP_NAME}`"
                                        /> -->
                                        <!-- <h1
                                            class="text-h1 font-weight-bold mb-2 mt-4"
                                            v-text="$t('welcome_to')"
                                        />
                                        <Logo /> -->
                                    </v-row>
                                    <q-spacer />
                                    <NotesForm />

                                    <!-- <h6
                                        class="text-subtitle-1 text-grey100 d-flex align-center mt-6 font-weight-medium"
                                    >
                                        <span
                                            class="text-subtitle-1 text-grey100 font-weight-medium"
                                            v-text="`${$t(`new_to`)} ${config.APP_NAME} ?`"
                                        />
                                        <v-btn
                                            class="pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium"
                                            height="auto"
                                            to="/auth/register"
                                            variant="plain"
                                        >
                                            {{ $t('create_an_account') }}
                                        </v-btn>
                                    </h6> -->

                                </div>
                            </v-col>
                        </v-row>
                    </v-card-item>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Logo from '@/layouts/full/logo/Logo.vue';
    /* Login form */
    import NotesForm from '@/components/auth/NotesForm.vue';
</script>
