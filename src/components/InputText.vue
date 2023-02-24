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
  },
});

</script>

<template>
  <input
    :id="props.link"
    type="text"
    class="border-b-zinc-500 focus:border-b-zinc-800 focus:outline-none border-b-2 px-2 py-2 font-semibold"
    :class="props.css"
    :placeholder="props.placeholder"
    :maxlength="props.max"
    :autofocus="props.focus"
  />
</template>
