<template>
    <div class="v-application">
        <div class="v-application__wrap">
            <div class="d-flex justify-center align-center text-center h-100">
                <div>
                    <img src="@/assets/images/backgrounds/errorimg.svg" width="500" alt="404" />
                    <h4 class="text-h4 my-8" v-text="$t('page_not_found')" />
                    <v-btn rounded="pill" color="primary" class="mb-4" to="/home" v-text="$t('go_back_to_home')" />
                </div>
            </div>
        </div>
    </div>
</template>
;
