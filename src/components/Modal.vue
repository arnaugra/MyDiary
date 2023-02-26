<script setup>

import Button from "@components/Button.vue";
import Icon from "@components/Icon.vue";

const props = defineProps({
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
  show: {
    type: Boolean,
  },
});

const emits = defineEmits(["openModal", "closeModal"]);

/**
 * Opens the modal
 */
function openModal() {
  emits("openModal", true);
}

/**
 * Closes the modal
 */
function closeModal() {
  emits("closeModal", false);
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

  <dialog open v-if="props.show" type="alert" class=" bg-slate-200 
  max-w-screen-md w-11/12 rounded-lg z-50 scrollbar-none
  backdrop-filter backdrop-blur-sm backdrop-saturate-150
  ">
    <div class="flex justify-end w-full">
      <Button 
      @click.prevent="closeModal"
      textColor="text-zinc-800"
      bgColor="transparent"
      hoverBgColor="transparent"
      css="w-min py-0 pl-4 sm:px-0">
        <Icon icon="ri-close-line" css="text-3xl" />
      </Button>
    </div>
    <div class="mt-5 ">      
      <slot />
    </div>
  </dialog>
</template>
