<script setup>

const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

</script>

<template>
  <details
    class="group [&_summary::-webkit-details-marker]:hidden rounded-lg bg-zinc-200"
    :open="props.open"
  >
    <summary
      class="flex items-center justify-between px-2 rounded-lg group-open:border-b-zinc-800 group-open:border-b-2 group-open:rounded-b-none cursor-pointer bg-zinc-300 hover:bg-zinc-400 transition duration-300 text-zinc-500 hover:text-zinc-800"
    >
      <h2 class="font-medium">
      {{ props.title }} 
      </h2>
      <i
        class="ri-arrow-up-s-line text-2xl transition duration-300 group-open:rotate-180"
      ></i>
    </summary>

    <p class="p-3 leading-relaxed text-gray-700 transition duration-500">
      {{ props.content }}
    </p>
  </details>
</template>
