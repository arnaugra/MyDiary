<script setup>

const props = defineProps({
    text: {
        type: String,
    },
    link: {
        type: String,
    },
})

</script>

<template>
    <label class="flex flex-col" :for="props.link">
        {{ props.text }}
        <slot />
    </label>
</template>