<script setup>

import Icon from "@components/Icon.vue";

import { ref } from "vue";

const props = defineProps({
  type: {
    type: Number,
    validator: (value) => [1, 2, 3].includes(value),
    default: "1",
  },
  title: {
    type: String,
    default: "Title",
  },
  body: {
    type: String,
    default: "Body",
  },
  action: {
    type: Boolean,
  },
});
const emits = defineEmits(["closeToast"]);

const toastOff = ref(true);

const types = {
  1: {
    icon: "ri-checkbox-circle-line",
    color: "text-green-600",
  },
  2: {
    icon: "ri-error-warning-line",
    color: "text-yellow-600",
  },
  3: {
    icon: "ri-close-circle-line",
    color: "text-red-600",
  },
};

let closeTimeout;
function timeToCloseToast() {
  if (toastOff.value) {
    toastOff.value = false;
    closeTimeout = setTimeout(() => {
      toastOff.value = true;
      closeToast();
    }, 5000);
  }
}
function closeToast() {
  clearTimeout(closeTimeout);
  emits("closeToast", {
    action: false,
    area: "-z-50",
  });
}
</script>

<template>
  <div
    @transitionstart="timeToCloseToast"
    role="alert"
    class="rounded-xl bg-zinc-100 p-4 shadow-xl shadow-zinc-400 my-3 w-full transition duration-500 ease-in-out"
    :class="action ? 'opacity-100' : 'opacity-0'"
  >
    <div class="flex items-start gap-4">
      <i class="text-2xl" :class="[types[type].icon, types[type].color]"></i>

      <div class="flex-1">
        <p class="block font-medium text-gray-900">
          {{ title }}
        </p>

        <p class="mt-1 text-sm text-gray-700">
          {{ body }}
        </p>
      </div>

      <button
        @click="closeToast"
        class="text-gray-500 transition hover:text-gray-600"
      >
      <Icon icon="ri-close-line" css="text-2xl" />
      </button>
    </div>
  </div>
</template>
