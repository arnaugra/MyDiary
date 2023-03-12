<script setup>
import Button from "@components/Button.vue";
import Icon from "@components/Icon.vue";

const props = defineProps({
  id: {
    type: String,
  },
  textColor: {
    type: String,
  },
  bgColor: {
    type: String,
  },
  hoverBgColor: {
    type: String,
  },
  buttonText: {
    type: String,
  },
  buttonIcon: {
    type: String,
  },
  openCss: {
    type: String,
  },
  title: {
    type: String,
  },
});

// const emits = defineEmits(["openModal", "closeModal"]);

/**
 * Open the modal
 * @advertise CAN'T FIND A WAY TO DO THE SHOW MODAL WITH VUE 3
 */
function openModal() {
  document.getElementById(props.id).showModal();
}

/**
 * Close the modal
 * @advertise CAN'T FIND A WAY TO DO THE SHOW MODAL WITH VUE 3
 */
function closeModal() {
  document.getElementById(props.id).close();
}
</script>

<template>
  <Button
    @click.prevent="openModal"
    :textColor="props.textColor"
    :bgColor="props.bgColor"
    :hoverBgColor="props.hoverBgColor"
    :css="props.openCss"
  >
    <span v-if="props.buttonText != null">{{ props.buttonText }}</span>
    <Icon v-if="props.buttonIcon != null" :icon="props.buttonIcon" />
  </Button>

  <dialog
    :id="props.id"
    type="alert"
    class="bg-slate-200 max-w-screen-md w-11/12 rounded-lg z-50 scrollbar-none mt-5 sm:mt-40 backdrop:bg-slate-800 backdrop:opacity-50 backdrop:blur-3xl"
  >
    <div class="absolute top-8 left-8 font-semibold text-xl ">{{ props.title }}</div>
    <div class="flex justify-end w-full">
      <Button
        @click.prevent="closeModal"
        textColor="text-zinc-800"
        bgColor="transparent"
        hoverBgColor="transparent"
        css="w-min py-0 p-4 sm:px-0"
      >
        <Icon icon="ri-close-line" css="text-3xl" />
      </Button>
    </div>
    <div class="mt-5">
      <slot />
    </div>
  </dialog>
</template>
