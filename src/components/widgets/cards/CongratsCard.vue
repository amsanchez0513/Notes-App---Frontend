<script setup lang="ts">
    // FOR PRESENTATION PURPOSES ONLY
    const user = JSON.parse(localStorage.getItem('user'));
</script>
<template>
    <v-card elevation="10" class="round">
        <v-card-text class="position-relative pb-0 ">
            <h5 class="text-h4 mb-1 font-weight-semibold">
                Congratulations, {{ user.first_name }}!
            </h5>
            <div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium">You have done 88% more sales</div>
            <div class="mt-6 d-sm-flex d-block">
                <ul class="list-unstyled mb-0">
                    <li class="d-flex align-center mb-5">
                        <v-avatar
                            class="bg-lightsuccess p-7 me-4 rounded-circle d-flex align-items-center justify-content-center"
                            size="48">
                            <img src="@/assets/images/svgs/friends-1585026.svg" alt="">
                        </v-avatar>
                        <div>
                            <h6 class="mb-1 text-h6 font-weight-semibold">10,000 new users</h6>
                            <p class="text-subtitle-1 text-grey100  font-weight-medium">Verified</p>
                        </div>
                    </li>
                    <li class="d-flex align-center mb-5">
                        <v-avatar
                            class="bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center"
                            size="48">
                            <img src="@/assets/images/svgs/icon-dd-lifebuoy.svg" alt="">
                        </v-avatar>
                        <div>
                            <h6 class="mb-1 text-h6 font-weight-semibold">20,000 KCoins</h6>
                            <p class="text-subtitle-1 text-grey100 font-weight-medium">Purchased</p>
                        </div>
                    </li>
                </ul>
                <div class="man-working-on-laptop ml-auto mb-n3">
                    <img src="@/assets/images/backgrounds/man-working-on-laptop.png" class="w-100" alt="">
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>