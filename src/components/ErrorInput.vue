<script setup>

import Icon from '@components/Icon.vue';

const props = defineProps({
    text: {
        type: String,
    },
})

</script>

<template>
    <p class="pt-1 pl-1 text-red-500 font-semibold text-sm flex items-center gap-2">
        <Icon icon="ri-error-warning-fill" css="text-base" />
        <div class="first-letter:uppercase">
            {{ props.text }}
        </div>
    </p>
</template>