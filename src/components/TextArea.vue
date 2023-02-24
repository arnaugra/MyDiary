<script setup>

const props = defineProps({
    placeholder: {
        type: String,
    },
    link: {
        type: String,
    },
    max: {
        type: Number,
    },
    focus: {
        type: Boolean,
        default: false,
    },
    css: {
        type: String,
        default: "",
    }
})

</script>

<template>
    <textarea
    :id="props.link" 
    rows="1" 
    type="text" 
    class="border-b-zinc-500 focus:border-b-zinc-800 focus:outline-none border-b-2 px-2 py-2 font-semibold"
    :class="[props.css]" 
    :placeholder="props.placeholder" 
    :maxlength="props.max" 
    :autofocus="props.focus" 
    oninput="this.style.height = '';this.style.height = this.scrollHeight + 2 + 'px'"
    ></textarea>
</template>
