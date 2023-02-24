<script setup>

const props = defineProps({
  icon: {
    type: String,
  },
  css: {
    type: String,
    default: "text-xl",
  },
  animate: {
    type: String,
    default: "",
  },
});

</script>

<template>
 <i :class="[props.icon, props.css, props.animate]"></i>
</template>
