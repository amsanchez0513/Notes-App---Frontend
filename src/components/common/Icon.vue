<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps({
    item: String,
    level: Number,
    size: Number
  });

</script>

<template>
  <template v-if="level > 0">
    <Icon
      :icon="'solar:' + item"
      :height="size"
      :width="size"
      stroke-width="1.5"
      class="iconClass"
    />
  </template>
  <template v-else>
    <Icon
      :icon="'solar:' + item"
      :height="size"
      :width="size"
      stroke-width="1.5"
      class="iconClass"
    />
  </template>
</template>
