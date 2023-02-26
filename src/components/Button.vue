<script setup>
const props = defineProps({
  id: {
    type: String,
  },
  textColor: {
    type: String,
    default: "text-white",
  },
  bgColor: {
    type: String,
    default: "bg-zinc-600",
  },
  hoverBgColor: {
    type: String,
    default: "hover:bg-zinc-700",
  },
  type: {
    type: String,
    default: "button",
  },
  css: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button
  :id="props.id"
    class="flex items-center justify-center gap-2 rounded-lg sm:px-5 py-3 text-sm font-medium transition focus:outline-none w-full"
    :class="[props.textColor, props.bgColor, props.hoverBgColor, props.css]"
    :type="props.type"
  >
    <slot />
  </button>
</template>
