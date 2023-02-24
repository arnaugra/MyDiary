<script setup>

import Icon from '@components/Icon.vue';

const props = defineProps({
    icon: {
        type: String,
        default: 'ri-bubble-chart-line'
    },
    css: {
        type: String,
        default: 'text-2xl pr-2'
    },
    animation1: {
        type: String,
    },
    animation2: {
        type: String,
        default: 'animate-spin'
    }
})

</script>

<template>
    <div class="flex justify-center pt-16 w-full" :class="props.animation1">
        <Icon :icon="props.icon" :css="props.css" :animate="props.animation2" />
    </div>
</template>
